import { Metadata } from "next";

export const metadata: Metadata = { title: "Oración del Mediodía – LOC 1928" };

export default function Mediodia() {
  return (
    <article className="office-content">
      <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
        Oración del Mediodía
      </h1>
      <p className="text-center text-gray-500 italic mb-8">Un orden de servicio para el mediodía</p>
      <p className="rubric">¶ En desarrollo — El contenido completo se añadirá próximamente desde el LOC 1928.</p>
    </article>
  );
}
