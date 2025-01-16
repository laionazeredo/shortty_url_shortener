"use client";
import { useContext } from "react";
import { persistUrl } from "@/actions/urls";
import { UrlShortenerContext } from "@/contexts/url-shortener.context";
import { InvalidUrlError } from "@/errors";

const UrlShortenerForm = () => {
  const { setUrlModel } = useContext(UrlShortenerContext);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = (event.target as HTMLFormElement).url
      .value as unknown as string;
    try {
      const parsedUrl = new URL(url);
      const shortenedUrl = await persistUrl(parsedUrl.href);
      if (shortenedUrl instanceof Error) throw shortenedUrl;
      setUrlModel(shortenedUrl);
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
      setUrlModel(new InvalidUrlError(message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">URL</label>
      <input type="text" id="url" placeholder="https://mylongurl.com" />
      <input type="submit" value="Shorten!!!" />
    </form>
  );
};

export default UrlShortenerForm;
