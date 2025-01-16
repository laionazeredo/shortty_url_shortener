export type Slug = string;
export type UrlString = string;
export interface UrlModel {
  id: string;
  original: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export type UrlModelFlat = Pick<UrlModel, "original" | "slug">;

export type UrlShortenerContextType = {
  urlModel: UrlModelFlat | null | Error;
  setUrlModel: (urlModel: UrlShortenerContextType["urlModel"]) => void;
};
