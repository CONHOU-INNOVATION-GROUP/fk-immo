import slugify from "slugify";

export function generateSlug(title: string): string {
  return slugify(title, {
    locale: "fr",
    lower: true,
  });
}
