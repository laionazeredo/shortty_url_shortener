"use client";
import { useContext } from "react";
import { persistUrl } from "@/actions/urls";
import { UrlShortenerContext } from "@/contexts/url-shortener.context";

const UrlShortenerForm = () => {
  const { setUrlModel } = useContext(UrlShortenerContext);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = (event.target as HTMLFormElement).url.value;
    try {
      const parsedUrl = new URL(url);
      const shortenedUrl = await persistUrl(parsedUrl.href);
      setUrlModel(shortenedUrl);
    } catch {
      setUrlModel(new Error("Invalid URL"));
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
