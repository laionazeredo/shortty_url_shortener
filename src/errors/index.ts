export class InvalidUrlError extends Error {
  constructor(message?: string) {
    super(
      message
        ? `There is a problem generating your URL: ${message}`
        : "Invalid URL format",
    );
    this.name = "InvalidUrlError";
  }
}
