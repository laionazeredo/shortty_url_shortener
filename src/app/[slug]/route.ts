import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;

  try {
    console.log({ slug });
    const shortUrl = { original: "https://www.google.com" };

    if (shortUrl) {
      return NextResponse.redirect(new URL(shortUrl.original), 301);
    } else {
      return new NextResponse("Original URL not found.", { status: 404 });
    }
  } catch (error) {
    console.error("Error finding original URL:", error);
    return new NextResponse("Internal Server Error", { status: 500 }); // Retorna um erro 500
  }
}
