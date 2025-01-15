"use client";

import { useContext } from "react";
import { UrlShortenerContext } from "@/contexts/url-shortener.context";
import { SuccessMessage, ErrorMessage } from "./Messages";

const ResultsArea = () => {
  const { urlModel } = useContext(UrlShortenerContext);
  if (urlModel === null) {
    return null;
  } else if (urlModel instanceof Error) {
    return <ErrorMessage error={urlModel} />;
  } else {
    return <SuccessMessage urlModel={urlModel} />;
  }
};

export default ResultsArea;
