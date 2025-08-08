import type { Metadata } from "next";
import { Raleway, Bebas_Neue } from "next/font/google";
import "./globals.css";
import AuthModalContext from "@/lib/context/auth-modal-context";
import Header from "@/components/header";
import ReactQueryContext from "@/lib/context/react-query-context";
import Footer from "@/components/footer";
import UserContext from "@/lib/context/user-context";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";
import GlobalScripts from "@/components/global-scripts";
import WelcomeModalClientWrapper from "@/components/auth/welcome-modal-client-wrapper";
import ScrollToTopTempFix from "@/components/scroll-to-top-temp-fix";
import Topbar from "@/components/header/Topbar";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-bebas-neue" });

export const metadata: Metadata = {
  title: "RARA Treks, Tours and Travel",
  description:
    "Explore authentic RARA Tours and Treks in Nepal. Discover local experiences, community homestays, and nature-filled adventures that make a positive impact.",
  keywords: [
    "RARA Tours and Trek Nepal",
    "RARA Trek",
    "Nepal homestay",
    "community tourism",
    "CHN Nepal",
    "RARA community network",
    "homestay network Nepal",
    "trekking in Nepal",
    "RARA Lake tour",
  ],
};


export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${bebasNeue.variable} min-h-screen flex flex-col bg-[#F2F5F0] text-black`}
      >
        <ReactQueryContext>
          <UserContext>
            <AuthModalContext>
              <Topbar />
              <Header />
              {children}
              {auth}
              {/* <Footer /> */}
              <Toaster />
              <NextTopLoader height={5} color="hsl(var(--primary))" />
              <WelcomeModalClientWrapper />
              <ScrollToTopTempFix />
            </AuthModalContext>
          </UserContext>
        </ReactQueryContext>
        <GlobalScripts />
      </body>
    </html>
  );
}
