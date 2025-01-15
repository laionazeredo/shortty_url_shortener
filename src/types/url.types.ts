export type URLString = string;
export interface UrlModel {
  id: string;
  original: string;
  shortened: string;
  createdAt: string;
}

export type UrlModelFlat = Omit<UrlModel, "id">;
