import { InvalidUrlError } from "@/errors";
import { UrlModel } from "@/types";
import { useState, useRef } from "react";

type SuccessMessageProps = {
  urlModel: UrlModel;
};
export const SuccessMessage = ({ urlModel }: SuccessMessageProps) => {
  const [copyStatus, setCopyStatus] = useState("");
  const linkRef = useRef(null);
  const url = `${window.location.origin}/${urlModel?.slug}`;
  const HINT_TIMEOUT = 3000;

  const copyToClipboard = async () => {
    if (navigator.clipboard && linkRef.current) {
      try {
        await navigator.clipboard.writeText(linkRef.current.innerText);
        setCopyStatus("Copied!");
        setTimeout(() => setCopyStatus(""), HINT_TIMEOUT);
      } catch (err) {
        console.error("Failed to copy: ", err);
        setCopyStatus("Copy failed");
        setTimeout(() => setCopyStatus(""), HINT_TIMEOUT);
      }
    } else {
      console.error("Clipboard API not supported or element not found.");
      setCopyStatus("Not supported");
      setTimeout(() => setCopyStatus(""), HINT_TIMEOUT);
    }
  };

  return (
    <section className="mt-8 text-center bg-white p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <h3 className="text-lg font-semibold mb-2">
        Success! Here is your Short URL:
      </h3>
      <p className="mb-1">
        <strong className="font-medium">Original URL:</strong>{" "}
        {urlModel?.original}
      </p>
      <p className="flex items-center justify-center">
        <strong className="font-medium mr-1">Shortened URL:</strong>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          ref={linkRef}
          className="text-blue-500 underline break-all"
        >
          {url}
        </a>
        <button
          onClick={copyToClipboard}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
        >
          Copy
        </button>
      </p>
      {copyStatus && <p className="mt-2 text-green-500">{copyStatus}</p>}
    </section>
  );
};

export const ErrorMessage = ({ error }: { error: Error }) => {
  return error instanceof InvalidUrlError ? (
    <h2 className="text-center text-md bg-red-100 p-4 rounded">
      <strong>Please, try with a valid URL!</strong>
    </h2>
  ) : (
    <h2 className="text-center text-md bg-red-100 p-4 rounded">
      <strong>Oops! Something went wrong. Please try again.</strong>
    </h2>
  );
};
