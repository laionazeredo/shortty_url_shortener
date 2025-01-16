import { UrlModelFlat } from "@/types";

type SuccessMessageProps = {
  urlModel: UrlModelFlat;
};
export const SuccessMessage = ({ urlModel }: SuccessMessageProps) => (
  <section>
    <h2>Results</h2>
    <h3>Success! Here is your Short Url:</h3>
    <p>
      <strong>Original URL:</strong> {urlModel?.original}
    </p>
    <p>
      <strong>Shortened URL:</strong>{" "}
      {`${window.location.origin}/${urlModel?.slug}`}
    </p>
  </section>
);

export const ErrorMessage = ({ error }: { error: Error }) =>
  error.message === "Invalid URL" ? (
    <h2>Please, try with a valid URL!</h2>
  ) : (
    <h2>Oops! Something went wrong. Please try again.</h2>
  );
