"use client";

import { UrlShortenerContextType } from "@/types";
import { createContext, useState, type ReactNode } from "react";

export const UrlShortenerContext = createContext<UrlShortenerContextType>({
  urlModel: null,
  setUrlModel: () => {},
});

export const UrlShortenerProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<UrlShortenerContextType["urlModel"]>(null);

  const setUrlModel = (newUrlModel: UrlShortenerContextType["urlModel"]) => {
    setValue(newUrlModel);
  };

  const contextValue = {
    urlModel: value,
    setUrlModel,
  };

  return (
    <UrlShortenerContext.Provider value={contextValue}>
      {children}
    </UrlShortenerContext.Provider>
  );
};
