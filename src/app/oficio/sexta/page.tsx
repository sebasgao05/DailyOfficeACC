import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";

export const metadata: Metadata = {
  title: "Sexta – LOC 1928",
};

export default function Sexta() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Sexta
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        La Hora Sexta — Oración del Mediodía
      </p>

      <p className="rubric">
        ¶ La Sexta se dice cerca del mediodía, en memoria de la hora en que Nuestro Señor
        fue clavado en la Cruz, y en que las tinieblas cubrieron toda la tierra. El oficiante,
        de pie, comienza con los versos de apertura, a los cuales responde la congregación.
      </p>

      {/* Versos de apertura */}
      <h2 className="section-title" id="apertura">Apertura</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, ven en mi auxilio.</p>
        <p className="versicle response"><strong>R.</strong> Señor, date prisa en socorrerme.</p>
      </div>
      <p className="rubric">¶ Todos de pie.</p>
      <div className="my-4 space-y-1">
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
        <p className="versicle"><strong>Ofic.</strong> Aleluya.</p>
      </div>
      <p className="rubric">¶ En lugar de <em>Aleluya</em>, desde la Septuagésima hasta la Pascua se dice: <em>Alabanza a Ti, oh Señor, Rey de eterna gloria.</em></p>

      {/* Himno */}
      <h2 className="section-title" id="himno">Himno</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">Rector potens, verax Deus</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Poderoso Rector, Dios veraz, *<br/>que gobiernas y ordenas cuanto existe,</p>
        <p className="psalm-verse">Tú vistes la mañana de esplendor *<br/>y enciendes el mediodía con fuego ardiente.</p>
        <p className="psalm-verse">Apaga en nosotros la llama de la discordia, *<br/>aparta el calor dañino de las pasiones;</p>
        <p className="psalm-verse">Concede salud a nuestros cuerpos *<br/>y verdadera paz a nuestros corazones.</p>
        <p className="psalm-verse">Concédelo, Padre misericordiosísimo, *<br/>y Tú, Hijo Unigénito igual al Padre,</p>
        <p className="psalm-verse">Que con el Espíritu Consolador *<br/>reinas por los siglos de los siglos. Amén.</p>
      </div>

      {/* Salmodia */}
      <h2 className="section-title" id="salmos">Salmodia</h2>
      <p className="rubric">
        ¶ Se dice la antífona, y luego la porción de los Salmos señalada para la hora conforme
        al uso de la Iglesia. Al final de cada salmo se dice el <em>Gloria Patri</em>, y se repite
        la antífona.
      </p>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ant.</strong> A la hora sexta subió el Señor a la Cruz por nuestra salvación.</p>
      </div>
      <DailyReadings period="evening" />
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ant.</strong> A la hora sexta subió el Señor a la Cruz por nuestra salvación.</p>
      </div>

      {/* Lectura breve */}
      <h2 className="section-title" id="lectura">Lectura Breve</h2>
      <p className="text-center text-sm text-gray-500 italic mb-2">Gálatas 6:14</p>
      <div className="my-4">
        <p>En cuanto a mí, Dios me libre de gloriarme si no es en la Cruz de nuestro Señor Jesucristo, por la cual el mundo está crucificado para mí, y yo para el mundo.</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>R.</strong> Demos gracias a Dios.</p>
      </div>

      {/* Responsorio */}
      <h2 className="section-title" id="responsorio">Responsorio Breve</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Nos saciaste, Señor, por la mañana con tu misericordia.</p>
        <p className="versicle response"><strong>R.</strong> Nos saciaste, Señor, por la mañana con tu misericordia.</p>
        <p className="versicle"><strong>Ofic.</strong> Nos alegramos y nos regocijamos todos nuestros días.</p>
        <p className="versicle response"><strong>R.</strong> Con tu misericordia.</p>
        <p className="versicle"><strong>Ofic.</strong> Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Nos saciaste, Señor, por la mañana con tu misericordia.</p>
      </div>

      {/* Versos */}
      <h2 className="section-title" id="versiculos">Versículos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor es mi fortaleza y mi cántico.</p>
        <p className="versicle response"><strong>R.</strong> Él se ha convertido en mi salvación.</p>
      </div>

      {/* Padre Nuestro */}
      <h2 className="section-title" id="padrenuestro">El Padre Nuestro</h2>
      <p className="rubric">¶ Dicho por todos.</p>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      {/* Preces */}
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>

      {/* Colecta de Sexta */}
      <h2 className="section-title" id="colecta">La Colecta</h2>
      <div className="collect">
        <p>Oh Dios, que a la hora sexta quisiste que tu Hijo unigénito fuese clavado en el madero de la Cruz por la salvación del mundo, y cubriste de tinieblas la tierra entera: concédenos, te suplicamos, extinguir en nuestros corazones toda tiniebla del pecado, para que, alumbrados por la luz de tu gracia, merezcamos alcanzar la vida eterna; por el mismo Jesucristo, tu Hijo, nuestro Señor, que Contigo vive y reina en unidad del Espíritu Santo, un solo Dios, por los siglos de los siglos. Amén.</p>
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
        <p>Las almas de los fieles, por la misericordia de Dios, descansen en paz. Amén.</p>
      </div>
    </article>
  );
}
