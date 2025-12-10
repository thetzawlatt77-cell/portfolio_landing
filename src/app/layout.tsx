import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "Thet Zaw Latt | Flutter Developer Portfolio";
const siteDescription =
  "Experienced Flutter developer with 5+ years crafting polished Android and iOS apps, strong UI/UX, and publishing across major stores.";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  keywords: [
    "Thet Zaw Latt",
    "Flutter developer",
    "Mobile developer",
    "Android",
    "iOS",
    "Figma",
    "UI/UX",
    "Dart",
    "Flutter portfolio",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Thet Zaw Latt Portfolio",
    images: [
      {
        url: "/pp.png",
        width: 1200,
        height: 1200,
        alt: "Thet Zaw Latt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@",
    images: ["/pp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
