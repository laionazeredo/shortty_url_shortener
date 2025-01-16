import { getSlug, trackUrl } from "@/actions";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = await params;

  try {
    const found = await getSlug(slug);
    const originalUrl = found ? found.original : null;

    if (originalUrl) {
      trackUrl(originalUrl);
      return NextResponse.redirect(new URL(originalUrl), 301);
    } else {
      return new NextResponse("Original URL not found.", { status: 404 });
    }
  } catch (error) {
    console.error("Error finding original URL:", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Retorna um erro 500
  }
}
