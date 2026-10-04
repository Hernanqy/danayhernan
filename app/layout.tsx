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

    type:
      "website",

    locale:
      "es_AR",

    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt:
          "Dana y Hernán - 4 de diciembre de 2026",
      },
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
      <body>
        {children}
      </body>
    </html>
  );
}