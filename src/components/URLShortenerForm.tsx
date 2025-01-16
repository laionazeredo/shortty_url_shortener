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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center space-y-8 m-4"
    >
      <div className="flex items-center space-x-4">
        <input
          type="text"
          id="url"
          placeholder="https://mylongurl.com"
          className="p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="submit"
          value="Shorten!"
          className="p-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 font-bold"
        />
      </div>
    </form>
  );
};

export default UrlShortenerForm;
