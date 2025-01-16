import { InvalidUrlError } from "@/errors";
import { UrlModel } from "@/types";

type SuccessMessageProps = {
  urlModel: UrlModel;
};
export const SuccessMessage = ({ urlModel }: SuccessMessageProps) => {
  const url = `${window.location.origin}/${urlModel?.slug}`;
  return (
    <section>
      <h2>Results</h2>
      <h3>Success! Here is your Short Url:</h3>
      <p>
        <strong>Original URL:</strong> {urlModel?.original}
      </p>
      <p>
        <strong>Shortened URL:</strong>{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </p>
    </section>
  );
};

export const ErrorMessage = ({ error }: { error: Error }) => {
  return error instanceof InvalidUrlError ? (
    <h2>Please, try with a valid URL!</h2>
  ) : (
    <h2>Oops! Something went wrong. Please try again.</h2>
  );
};
