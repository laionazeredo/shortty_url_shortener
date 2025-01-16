import { UrlModel, Slug, UrlString } from "@/types";
import { db } from "@/external/db/connection";
import { UrlTable } from "@/external/db/schema";
import { eq } from "drizzle-orm";

const MainRepository = (() => {
  return {
    getByOriginal: async (original: UrlString) => {
      try {
        const result = await db
          .select({ slug: UrlTable.slug, original: UrlTable.original })
          .from(UrlTable)
          .where(eq(UrlTable.original, original));
        if (result) {
          return Promise.resolve(result[0]);
        } else {
          return Promise.reject(null);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    getBySlug: async (slug: Slug) => {
      try {
        const result = await db
          .select({ slug: UrlTable.slug, original: UrlTable.original })
          .from(UrlTable)
          .where(eq(UrlTable.slug, slug));
        if (result) {
          return Promise.resolve(result[0]);
        } else {
          return Promise.reject(null);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
    set: async (value: UrlModel) => {
      try {
        const inserted = await db
          .insert(UrlTable)
          .values({
            original: value.original,
            slug: value.slug,
          })
          .returning({ slug: UrlTable.slug, original: UrlTable.original })
          .execute();
        return Promise.resolve(inserted[0]);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  };
})();

export default MainRepository;
