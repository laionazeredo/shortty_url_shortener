"use server";

import { UrlModel, Slug, UrlString } from "@/types";
import { generateShortenedSlug, urlModelBuilder } from "@/utils";
import MainRepository from "@/actions/repositories/main";

export const persistUrl = async (payload: UrlString) => {
  const alreadyShortened = await MainRepository.getByOriginal(payload).catch(
    () => null,
  );
  if (alreadyShortened) return alreadyShortened as unknown as UrlModel;
  const shortened = generateShortenedSlug();
  const url = urlModelBuilder({ original: payload, slug: shortened });
  return await MainRepository.set(url).catch(
    (error) => new Error(`Error persisting url`, { cause: error }),
  );
};

export const getSlug = async (slug: Slug): Promise<UrlModel | null> =>
  ((await MainRepository.getBySlug(slug)) as unknown as UrlModel) || null;
