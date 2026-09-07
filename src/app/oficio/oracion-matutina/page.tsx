import { Metadata } from "next";
import { DailyReadings } from "@/components/liturgical/DailyReadings";
import { DailyLesson } from "@/components/liturgical/DailyLesson";
import { CanticleSelector } from "@/components/liturgical/CanticleSelector";
import { CreedSelector } from "@/components/liturgical/CreedSelector";
import { OfficeIntro } from "@/components/liturgical/OfficeIntro";
import { OfficeFinalPrayers } from "@/components/liturgical/OfficeFinalPrayers";
import { OfficePreces } from "@/components/liturgical/OfficePreces";
import { OfficeProvider } from "@/components/liturgical/OfficeContext";

export const metadata: Metadata = {
  title: "Oración Matutina – LOC 1928",
};

export default function OracionMatutina() {
  return (
    <OfficeProvider>
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Oración Matutina
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        El Orden para la Oración Matutina, diariamente a través del año
      </p>

      {/* Sentencias por tiempo, Exhortación, Confesión, Absolución, Padre Nuestro
          (con selector de posición), Preces e Invitatorio — todo dinámico por fecha */}
      <OfficeIntro office="morning" />

      {/* Venite */}
      <h2 className="section-title" id="invitatorio">Venite, exultemus Domino</h2>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Venid, aclamemos al Señor; *<br/>demos vítores a la Roca que nos salva.</p>
        <p className="psalm-verse">Entremos a su presencia dándole gracias; *<br/>aclamándolo con cantos.</p>
        <p className="psalm-verse">Porque el Señor es un Dios grande; *<br/>soberano de todos los dioses.</p>
        <p className="psalm-verse">Tiene en su mano las simas de la tierra; *<br/>son suyas las cumbres de los montes.</p>
        <p className="psalm-verse">Suyo es el mar, porque él lo hizo; *<br/>la tierra firme que modelaron sus manos.</p>
        <p className="psalm-verse">Entrad, postrémonos por tierra; *<br/>bendiciendo al Señor, creador nuestro.</p>
        <p className="psalm-verse">Porque él es nuestro Dios; *<br/>y nosotros su pueblo, el rebaño que él guía.</p>
        <p className="psalm-verse">Postraos ante el Señor en el atrio sagrado; *<br/>tiemble en su presencia la tierra toda.</p>
        <p className="psalm-verse">Delante del Señor, que ya llega, ya llega a regir la tierra. *<br/>Regirá el orbe con justicia y los pueblos con fidelidad.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Salmos y Primera Lectura */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">¶ Entonces seguirá una porción de los Salmos, según el Uso de la Iglesia.</p>
      <DailyReadings period="morning" psalmsOnly />

      <h2 className="section-title" id="lecturas">La Primera Lectura</h2>
      <p className="rubric">¶ Enseguida se leerá la Primera Lección, según la Tabla de Lecciones o el Calendario. Antes de la lección el oficiante dirá: «Comienza el capítulo … (o el versículo … del capítulo …) del libro de …»; y al terminar: «Aquí termina la Primera Lección».</p>
      <DailyLesson period="morning" which="first" />

      {/* Cántico después de la Primera Lectura: Te Deum / Benedictus es / Benedicite */}
      <CanticleSelector period="morning" position="first" />

      {/* Segunda Lectura */}
      <h2 className="section-title">La Segunda Lectura</h2>
      <p className="rubric">¶ Enseguida se leerá la Segunda Lección del Nuevo Testamento. Antes de la lección el oficiante dirá: «Comienza el capítulo … (o el versículo … del capítulo …) del libro de …»; y al terminar: «Aquí termina la Segunda Lección».</p>
      <DailyLesson period="morning" which="second" />

      {/* Cántico después de la Segunda Lectura: Benedictus / Jubilate Deo */}
      <CanticleSelector period="morning" position="second" />

      {/* Credo */}
      <CreedSelector />

      {/* Preces tras el credo (con Padre Nuestro condicional), y Oraciones finales */}
      <OfficePreces office="morning" />

      <OfficeFinalPrayers office="morning" />
    </article>
    </OfficeProvider>
  );
}
