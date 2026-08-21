import { Metadata } from "next";
import { PsalterView } from "@/components/PsalterView";

export const metadata: Metadata = { title: "El Salterio – LOC 1928" };

export default function Salterio() {
  return (
    <article>
      <h1
        className="text-3xl md:text-4xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        El Salterio
      </h1>
      <p className="text-center text-gray-500 italic mb-6">Libro de Oración Común 1928</p>

      <PsalterView />
    </article>
  );
}
