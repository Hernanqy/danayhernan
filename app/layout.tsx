import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hernán & Dana | 4 de diciembre 2026",
  description: "Guardá la fecha · Hernán & Dana · 4 de diciembre 2026",
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