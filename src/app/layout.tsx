import type { Metadata } from "next";
import { Ubuntu_Sans } from "next/font/google";
import "./globals.css";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Shortty",
  description: "Your bring the URL. We Shortty it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntuSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
