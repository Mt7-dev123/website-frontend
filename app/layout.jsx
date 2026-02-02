import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientLayout from "./ClientLayout";
import ClientGlobalBackground from "../components/mainBackground/ClientGlobalBackground";

/* ---------------- FONTS ---------------- */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---------------- METADATA ---------------- */

export const metadata = {
  title: "MT7.in",
  description: "One Stop Solution for all your Services Needs",
};

/* ---------------- ROOT LAYOUT ---------------- */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZNSK48JCVR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZNSK48JCVR');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-black text-white`}
      >
        {/* 🔥 CLIENT-ONLY BACKGROUND */}
        <ClientGlobalBackground />

        {/* 🧱 APP CONTENT */}
        <main className="relative z-10">
          <ClientLayout>{children}</ClientLayout>
        </main>

        {/* 📊 ANALYTICS */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
