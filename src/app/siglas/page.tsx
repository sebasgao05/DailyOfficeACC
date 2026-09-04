import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siglas y Abreviaturas",
  description:
    "Glosario de las siglas y abreviaturas del ORDO Kalendar y del Libro de Oración Común 1928.",
};

type Row = { sigla: string; sig: string };
type Group = { title: string; note?: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    title: "Propios de la Misa",
    note: "Aparecen en la línea de propios de cada día (p.ej. «Glo. Cr. Prf. Trinidad»).",
    rows: [
      { sigla: "Glo.", sig: "Gloria in excelsis (se dice el Gloria)" },
      { sigla: "Cr.", sig: "Credo (se dice el Credo Niceno)" },
      { sigla: "Prf.", sig: "Prefacio propio del día o del tiempo" },
      { sigla: "Comm.", sig: "Conmemoración (se conmemora otra fiesta o feria)" },
      { sigla: "Mass", sig: "Misa" },
    ],
  },
  {
    title: "Ayuno y abstinencia",
    rows: [
      { sigla: "Abst.", sig: "Abstinencia (no se come carne)" },
      { sigla: "Abs.", sig: "Abstinencia (variante)" },
      { sigla: "Fast", sig: "Ayuno" },
      { sigla: "Fast & Abst.", sig: "Ayuno y abstinencia" },
    ],
  },
  {
    title: "Rango y tipo de santo",
    note: "Se colocan tras el nombre del santo (p.ej. «S. Ambrosio, B.C.D.»).",
    rows: [
      { sigla: "S. / St.", sig: "Santo / Santa (San)" },
      { sigla: "Ss. / SS.", sig: "Santos (dos o más)" },
      { sigla: "Bl.", sig: "Beato / Beata" },
      { sigla: "B.", sig: "Obispo (Bishop)" },
      { sigla: "C.", sig: "Confesor" },
      { sigla: "D.", sig: "Doctor de la Iglesia" },
      { sigla: "M.", sig: "Mártir" },
      { sigla: "MM.", sig: "Mártires (dos o más)" },
      { sigla: "V.", sig: "Virgen" },
      { sigla: "Wid.", sig: "Viuda (Widow)" },
      { sigla: "Ap. / AP.", sig: "Apóstol" },
      { sigla: "App. / APP.", sig: "Apóstoles" },
      { sigla: "Ev. / EV.", sig: "Evangelista" },
      { sigla: "Abt.", sig: "Abad (Abbot)" },
      { sigla: "K.", sig: "Rey (King)" },
      { sigla: "Q.", sig: "Reina (Queen)" },
      { sigla: "Dn.", sig: "Diácono (Deacon)" },
      { sigla: "Pr.", sig: "Presbítero (Priest)" },
    ],
  },
  {
    title: "Rangos combinados (frecuentes)",
    rows: [
      { sigla: "B.C.", sig: "Obispo y Confesor" },
      { sigla: "B.M.", sig: "Obispo y Mártir" },
      { sigla: "B.C.D.", sig: "Obispo, Confesor y Doctor" },
      { sigla: "C.D.", sig: "Confesor y Doctor" },
      { sigla: "V.M.", sig: "Virgen y Mártir" },
      { sigla: "Ap.M. / AP.M.", sig: "Apóstol y Mártir" },
      { sigla: "K.M.", sig: "Rey y Mártir" },
      { sigla: "K.C.", sig: "Rey y Confesor" },
      { sigla: "Pr.C.", sig: "Presbítero y Confesor" },
      { sigla: "Dn.C.", sig: "Diácono y Confesor" },
    ],
  },
  {
    title: "La Bienaventurada Virgen María y otros",
    rows: [
      { sigla: "B.V.M.", sig: "La Bienaventurada Virgen María" },
      { sigla: "Comm. Feria", sig: "Se conmemora la feria (día de entre semana) del tiempo" },
      { sigla: "Of the Octave / De la Octava", sig: "Día dentro de una octava (los ocho días tras una fiesta mayor)" },
      { sigla: "Ember Days / Témporas", sig: "Días de ayuno de las cuatro estaciones del año" },
      { sigla: "Vigil / Vigilia", sig: "Víspera de una fiesta mayor" },
      { sigla: "Trinity / Trinidad", sig: "Domingo después de la Trinidad" },
    ],
  },
  {
    title: "Colores litúrgicos",
    rows: [
      { sigla: "Blanco", sig: "Fiestas del Señor y de la B.V.M., confesores, vírgenes, doctores; tiempos de Navidad y Pascua" },
      { sigla: "Rojo", sig: "Apóstoles, evangelistas, mártires, Santa Cruz, Pentecostés" },
      { sigla: "Verde", sig: "Tiempo ordinario (después de Epifanía y de la Trinidad)" },
      { sigla: "Morado", sig: "Adviento, pre-Cuaresma, Cuaresma, vigilias y témporas" },
      { sigla: "Rosa", sig: "Domingos Gaudete (Adviento III) y Laetare (Cuaresma IV)" },
      { sigla: "Negro", sig: "Viernes Santo y misas de difuntos" },
    ],
  },
];

export default function SiglasPage() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Siglas y Abreviaturas
      </h1>
      <p className="text-center text-sm text-gray-500 italic mb-8 px-2">
        Glosario de las abreviaturas del ORDO Kalendar y del Libro de Oración Común de 1928.
      </p>

      <div className="space-y-6">
        {GROUPS.map((g) => (
          <section key={g.title} className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden">
            <h2
              className="bg-[var(--color-primary-dark)] text-white px-4 py-2 text-sm font-medium tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {g.title}
            </h2>
            <div className="p-3 sm:p-4">
              {g.note && <p className="text-xs italic text-gray-500 mb-3">{g.note}</p>}
              <dl className="divide-y divide-[var(--color-bg-alt)]">
                {g.rows.map((r) => (
                  <div key={r.sigla} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 py-2">
                    <dt className="text-sm font-semibold text-[var(--color-primary)] sm:min-w-[140px] sm:shrink-0 font-mono">
                      {r.sigla}
                    </dt>
                    <dd className="text-sm leading-relaxed">{r.sig}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
