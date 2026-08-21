import type { Metadata } from "next";
import { EB_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oración Común en Línea – LOC 1928",
  description:
    "El Oficio Diario del Libro de Oración Común de 1928 en español para la Iglesia Anglicana Católica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${garamond.variable} ${cinzel.variable} font-[var(--font-serif)] antialiased min-h-screen flex flex-col bg-[var(--color-bg)]`}>
        <SiteHeader />
        <main className="flex-1 max-w-[1000px] mx-auto w-full px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
