CREATE TABLE "urls" (
	"id" serial PRIMARY KEY NOT NULL,
	"original" text NOT NULL,
	"slug" varchar(10) UNIQUE NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
CREATE INDEX idx_urls_original ON urls(original);
CREATE UNIQUE INDEX idx_urls_slug ON urls(slug);

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_urls_updated_at
BEFORE UPDATE ON urls
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
