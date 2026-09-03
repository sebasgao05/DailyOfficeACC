import { Metadata } from "next";
import { DailyReadings } from "@/components/DailyReadings";

export const metadata: Metadata = {
  title: "Tercia – LOC 1928",
};

export default function Tercia() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Tercia
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        La Hora Tercera — Media mañana
      </p>

      <p className="rubric">
        ¶ Tercia se dice a media mañana, hacia la hora tercera del día. Recuerda la venida del
        Espíritu Santo sobre los apóstoles en Pentecostés, que sucedió a la hora tercera. En
        Cuaresma y en las ferias de Adviento se omite el «Aleluya».
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
      <p className="text-center text-sm text-gray-500 italic mb-4">Nunc Sancte nobis Spiritus</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Ven, Espíritu Santo, con el Padre y el Hijo, *<br/>un solo Dios en Trinidad,</p>
        <p className="psalm-verse">dígnate descender pronto sobre nuestros pechos, *<br/>e infúndete en nuestras almas.</p>
        <p className="psalm-verse">Que la boca, la lengua, la mente, el sentido y las fuerzas *<br/>resuenen en tu confesión;</p>
        <p className="psalm-verse">arda el fuego de la caridad, *<br/>y su calor encienda a los prójimos.</p>
        <p className="psalm-verse">Concédenoslo, Padre piadosísimo, *<br/>y tú, Unigénito igual al Padre,</p>
        <p className="psalm-verse">con el Espíritu Consolador, *<br/>que reinas por todos los siglos. Amén.</p>
      </div>

      {/* Antífona */}
      <h2 className="section-title" id="antifona">Antífona</h2>
      <p className="rubric">¶ Se dice la antífona propia del tiempo; fuera de los tiempos señalados:</p>
      <div className="my-4">
        <p className="versicle">Envía tu Espíritu, y serán creados; y renovarás la faz de la tierra.</p>
      </div>

      {/* Salmos */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">
        ¶ Se dice la porción de los Salmos señalada para la hora, según el uso de la Iglesia.
      </p>
      <DailyReadings period="morning" />
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Lectura breve */}
      <h2 className="section-title" id="lectura">Lectura Breve</h2>
      <p className="rubric">¶ Se lee la lección breve señalada. Fuera de los tiempos propios:</p>
      <div className="my-4 space-y-2">
        <p>¿No sabéis que sois templo de Dios, y que el Espíritu de Dios habita en vosotros? Porque santo es el templo de Dios, que sois vosotros. <em className="text-gray-500">1 Cor. 3:16-17</em></p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Demos gracias a Dios.</p>
      </div>

      {/* Responsorio breve */}
      <h2 className="section-title" id="responsorio">Responsorio Breve</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Espíritu del Señor llena la redondez de la tierra. Aleluya.</p>
        <p className="versicle response"><strong>R.</strong> El Espíritu del Señor llena la redondez de la tierra. Aleluya.</p>
        <p className="versicle"><strong>Ofic.</strong> Y todo lo que contiene tiene ciencia de su voz.</p>
        <p className="versicle response"><strong>R.</strong> Aleluya.</p>
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> El Espíritu del Señor llena la redondez de la tierra. Aleluya.</p>
      </div>

      {/* Versos */}
      <h2 className="section-title" id="versos">Versos</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Corazón limpio crea en mí, oh Dios.</p>
        <p className="versicle response"><strong>R.</strong> Y renueva en mí un espíritu recto.</p>
      </div>

      {/* Preces y saludo */}
      <h2 className="section-title" id="preces">Preces</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>

      {/* Colecta de Tercia */}
      <h2 className="section-title" id="colecta">Colecta de Tercia</h2>
      <div className="collect">
        <p>Oh Dios, que a la hora tercera enviaste tu Espíritu Santo sobre los apóstoles reunidos en oración: concede, te rogamos, a los que en esta hora te suplicamos, que el mismo Espíritu derramado en nuestros corazones nos ilumine con la verdad, nos inflame en tu amor y nos guíe en el camino de tus mandamientos; por Jesucristo tu Hijo, nuestro Señor, que contigo vive y reina en unidad del mismo Espíritu Santo, un solo Dios, por los siglos de los siglos. Amén.</p>
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
