import { getProperties, getProperty } from "@/lib/properties";
import { siteInfo } from "@/lib/site";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const properties = getProperties(["src", "app", "properties", "contents"]);
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const property = getProperty(params.slug, [
    "src",
    "app",
    "properties",
    "contents",
  ]);
  if (!property) {
    return {};
  }
  const { title, description, image } = property.metadata;

  const ogImage = image
    ? `https://${siteInfo.url}${image}`
    : `https://${siteInfo.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${siteInfo.url}/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
