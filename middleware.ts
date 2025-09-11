import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Currently, no user check; just continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
