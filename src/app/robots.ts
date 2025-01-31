import { siteInfo } from "@/lib/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${siteInfo.url}/sitemap.xml`,
  };
}
