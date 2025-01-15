import { UrlModelFlat, URLString } from "@/types/url.types";

export const urlModelBuilder = ({
  original,
  shortened,
}: {
  original: URLString;
  shortened: URLString;
}): UrlModelFlat => ({
  original,
  shortened,
  createdAt: new Date().toISOString(),
});

export const generateShortenedUrl = (): URLString => {
  const shortenedUrl = `http://localhost:3000/${Math.random().toString(36).slice(2)}`;
  return shortenedUrl;
};
