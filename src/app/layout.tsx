import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { siteInfo } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import "./globals.css";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};
export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteInfo.url}`),
  title: {
    default: siteInfo.title,
    template: `%s - ${siteInfo.title}`,
  },
  description: siteInfo.description,
  authors: [
    {
      name: siteInfo.author,
      url: siteInfo.url,
    },
  ],
  creator: siteInfo.creator,
  icons: {
    icon: "/logo.webp",
  },
  openGraph: {
    title: siteInfo.title,
    description: siteInfo.description,
    url: siteInfo.url,
    siteName: siteInfo.title,
    images: [{ url: "/hero.webp" }],
    locale: "fr_CI",
    type: "website",
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
      <body className={`${primary.variable} antialiased`}>
        <NuqsAdapter>
          <Nav />
          {children}
          <Footer />
          <Toaster richColors closeButton />
        </NuqsAdapter>
      </body>
    </html>
  );
}
