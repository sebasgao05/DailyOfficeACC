"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { fromDateParam, formatDateSpanish } from "@/lib/calendar";
import { resolveHour, COLECTA_ILUMINA, type HourId } from "@/lib/hours";
import { useMounted } from "@/lib/useMounted";
import { psalms, getPsalmPortion } from "@/data/psalms";

interface Props {
  hour: HourId;
}

function HourOfficeContent({ hour }: Props) {
  const searchParams = useSearchParams();
  const dateParam = searchParams.get("date");
  const mounted = useMounted();

  // Sin fecha en la URL dependemos de `new Date()` (solo cliente).
  if (!dateParam && !mounted) {
    return <p className="text-center italic text-gray-400 py-4">Cargando la hora…</p>;
  }

  const date = dateParam ? fromDateParam(dateParam) : new Date();
  const resolved = resolveHour(hour, date);

  if (!resolved) {
    return <p className="text-center italic text-gray-400 py-4">Cargando la hora…</p>;
  }

  const { def, churchDayName, weekName, alleluia, capitulum, collect } = resolved;
  const isCompline = hour === "completas";

  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {def.name}
      </h1>
      <p className="text-center text-gray-500 italic mb-1">{def.subtitle}</p>
      <p className="text-center text-xs text-gray-400 mb-8">
        {formatDateSpanish(date)} · {weekName ?? churchDayName}
      </p>

      {/* Apertura */}
      <h2 className="section-title" id="apertura">Apertura</h2>
      <div className="my-4 space-y-1">
        {isCompline ? (
          <>
            <p className="versicle"><strong>Ofic.</strong> El Señor todopoderoso nos conceda una noche tranquila y un fin perfecto.</p>
            <p className="versicle response"><strong>R.</strong> Amén.</p>
            <p className="versicle"><strong>Ofic.</strong> Nuestro auxilio está en el Nombre del Señor.</p>
            <p className="versicle response"><strong>R.</strong> Que hizo el cielo y la tierra.</p>
          </>
        ) : (
          <>
            <p className="versicle"><strong>Ofic.</strong> Oh Dios, ven en mi auxilio.</p>
            <p className="versicle response"><strong>R.</strong> Señor, date prisa en socorrerme.</p>
          </>
        )}
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén. {alleluia ? "Aleluya." : ""}</p>
        {!alleluia && <p className="rubric">¶ En este tiempo se omite el «Aleluya».</p>}
      </div>

      {/* Himno */}
      <h2 className="section-title" id="himno">Himno</h2>
      <p className="text-center text-sm text-gray-500 italic mb-2">{def.hymnLatin}</p>
      <div className="collect"><p>{def.hymnEs}</p></div>

      {/* Salmos */}
      <h2 className="section-title" id="salmos">Salmodia</h2>
      <p className="rubric">¶ Se dicen los salmos propios de la hora con su antífona.</p>
      <div className="my-4 space-y-6">
        {def.psalms.map((num) => {
          const psalm = psalms.find((p) => p.number === num);
          if (!psalm) {
            return <p key={num} className="text-sm italic text-gray-400">Salmo {num}</p>;
          }
          // El Salmo 119 es muy extenso: en Prima se divide por día. Mostramos
          // la primera división (Álef y Bet, vv. 1-16) con nota de la división.
          const is119 = num === 119;
          const portion = is119 ? getPsalmPortion({ number: 119, from: 1, to: 16 }) : null;
          const verses = portion ? portion.verses : psalm.verses;
          return (
            <div key={num} className="border-l-2 border-[var(--color-gold)] pl-4">
              <h4 className="text-sm font-semibold text-[var(--color-primary-dark)] mb-2">
                Salmo {psalm.number}{is119 ? " (vv. 1-16 · Álef y Bet)" : ""} — <span className="italic font-normal">{psalm.latinTitle}</span>
              </h4>
              {is119 && (
                <p className="rubric text-[0.8rem]">¶ El Salmo 119 se divide por los días de la semana en sus estrofas (I–VI). Se recita la porción del día.</p>
              )}
              <div className="text-sm space-y-1">
                {verses.map((v, i) => (
                  <p key={i} className="psalm-verse leading-relaxed">{v.replace(/\*/g, " · ")}</p>
                ))}
              </div>
            </div>
          );
        })}
        <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
      </div>

      {/* Capítula (lectura breve, varía por temporada) */}
      <h2 className="section-title" id="capitula">Lectura Breve</h2>
      <p className="rubric">¶ Capítula propia del tiempo litúrgico.</p>
      <div className="collect">
        <p>{capitulum.text}</p>
        <p className="text-xs italic text-gray-500 mt-2">{capitulum.ref}</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> {def.versicle.v}</p>
        <p className="versicle response"><strong>R.</strong> {def.versicle.r}</p>
      </div>

      {/* Completas: Nunc Dimittis */}
      {isCompline && (
        <>
          <h2 className="section-title" id="nunc">Nunc Dimittis</h2>
          <p className="text-center text-sm text-gray-500 italic mb-2">Antífona: Sálvanos, Señor, despiertos; guárdanos dormidos.</p>
          <div className="my-4 space-y-3">
            <p className="psalm-verse">Ahora, Señor, según tu promesa, · puedes dejar a tu siervo irse en paz.</p>
            <p className="psalm-verse">Porque mis ojos han visto tu Salvador, · a quien has presentado ante todos los pueblos:</p>
            <p className="psalm-verse">Luz para alumbrar a las naciones · y gloria de tu pueblo Israel.</p>
          </div>
          <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
        </>
      )}

      {/* Padre Nuestro */}
      <h2 className="section-title" id="padrenuestro">El Padre Nuestro</h2>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      {/* Colecta */}
      <h2 className="section-title" id="colecta">La Colecta</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>
      <div className="collect"><p>{collect}</p></div>
      {isCompline && <div className="collect"><p>{COLECTA_ILUMINA}</p></div>}

      {/* Conclusión */}
      <div className="text-center my-8 italic text-sm text-gray-600">
        {isCompline ? (
          <p>La noche tranquila y el fin perfecto nos conceda el Señor todopoderoso y misericordioso. Amén.</p>
        ) : (
          <p>Bendigamos al Señor. — Demos gracias a Dios.</p>
        )}
      </div>
    </article>
  );
}

export function HourOffice({ hour }: Props) {
  return (
    <Suspense fallback={<p className="text-center italic text-gray-400 py-4">Cargando la hora…</p>}>
      <HourOfficeContent hour={hour} />
    </Suspense>
  );
}
