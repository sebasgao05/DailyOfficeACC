import { Metadata } from "next";
import { KalendarView } from "@/components/KalendarView";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ordo Kalendar – LOC 1928",
};

export default function KalendarioPage() {
  return (
    <div>
      <h1
        className="text-3xl text-[var(--color-gold)] text-center mb-3 font-medium tracking-wider"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        ORDO KALENDAR
      </h1>
      <div className="text-center mb-8">
        <Link
          href="/oficio"
          className="inline-block border border-[var(--color-text)] px-4 py-1 text-sm hover:bg-[var(--color-primary-dark)] hover:text-white hover:border-[var(--color-primary-dark)] transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          VOLVER AL OFICIO
        </Link>
      </div>
      <KalendarView />
    </div>
  );
}
