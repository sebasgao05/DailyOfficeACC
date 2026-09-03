import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";

export const metadata: Metadata = {
  title: "Prima – LOC 1928",
};

export default function Prima() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Prima
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        La Primera Hora — Al comenzar el día
      </p>

      <p className="rubric">
        ¶ Prima se dice al comenzar la jornada, después de la Oración Matutina. El oficiante y el
        pueblo, de pie, comienzan con los versos de apertura. En Cuaresma y en las ferias de
        Adviento se omite el «Aleluya».
      </p>

      {/* Versos de apertura */}
      <h2 className="section-title" id="apertura">Versos de Apertura</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, ven en mi auxilio.</p>
        <p className="versicle response"><strong>R.</strong> Señor, date prisa en socorrerme.</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
        <p className="versicle"><strong>Ofic.</strong> Alaben al Señor.</p>
        <p className="versicle response"><strong>R.</strong> El Nombre del Señor sea alabado.</p>
      </div>

      {/* Himno */}
      <h2 className="section-title" id="himno">Himno</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">Iam lucis orto sidere</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Ya que ha salido el lucero del día, *<br/>supliquemos humildes a Dios,</p>
        <p className="psalm-verse">para que en las obras de esta jornada *<br/>nos guarde de todo lo que daña.</p>
        <p className="psalm-verse">Refrene y temple nuestra lengua, *<br/>que no resuene el fragor de la contienda;</p>
        <p className="psalm-verse">defienda con su cuidado nuestra vista, *<br/>que no beba de las vanidades.</p>
        <p className="psalm-verse">Sean puros los senos del corazón, *<br/>y cese la necedad de la carne;</p>
        <p className="psalm-verse">la sobriedad en el comer y el beber *<br/>quebrante la soberbia de la carne.</p>
        <p className="psalm-verse">Para que, al retirarse el día *<br/>y devolvernos la noche su turno,</p>
        <p className="psalm-verse">limpios por la abstinencia del mundo, *<br/>cantemos su gloria.</p>
        <p className="psalm-verse">A Dios Padre sea la gloria, *<br/>y a su único Hijo,</p>
        <p className="psalm-verse">con el Espíritu Consolador, *<br/>ahora y por todos los siglos. Amén.</p>
      </div>

      {/* Antífona */}
      <h2 className="section-title" id="antifona">Antífona</h2>
      <p className="rubric">¶ Se dice la antífona propia del tiempo; fuera de los tiempos señalados:</p>
      <div className="my-4">
        <p className="versicle">Bendito seas, Señor, Dios de nuestros padres, y digno de ser alabado y glorificado por los siglos.</p>
      </div>

      {/* Salmos */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">
        ¶ Se dice la porción de los Salmos señalada para la hora. Tradicionalmente en Prima se dice
        el Salmo 51 (<em>Miserere</em>) u otra porción del salterio del día.
      </p>
      <DailyReadings period="morning" />
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Lectura breve */}
      <h2 className="section-title" id="lectura">Lectura Breve</h2>
      <p className="rubric">¶ Se lee la lección breve señalada. Fuera de los tiempos propios:</p>
      <div className="my-4 space-y-2">
        <p>Al Rey de los siglos, inmortal, invisible, al único Dios, sean el honor y la gloria por los siglos de los siglos. Amén. <em className="text-gray-500">1 Tim. 1:17</em></p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Demos gracias a Dios.</p>
      </div>

      {/* Responsorio breve */}
      <h2 className="section-title" id="responsorio">Responsorio Breve</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Cristo, Hijo de Dios vivo, ten piedad de nosotros.</p>
        <p className="versicle response"><strong>R.</strong> Cristo, Hijo de Dios vivo, ten piedad de nosotros.</p>
        <p className="versicle"><strong>Ofic.</strong> Tú que estás sentado a la diestra del Padre.</p>
        <p className="versicle response"><strong>R.</strong> Ten piedad de nosotros.</p>
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Cristo, Hijo de Dios vivo, ten piedad de nosotros.</p>
      </div>

      {/* Versos */}
      <h2 className="section-title" id="versos">Versos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Levántate, Señor, y ayúdanos.</p>
        <p className="versicle response"><strong>R.</strong> Y líbranos por amor de tu Nombre.</p>
      </div>

      {/* Símbolo Quicumque */}
      <h2 className="section-title" id="quicumque">El Símbolo de San Atanasio</h2>
      <p className="rubric">
        ¶ En los domingos, después de los versos, puede decirse el <em>Quicumque vult</em> (Símbolo de
        San Atanasio), conforme al uso de la Iglesia.
      </p>

      {/* Kyrie */}
      <h2 className="section-title" id="kyrie">Kyrie</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Señor, ten piedad de nosotros.</p>
        <p className="versicle response"><strong>R.</strong> Cristo, ten piedad de nosotros.</p>
        <p className="versicle"><strong>Ofic.</strong> Señor, ten piedad de nosotros.</p>
      </div>

      {/* Padre Nuestro */}
      <h2 className="section-title" id="padrenuestro">El Padre Nuestro</h2>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      {/* Confesión */}
      <h2 className="section-title" id="confesion">Confesión</h2>
      <p className="rubric">¶ De rodillas, todos dicen juntos:</p>
      <div className="collect">
        <p>Confieso ante Dios todopoderoso, ante toda la corte celestial y ante vosotros, hermanos, que he pecado gravemente de pensamiento, palabra y obra, por mi culpa. Por tanto ruego a la bienaventurada Virgen María y a todos los santos que intercedan por mí ante el Señor nuestro Dios. Amén.</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor todopoderoso y misericordioso nos conceda el perdón, la absolución y la remisión de nuestros pecados.</p>
        <p className="versicle response"><strong>R.</strong> Amén.</p>
      </div>

      {/* Preces y saludo */}
      <h2 className="section-title" id="preces">Preces</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>

      {/* Colecta de Prima */}
      <h2 className="section-title" id="colecta">Colecta de Prima</h2>
      <div className="collect">
        <p>Señor Dios todopoderoso, que nos has hecho llegar al comienzo de este día: sálvanos hoy por tu gran poder, para que en esta jornada no caigamos en pecado alguno, sino que nuestras palabras, pensamientos y obras se dirijan siempre al cumplimiento de tu justicia; por Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Conclusión */}
      <h2 className="section-title" id="conclusion">Conclusión</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Bendigamos al Señor.</p>
        <p className="versicle response"><strong>R.</strong> Demos gracias a Dios.</p>
      </div>
      <div className="text-center my-8 italic">
        <p>La divina asistencia permanezca siempre con nosotros. Amén.</p>
      </div>
    </article>
  );
}
