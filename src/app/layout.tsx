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

const siteTitle = "Thet Zaw Latt | Senior Flutter Developer";
const siteDescription =
  "Senior Flutter Developer based in Da Nang, Vietnam with 5+ years of experience building production mobile applications across fintech, real-time systems, marketplaces, streaming, and consumer products.";

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
    "Senior Flutter Developer",
    "Flutter developer",
    "Mobile engineer",
    "Senior Mobile Engineer",
    "Android",
    "iOS",
    "Dart",
    "Firebase",
    "Flutter portfolio",
    "Da Nang",
    "Ho Chi Minh City",
    "Hanoi",
    "Vietnam",
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
        alt: "Thet Zaw Latt, Senior Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||"dark";var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.style.colorScheme=t;}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-50 text-neutral-900 antialiased transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
