import { notFound } from "next/navigation";
import { psalms } from "@/data/psalms";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return psalms.map((p) => ({ id: p.number.toString() }));
}

export default async function PsalmPage({ params }: Props) {
  const { id } = await params;
  const psalmNumber = parseInt(id);
  const psalm = psalms.find((p) => p.number === psalmNumber);

  if (!psalm || psalm.verses.length === 0) {
    notFound();
  }

  const prevPsalm = psalms.find((p) => p.number === psalmNumber - 1 && p.verses.length > 0);
  const nextPsalm = psalms.find((p) => p.number === psalmNumber + 1 && p.verses.length > 0);

  return (
    <article>
      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        {prevPsalm ? (
          <Link href={`/salterio/${prevPsalm.number}`} className="text-[var(--color-primary)] hover:text-[var(--color-gold)]">
            ← Salmo {prevPsalm.number}
          </Link>
        ) : <span />}
        <Link href="/salterio" className="text-sm text-gray-500 hover:text-[var(--color-primary)]">
          Volver al Salterio
        </Link>
        {nextPsalm ? (
          <Link href={`/salterio/${nextPsalm.number}`} className="text-[var(--color-primary)] hover:text-[var(--color-gold)]">
            Salmo {nextPsalm.number} →
          </Link>
        ) : <span />}
      </div>

      {/* Psalm Header */}
      <h1
        className="text-2xl md:text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Salmo {psalm.number}
      </h1>
      <p className="text-center italic text-gray-500 mb-8">{psalm.latinTitle}</p>

      {/* Verses */}
      <div className="max-w-[650px] mx-auto space-y-4">
        {psalm.verses.map((verse, i) => {
          // Split on * for psalm pointing
          const parts = verse.split("*");
          const verseNum = verse.match(/^(\d+)/)?.[1];
          return (
            <p key={i} className="leading-relaxed">
              {verseNum && (
                <sup className="text-xs text-gray-400 mr-1">{verseNum}</sup>
              )}
              {parts.map((part, j) => (
                <span key={j}>
                  {j > 0 && <span className="text-[var(--color-gold)] mx-1">*</span>}
                  {j === 0 ? part.replace(/^\d+\s*/, "").trim() : part.trim()}
                </span>
              ))}
            </p>
          );
        })}
      </div>

      {/* Gloria */}
      <p className="text-center italic mt-8 text-gray-600">
        Gloria al Padre, y al Hijo, y al Espíritu Santo;
        <br />
        como era al principio, es ahora y será siempre, por los siglos de los siglos. Amén.
      </p>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-[var(--color-border)]">
        {prevPsalm ? (
          <Link href={`/salterio/${prevPsalm.number}`} className="text-[var(--color-primary)] hover:text-[var(--color-gold)]">
            ← Salmo {prevPsalm.number}
          </Link>
        ) : <span />}
        {nextPsalm ? (
          <Link href={`/salterio/${nextPsalm.number}`} className="text-[var(--color-primary)] hover:text-[var(--color-gold)]">
            Salmo {nextPsalm.number} →
          </Link>
        ) : <span />}
      </div>
    </article>
  );
}
