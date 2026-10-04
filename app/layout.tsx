import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hernán y Dana | 4 de diciembre 2026",

  description:
    "Guardá la fecha · Hernán y Dana · 4 de diciembre 2026",

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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