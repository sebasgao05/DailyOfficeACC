"use client";

import { useState } from "react";
import { bible, getBibleBooks, getBibleChapters, BIBLE_VERSION } from "@/data/bible";

const BOOKS = getBibleBooks();

export default function BibliaPage() {
  const [book, setBook] = useState(BOOKS[0] ?? "");
  const [chapter, setChapter] = useState(1);

  const chapters = book ? getBibleChapters(book) : [];
  const verses = bible[`${book} ${chapter}`] ?? [];

  return (
    <article className="office-content max-w-[760px] mx-auto">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        La Biblia
      </h1>
      <p className="text-center text-sm text-gray-500 italic mb-6">
        {BIBLE_VERSION}. Recurso de consulta.
      </p>

      {/* Selector de libro y capítulo */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-6 sticky top-20 z-10 bg-[var(--color-bg)] py-2">
        <select
          value={book}
          onChange={(e) => { setBook(e.target.value); setChapter(1); }}
          className="text-sm px-3 py-2 rounded-md border border-[var(--color-border)] bg-white text-gray-800"
        >
          {BOOKS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
        <select
          value={chapter}
          onChange={(e) => setChapter(Number(e.target.value))}
          className="text-sm px-3 py-2 rounded-md border border-[var(--color-border)] bg-white text-gray-800"
        >
          {chapters.map((c) => (
            <option key={c} value={c}>Capítulo {c}</option>
          ))}
        </select>
      </div>

      <h2
        className="text-xl text-[var(--color-primary-dark)] mb-3 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {book} {chapter}
      </h2>

      <div className="space-y-1.5 leading-relaxed">
        {verses.map((v, i) => {
          const num = (v.match(/^(\d+(?:[a-z])?(?::\d+)?)/) || [])[1] ?? "";
          const texto = v.replace(/^(\d+(?:[a-z])?(?::\d+)?)\s*/, "").replace(/\s*\|\s*/g, " ");
          return (
            <p key={i} className="text-[15px]">
              <sup className="text-[10px] text-[var(--color-primary)] mr-1 font-semibold">{num}</sup>
              {texto}
            </p>
          );
        })}
      </div>

      {/* Navegación de capítulo */}
      <div className="flex justify-between mt-8 text-sm">
        <button
          disabled={chapter <= 1}
          onClick={() => setChapter((c) => Math.max(1, c - 1))}
          className="px-4 py-2 rounded-md border border-[var(--color-border)] disabled:opacity-40 hover:border-[var(--color-gold)]"
        >
          ← Capítulo anterior
        </button>
        <button
          disabled={chapter >= (chapters[chapters.length - 1] ?? 1)}
          onClick={() => setChapter((c) => c + 1)}
          className="px-4 py-2 rounded-md border border-[var(--color-border)] disabled:opacity-40 hover:border-[var(--color-gold)]"
        >
          Capítulo siguiente →
        </button>
      </div>
    </article>
  );
}
