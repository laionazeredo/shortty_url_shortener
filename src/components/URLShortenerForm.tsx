"use client";

import { persistUrl } from "@/actions/urls";

const UrlShortenerForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = (event.target as HTMLFormElement).url.value;
    const parsedUrl = new URL(url);
    const shortenedUrl = await persistUrl(parsedUrl.href);
    console.log({ shortenedUrl });

    return shortenedUrl;
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
