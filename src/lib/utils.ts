import fs from "fs";
import path from "path";

import { PropertyType } from "@/types/site";
import { clsx, type ClassValue } from "clsx";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF",
  }).format(price);
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
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

export function getProperties() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "properties", "contents")
  );
}

export function getProperty(slug: string) {
  const properties = getProperties();
  const property = properties.find((property) => property.slug === slug);
  if (!property) {
    notFound();
  }
  return property;
}
