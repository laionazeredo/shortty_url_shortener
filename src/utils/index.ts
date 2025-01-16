import { UrlModel, Slug, UrlString } from "@/types";

export const urlModelBuilder = ({
  original,
  slug,
}: {
  original: UrlString;
  slug: Slug;
}): UrlModel => ({
  original,
  slug,
});

export const generateShortenedSlug = (maxLength = 10): Slug => {
  // Made with help of AI, I confess.
  if (maxLength > 10) {
    maxLength = 10;
  }

  const timestamp = Date.now().toString(36);
  const randomPart = Math.random().toString(36).substring(2, 7);

  let slug = `${timestamp}${randomPart}`.replace(/[^a-z0-9]+/g, "");

  if (slug.length > maxLength) {
    slug = slug.substring(slug.length - maxLength);
  }

  if (slug.length == 0) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    slug += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return slug;
};
