import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";
import ExperienceShell from "@/components/ExperienceShell";
import { generateMetadataObject } from "@/lib/seo";
import AgentBookingBar from "@/components/AgentBookingBar";
import Preloader from "@/components/Preloader";

const inter = Inter({ subsets: ["latin"] });

// --- METADATA DASAR UNTUK SELURUH SITUS ---
export const metadata: Metadata = generateMetadataObject({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const webMcpOriginTrialToken = process.env.NEXT_PUBLIC_WEBMCP_ORIGIN_TRIAL_TOKEN;

  return (
    <html lang="id">
      {webMcpOriginTrialToken ? (
        <head>
          <meta httpEquiv="origin-trial" content={webMcpOriginTrialToken} />
        </head>
      ) : null}
      <body className={inter.className}>
        <Preloader />
        <ExperienceShell />
        <div className="min-h-screen bg-white">
          {children}
          <AgentBookingBar />
          <FloatingWidgets />
        </div>
      </body>
    </html>
  );
}
