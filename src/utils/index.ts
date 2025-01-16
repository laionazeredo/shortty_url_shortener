import { UrlModelFlat, Slug, UrlString } from "@/types";

export const urlModelBuilder = ({
  original,
  slug,
}: {
  original: UrlString;
  slug: Slug;
}): UrlModelFlat => ({
  original,
  slug,
});

export const generateShortenedSlug = (): Slug => {
  const slug = `${Math.random().toString(36).slice(2)}`;
  return slug;
};
