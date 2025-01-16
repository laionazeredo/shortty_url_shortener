"use server";

import { UrlModelFlat, Slug } from "@/types";
import { generateShortenedSlug, urlModelBuilder } from "@/utils";

const fakeDB = (() => {
  const urls = new Map<Slug, UrlModelFlat>();
  return {
    get: async (slug: Slug) =>
      urls.get(slug) ? Promise.resolve(urls.get(slug)) : Promise.reject(null),
    set: async (value: UrlModelFlat) => {
      urls.set(value.original, value);
      return Promise.resolve(urls.get(value.original)) as Promise<UrlModelFlat>;
    },
  };
})();

export const persistUrl = async (payload: Slug) => {
  const alreadyShortened = await fakeDB.get(payload).catch(() => null);
  if (alreadyShortened) return alreadyShortened as UrlModelFlat;
  const shortened = generateShortenedSlug();
  const url = urlModelBuilder({ original: payload, slug: shortened });
  return await fakeDB
    .set(url)
    .catch((error) => new Error(`Error persisting url`, { cause: error }));
};

export const getSlug = async (slug: Slug): Promise<UrlModelFlat | null> =>
  (await fakeDB.get(slug)) || null;
