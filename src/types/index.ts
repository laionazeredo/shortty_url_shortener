export type URLString = string;
export interface UrlModel {
  id: string;
  original: string;
  shortened: string;
  createdAt: string;
}

export type UrlModelFlat = Omit<UrlModel, "id">;

export type UrlShortenerContextType = {
  urlModel: UrlModelFlat | null | Error;
  setUrlModel: (urlModel: UrlShortenerContextType["urlModel"]) => void;
};
