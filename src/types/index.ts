export type Slug = string;
export type UrlString = string;
export type UrlModel = {
  original: UrlString;
  slug: Slug;
};

export type UrlShortenerContextType = {
  urlModel: UrlModel | null | Error;
  setUrlModel: (urlModel: UrlShortenerContextType["urlModel"]) => void;
};
