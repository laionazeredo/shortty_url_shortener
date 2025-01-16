CREATE TABLE "url_hit_tracking" (
	"id" serial PRIMARY KEY NOT NULL,
	"original" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "urls" (
	"original" text PRIMARY KEY NOT NULL,
	"slug" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "urls_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "url_hit_tracking" ADD CONSTRAINT "url_hit_tracking_original_urls_original_fk" FOREIGN KEY ("original") REFERENCES "public"."urls"("original") ON DELETE no action ON UPDATE no action;