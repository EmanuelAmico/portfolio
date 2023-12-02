import "../styles/globals.scss";
import type { Metadata } from "next";
import { montserrat, openSans } from "./fonts";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Emanuel Amico - Portfolio",
  description: "Emanuel Amico's portfolio",
  openGraph: {
    url: "https://www.amico.com.ar/",
    type: "website",
    title: "Emanuel Amico - Portfolio",
    description: "Emanuel Amico's portfolio",
    images: "https://i.imgur.com/Us7RUgZ.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.amico.com.ar/",
    title: "Emanuel Amico - Portfolio",
    description: "Emanuel Amico's portfolio",
    images: "https://i.imgur.com/Us7RUgZ.png",
  },
  other: {
    "google-site-verification": "aUAx9o7Qi6zMkQy5X23NMZ6kjK8yRiUOZ0T5HGeM9_g",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
