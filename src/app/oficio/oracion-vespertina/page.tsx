import { Metadata } from "next";
import { DailyReadings } from "@/components/liturgical/DailyReadings";
import { DailyLesson } from "@/components/liturgical/DailyLesson";
import { CanticleSelector } from "@/components/liturgical/CanticleSelector";
import { CreedSelector } from "@/components/liturgical/CreedSelector";
import { OfficeIntro } from "@/components/liturgical/OfficeIntro";
import { OfficeFinalPrayers } from "@/components/liturgical/OfficeFinalPrayers";
import { OfficePreces } from "@/components/liturgical/OfficePreces";
import { OfficeProvider } from "@/components/liturgical/OfficeContext";
import { EVENING } from "@/data/officeText";

export const metadata: Metadata = {
  title: "Oración Vespertina – LOC 1928",
};

export default function OracionVespertina() {
  return (
    <OfficeProvider>
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oración Vespertina
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        El Orden para la Oración Vespertina Diaria
      </p>

      {/* Sentencias por tiempo, Exhortación (que faltaba), Confesión, Absolución
          (con forma alterna), Padre Nuestro (con selector de posición), Preces */}
      <OfficeIntro office="evening" />

      {/* Salmos */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">¶ Después seguirá una porción de los Salmos según el uso de la Iglesia.</p>
      <DailyReadings period="evening" psalmsOnly />

      {/* Gloria in excelsis tras los salmos (uso vespertino del LOC) */}
      <h2 className="section-title">{EVENING.gloriaInExcelsisTitulo}</h2>
      <p className="rubric">¶ Al final de toda la selección de los Salmos del día se dice el Gloria Patri o el Gloria in excelsis.</p>
      <div className="collect"><p>{EVENING.gloriaInExcelsis}</p></div>

      <h2 className="section-title" id="lecturas">La Primera Lectura</h2>
      <p className="rubric">¶ Entonces se leerá la Primera Lección, conforme a la Tabla de Lecciones o el Calendario. Antes de la lección el oficiante dirá: «Comienza el capítulo … (o el versículo … del capítulo …) del libro de …»; y al terminar: «Aquí termina la Primera Lección».</p>
      <DailyLesson period="evening" which="first" />

      {/* Cántico después de la Primera Lectura: Magnificat / Cantate Domino / Bonum est */}
      <CanticleSelector period="evening" position="first" />

      {/* Segunda Lectura */}
      <h2 className="section-title">La Segunda Lectura</h2>
      <p className="rubric">¶ Después se leerá la Segunda Lección, tomada del Nuevo Testamento. Antes de la lección el oficiante dirá: «Comienza el capítulo … (o el versículo … del capítulo …) del libro de …»; y al terminar: «Aquí termina la Segunda Lección».</p>
      <DailyLesson period="evening" which="second" />

      {/* Cántico después de la Segunda Lectura: Nunc Dimittis / Deus Misereatur */}
      <CanticleSelector period="evening" position="second" />

      {/* Benedic, anima mea (Salmo 103) — tercer cántico alternativo tras la 2ª lectura */}
      <h2 className="section-title">{EVENING.canticoBenedicAnimaTitulo} <span className="text-sm text-gray-500 font-normal">({EVENING.canticoBenedicAnimaRef})</span></h2>
      <p className="rubric">¶ O bien este cántico, en lugar del Nunc Dimittis o del Deus Misereatur.</p>
      <div className="my-4 space-y-2">
        {EVENING.canticoBenedicAnima.split(" * ").map((line, i) => (
          <p key={i} className="psalm-verse">{line}{i < EVENING.canticoBenedicAnima.split(" * ").length - 1 ? " *" : ""}</p>
        ))}
      </div>

      {/* Credo */}
      <CreedSelector />

      {/* Preces tras el credo (con Padre Nuestro condicional), y Oraciones finales */}
      <OfficePreces office="evening" />

      <OfficeFinalPrayers office="evening" />
    </article>
    </OfficeProvider>
  );
}
