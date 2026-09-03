import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

export default function NotFound() {
  return (
    <article className="text-center py-12">
      <p
        className="text-6xl text-[var(--color-primary-dark)] mb-4 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        404
      </p>
      <h1
        className="text-3xl text-[var(--color-primary-dark)] mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Página no encontrada
      </h1>
      <p className="text-gray-500 italic mb-8">
        La página que buscas no existe o fue movida.
      </p>

      <p className="rubric mx-auto max-w-md mb-8">
        ¶ &ldquo;Enséñame, oh Señor, el camino de tus estatutos, y lo guardaré
        hasta el fin.&rdquo; — Salmo 119:33
      </p>

      <nav className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link
          href="/oficio/oracion-matutina"
          className="text-[var(--color-primary-dark)] underline underline-offset-4 hover:opacity-80"
        >
          Oración Matutina
        </Link>
        <span className="hidden sm:inline text-gray-300">·</span>
        <Link
          href="/oficio/oracion-vespertina"
          className="text-[var(--color-primary-dark)] underline underline-offset-4 hover:opacity-80"
        >
          Oración Vespertina
        </Link>
        <span className="hidden sm:inline text-gray-300">·</span>
        <Link
          href="/kalendario"
          className="text-[var(--color-primary-dark)] underline underline-offset-4 hover:opacity-80"
        >
          Kalendario
        </Link>
      </nav>
    </article>
  );
}
