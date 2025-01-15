import { UrlModelFlat, Slug } from "@/types";

export const urlModelBuilder = ({
  original,
  shortened,
}: {
  original: Slug;
  shortened: Slug;
}): UrlModelFlat => ({
  original,
  shortened,
  createdAt: new Date().toISOString(),
});

export const generateShortenedSlug = (): Slug => {
  const slug = `${Math.random().toString(36).slice(2)}`;
  return slug;
};
