import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dana y Hernan | Amigos | 4 de diciembre 2026",

  description:
    "Nos encontramos de 16 hs a 20 hs. Confirma tu asistencia.",

  openGraph: {
    title:
      "Dana y Hernan | 4 de diciembre 2026",

    description:
      "Nos encontramos de 16 hs a 20 hs. Te esperamos.",

    url:
      "https://danayhernan.vercel.app/amigos",

    siteName:
      "Dana y Hernan",

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

        type:
          "image/png",
      },
    ],
  },
};


export default function AmigosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return children;

}