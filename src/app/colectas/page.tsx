import { Metadata } from "next";

export const metadata: Metadata = { title: "Colectas – LOC 1928" };

export default function Colectas() {
  return (
    <article>
      <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
        Colectas, Epístolas y Evangelios
      </h1>
      <p className="text-center text-gray-500 italic mb-8">Libro de Oración Común 1928</p>
      <p className="rubric">¶ En desarrollo — Las colectas para todo el año litúrgico se añadirán próximamente.</p>
    </article>
  );
}
