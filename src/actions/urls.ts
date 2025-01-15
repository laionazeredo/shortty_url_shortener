"use server";

import { UrlModelFlat, URLString } from "@/types";
import { generateShortenedUrl, urlModelBuilder } from "@/utils";

const fakeDB = (() => {
  const urls = new Map<URLString, UrlModelFlat>();
  return {
    get: async (key: URLString) =>
      urls.get(key) ? Promise.resolve(urls.get(key)) : Promise.reject(null),
    set: async (value: UrlModelFlat) => {
      urls.set(value.original, value);
      return Promise.resolve(urls.get(value.original)) as Promise<UrlModelFlat>;
    },
  };
})();

export const persistUrl = async (payload: URLString) => {
  const alreadyShortened = await fakeDB.get(payload).catch(() => null);
  if (alreadyShortened) return alreadyShortened as UrlModelFlat;
  const shortened = generateShortenedUrl();
  const url = urlModelBuilder({ original: payload, shortened });
  return await fakeDB
    .set(url)
    .catch((error) => new Error(`Error persisting url`, { cause: error }));
};
