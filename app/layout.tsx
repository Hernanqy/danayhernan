import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://danayhernan.vercel.app"
  ),

  title:
    "Dana y Hernán | 4 de diciembre 2026",

  description:
    "Guardá la fecha. Te esperamos para celebrar con nosotros.",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

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

    images: [
      {
        url:
          "https://danayhernan.vercel.app/preview.png",

        width: 1200,

        height: 630,

        alt:
          "Dana y Hernán - 4 de diciembre de 2026",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "Dana y Hernán | 4 de diciembre 2026",

    description:
      "Guardá la fecha. Te esperamos para celebrar con nosotros ❤️",

    images: [
      "https://danayhernan.vercel.app/preview.png",
    ],
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