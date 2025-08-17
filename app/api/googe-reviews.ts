import type { NextApiRequest, NextApiResponse } from "next";
import { fetchGooglePlaceDetails, GooglePlacesError } from "@/lib/utils/googleApi";
import { ApiResponse, GooglePlaceDetails } from "@/types/google.types";

// Rate limiting (simple in-memory store)
const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = parseInt(process.env.API_RATE_LIMIT || "100");
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = requestCounts.get(ip);

  if (!userRequests || now > userRequests.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userRequests.count >= RATE_LIMIT) {
    return false;
  }

  userRequests.count++;
  return true;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<GooglePlaceDetails>>
) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed",
      message: "Only GET requests are supported",
    });
  }

  const { placeId, fields } = req.query;

  // Validate placeId
  if (!placeId || typeof placeId !== "string") {
    return res.status(400).json({
      error: "Bad Request",
      message: "Place ID is required and must be a string",
    });
  }

  // Rate limiting
  const clientIp =
    (req.headers["x-forwarded-for"] as string) ||
    req.connection.remoteAddress ||
    "unknown";

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({
      error: "Too Many Requests",
      message: "Rate limit exceeded. Please try again later.",
    });
  }

  try {
    const fieldsStr =
      typeof fields === "string"
        ? fields
        : "name,rating,user_ratings_total,reviews";
    const placeDetails = await fetchGooglePlaceDetails(placeId, fieldsStr);

    // Set cache headers
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    res.status(200).json({
      data: placeDetails,
      message: "Success",
    });
  } catch (error) {
    console.error("API Error:", error);

    if (error instanceof GooglePlacesError) {
      return res.status(error.statusCode || 500).json({
        error: error.name,
        message: error.message,
      });
    }

    res.status(500).json({
      error: "Internal Server Error",
      message: "An unexpected error occurred while fetching place details",
    });
  }
}
