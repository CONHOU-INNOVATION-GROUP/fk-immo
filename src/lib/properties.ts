import { PropertyType } from "@/types/site";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import path from "path";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(dir)) {
    notFound();
  }
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  return {
    metadata: {
      title: data.title,
      description: data.description,
      price: data.price,
      tag: data.tag,
      image: data.image,
      features: data.features || [],
      details: data.details,
    },
    content,
  };
}

function getMDXData(dir: string): PropertyType[] {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getProperties(customPath = ["", "", "", ""]) {
  const propertiesDir = path.join(process.cwd(), ...customPath);
  const properties = getMDXData(propertiesDir);
  return properties;
}

export function getProperty(slug: string, customPath = ["", "", "", ""]) {
  const properties = getProperties(customPath);
  const property = properties.find((property) => property.slug === slug);
  if (!property) {
    notFound();
  }
  return property;
}
