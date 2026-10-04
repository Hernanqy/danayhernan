import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://danayhernan.vercel.app"
  ),

  title:
    "Dana y Hernán | 4 de diciembre 2026",

  description:
    "Guardá la fecha. Te esperamos para celebrar con nosotros ❤️",

  openGraph: {
    title:
      "Dana y Hernán | 4 de diciembre 2026",

    description:
      "Guardá la fecha. Te esperamos para celebrar con nosotros ❤️",

    url:
      "https://danayhernan.vercel.app",

    siteName:
      "Dana y Hernán",

    locale:
      "es_AR",

    type:
      "website",
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Dana y Hernán | 4 de diciembre 2026",

    description:
      "Guardá la fecha. Te esperamos para celebrar con nosotros ❤️",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}