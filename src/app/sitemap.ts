import { siteInfo } from "@/lib/site";
import { getProperties } from "@/lib/utils";

export default async function sitemap() {
  const properties = getProperties().map((property) => ({
    url: `${siteInfo.url}/${property.slug}`,
    lastModified:  new Date().toISOString().split("T")[0],
  }));

  return [...siteInfo.routes, ...properties];
}
