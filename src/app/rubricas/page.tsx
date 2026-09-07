import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reglas y Tablas del LOC",
  description:
    "Reglas para las fiestas movibles y los días santos, días de fiesta, ayunos, rogativas y tablas de precedencias del Libro de Oración Común de 1928.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white border border-[var(--color-border)] rounded-lg overflow-hidden mb-6">
      <h2
        className="bg-[var(--color-primary-dark)] text-white px-4 py-2 text-sm font-medium tracking-wide"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      <div className="p-4 sm:p-5 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function RubricasPage() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Reglas y Tablas del LOC
      </h1>
      <p className="text-center text-sm text-gray-500 italic mb-8 px-2">
        Reglas para las fiestas movibles y los días santos, tablas de ayunos, rogativas y precedencias, según el Libro de Oración Común de 1928.
      </p>

      <Section title="Reglas para saber en qué fecha caen las fiestas movibles y los días santos">
        <p>
          La <strong>Pascua de la Resurrección</strong>, de la que dependen todas las demás Fiestas
          Movibles, es siempre el Primer Domingo después de la Luna Llena que ocurre el veintiuno de
          marzo o poco después; mas si la Luna Llena cae en domingo, la Pascua de Resurrección es el
          domingo siguiente.
        </p>
        <p className="italic text-gray-600">
          Téngase presente que la Luna Llena, para el objeto de estas Reglas y Tablas, es el Día
          Catorce del Mes Lunar, calculado según una antigua computación eclesiástica, y no la Luna
          Llena real o astronómica.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>La primera Domínica de Adviento es siempre el domingo más próximo, antes o después de la Fiesta de San Andrés.</li>
          <li>Domínica de Septuagésima es nueve semanas antes de la Pascua.</li>
          <li>Domínica de Sexagésima es ocho semanas antes de la Pascua.</li>
          <li>Domínica de Quincuagésima es siete semanas antes de la Pascua.</li>
          <li>Domínica de Cuadragésima es seis semanas antes de la Pascua.</li>
          <li>Domínica de Rogación es cinco semanas después de la Pascua.</li>
          <li>Día de Ascensión es cuarenta días después de la Pascua.</li>
          <li>Día de Pentecostés es siete semanas después de la Pascua.</li>
          <li>Domínica de la Trinidad es ocho semanas después de la Pascua.</li>
        </ul>
      </Section>

      <Section title="Días de fiesta que se observarán en esta Iglesia durante el año">
        <ul className="list-disc pl-5 space-y-1 columns-1 sm:columns-2">
          <li>Todos los domingos del año</li>
          <li>La Circuncisión de nuestro Señor Jesucristo</li>
          <li>La Epifanía</li>
          <li>La Conversión de San Pablo</li>
          <li>La Purificación de la Bendita Virgen María</li>
          <li>San Matías, Apóstol</li>
          <li>La Anunciación de la Bendita Virgen María</li>
          <li>San Marcos, Evangelista</li>
          <li>San Felipe y Santiago, Apóstoles</li>
          <li>La Ascensión de nuestro Señor Jesucristo</li>
          <li>San Bernabé, Apóstol</li>
          <li>La Natividad de San Juan Bautista</li>
          <li>San Pedro, Apóstol</li>
          <li>Santiago, Apóstol</li>
          <li>La Transfiguración de nuestro Señor Jesucristo</li>
          <li>San Bartolomé, Apóstol</li>
          <li>San Mateo, Apóstol y Evangelista</li>
          <li>San Miguel y todos los Ángeles</li>
          <li>San Lucas, Evangelista</li>
          <li>San Simón y San Judas, Apóstoles</li>
          <li>Todos los Santos</li>
          <li>San Andrés, Apóstol</li>
          <li>Santo Tomás, Apóstol</li>
          <li>La Natividad de nuestro Señor Jesucristo</li>
          <li>San Esteban, Diácono y Mártir</li>
          <li>San Juan, Apóstol y Evangelista</li>
          <li>Los Santos Inocentes</li>
          <li>Lunes y Martes de la Semana de Pascua</li>
          <li>Lunes y Martes de la Semana de Pentecostés</li>
        </ul>
      </Section>

      <Section title="Tabla para los días de ayuno">
        <p><strong>Días de ayuno:</strong> Miércoles de Ceniza y Viernes Santo.</p>
        <p className="font-medium mt-2">
          Otros días de ayuno, en que la Iglesia exige cierto grado de abstinencia que más
          especialmente convenga a los actos extraordinarios y ejercicios de devoción:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Los cuarenta días de Cuaresma.</li>
          <li>
            Los Días de Témporas en las cuatro estaciones, que son miércoles, viernes y sábado
            después del Primer Domingo de la Cuaresma; de la Fiesta de Pentecostés; del día catorce
            de septiembre; y del día trece de diciembre.
          </li>
          <li>
            Todos los viernes del año, excepto aquel en que ocurra la Navidad o la Epifanía, o entre
            estas dos Fiestas.
          </li>
        </ol>
      </Section>

      <Section title="Días de solemne rogativa">
        <p>
          Los tres Días de Rogativa son lunes, martes y miércoles anteriores al jueves, Día de la
          Ascensión de nuestro Señor.
        </p>
      </Section>

      <Section title="Tablas de precedencias">
        <p className="font-medium">
          Los Días Santos siguientes tienen precedencia sobre cualquier otro Domingo o Día Festivo:
        </p>
        <ul className="list-disc pl-5 space-y-1 columns-1 sm:columns-2">
          <li>Los Domingos en Adviento</li>
          <li>Navidad</li>
          <li>Epifanía</li>
          <li>Domínica de Septuagésima</li>
          <li>Domínica de Sexagésima</li>
          <li>Domínica de Quincuagésima</li>
          <li>Miércoles de Ceniza</li>
          <li>Las Domínicas de Cuaresma</li>
          <li>Todos los días de la Semana Santa</li>
          <li>Día de Pascua y los siete días siguientes</li>
          <li>Domínica de Rogación</li>
          <li>Día de la Ascensión y la Domínica siguiente</li>
          <li>Pentecostés y los seis días siguientes</li>
          <li>Domínica de la Trinidad</li>
        </ul>
        <p className="italic text-gray-600 mt-2">
          Si alguna otra Festividad ocurriese en uno de los días anotados en la Tabla anterior, la
          observancia de ese Día Festivo se transferirá al primer día oportuno.
        </p>
        <p className="font-medium mt-3">
          Los Días de Fiesta siguientes tienen precedencia sobre los días no anotados en la Tabla anterior:
        </p>
        <ul className="list-disc pl-5 space-y-1 columns-1 sm:columns-2">
          <li>San Esteban, Diácono y Mártir</li>
          <li>San Juan, Apóstol y Evangelista</li>
          <li>Los Santos Inocentes</li>
          <li>La Circuncisión de Cristo</li>
          <li>La Conversión de San Pablo</li>
          <li>La Purificación de la Bendita Virgen María</li>
          <li>San Juan Bautista</li>
          <li>Todas las Fiestas de Apóstoles o Evangelistas</li>
          <li>La Transfiguración de Cristo</li>
          <li>San Miguel y todos los Ángeles</li>
          <li>Todos los Santos</li>
        </ul>
        <p className="italic text-gray-600 mt-2">
          En estos Días de Fiesta se usarán la Colecta, Epístola y Evangelio prescritos; pero si
          ocurriese en domingo, la Colecta de la festividad será seguida por la de la Domínica.
        </p>
      </Section>

      <Section title="Tabla de los días u ocasiones con Colecta, Epístola y Evangelio propios (fuera del Calendario)">
        <p>
          De los días u ocasiones para los que se han provisto Colecta, Epístola y Evangelio en este
          Libro y que, no siendo fiestas fijas, no se hallan en el Calendario:
        </p>
        <ul className="list-disc pl-5 space-y-1 columns-1 sm:columns-2">
          <li>Los Días de las Témporas</li>
          <li>Los Días de Rogativa</li>
          <li>Día de Acción de Gracias</li>
          <li>Día de la Independencia</li>
          <li>Conmemoración de un Santo</li>
          <li>Fiesta de la Dedicación de una Iglesia</li>
          <li>Para Matrimonio</li>
          <li>En un Entierro</li>
        </ul>
      </Section>

      <p className="text-center text-xs text-gray-500 mt-6">
        <Link href="/siglas" className="text-[var(--color-primary)] hover:underline">
          ← Volver a Siglas y Abreviaturas
        </Link>
      </p>
    </article>
  );
}
