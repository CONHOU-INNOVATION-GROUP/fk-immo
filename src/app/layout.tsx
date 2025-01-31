import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { siteInfo } from "@/lib/site";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteInfo.title,
  description: siteInfo.description,
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: siteInfo.title,
    description: siteInfo.description,
    url: siteInfo.url,
    siteName: siteInfo.title,
    images: [{ url: "/hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@conhouinnovationgroup",
    images: [{ url: "/hero.webp" }],
    description: siteInfo.description,
    title: siteInfo.title,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": 0,
    "max-snippet": 150,
  },
  keywords: siteInfo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${interSans.variable} antialiased`}>
        <NuqsAdapter>
          <Nav />
          {children}
          <Footer />
        </NuqsAdapter>
      </body>
    </html>
  );
}
