import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Completas – LOC 1928",
};

export default function Completas() {
  return (
    <article className="office-content">
      <h1
        className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Completas
      </h1>
      <p className="text-center text-gray-500 italic mb-8">
        El Oficio de Completas — La oración al fin del día
      </p>

      {/* Apertura */}
      <p className="rubric">
        ¶ Al terminar el día, todos de pie, el oficiante comenzará el oficio.
      </p>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor nos conceda una noche tranquila y un fin perfecto.</p>
        <p className="versicle response"><strong>R.</strong> Amén.</p>
      </div>

      {/* Versos de apertura */}
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Nuestro auxilio está en el nombre del Señor.</p>
        <p className="versicle response"><strong>R.</strong> Que hizo el cielo y la tierra.</p>
      </div>

      {/* Confesión breve */}
      <h2 className="section-title" id="confesion">Confesión</h2>
      <p className="rubric">¶ Todos de rodillas.</p>
      <div className="collect">
        <p>Confieso a Dios todopoderoso, ante toda la corte celestial y ante vosotros, hermanos, que he pecado gravemente, de pensamiento, palabra y obra, por mi culpa: por tanto ruego a la bienaventurada siempre Virgen María, a todos los santos, y a vosotros, hermanos, que roguéis por mí al Señor nuestro Dios. Amén.</p>
      </div>
      <div className="collect">
        <p>Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados, y nos lleve a la vida eterna. Amén.</p>
      </div>

      {/* Versos */}
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Vuélvenos, oh Dios, Salvador nuestro.</p>
        <p className="versicle response"><strong>R.</strong> Y aparta de nosotros tu ira.</p>
        <p className="versicle"><strong>Ofic.</strong> Oh Dios, ven en mi auxilio.</p>
        <p className="versicle response"><strong>R.</strong> Señor, date prisa en socorrerme.</p>
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
      </div>

      {/* Salmos de Completas */}
      <h2 className="section-title" id="salmos">Los Salmos</h2>
      <p className="rubric">¶ Se dicen los Salmos señalados para Completas.</p>

      <p className="text-center text-sm text-gray-500 italic mb-4">Salmo 4 — Cum invocarem</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Respóndeme cuando te invoco, oh Dios, defensor mío; *<br/>en la angustia me diste anchura, ten piedad de mí y escucha mi oración.</p>
        <p className="psalm-verse">Hijos de los hombres, ¿hasta cuándo seréis de duro corazón, *<br/>por qué amáis la vanidad y buscáis la mentira?</p>
        <p className="psalm-verse">Sabed que el Señor hace maravillas por su fiel: *<br/>el Señor me escucha cuando lo invoco.</p>
        <p className="psalm-verse">Temblad y no pequéis, *<br/>reflexionad en el silencio de vuestro lecho.</p>
        <p className="psalm-verse">Ofreced sacrificios legítimos *<br/>y confiad en el Señor.</p>
        <p className="psalm-verse">En paz me acuesto y en seguida me duermo, *<br/>porque Tú solo, Señor, me haces vivir tranquilo.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      <p className="text-center text-sm text-gray-500 italic mb-4">Salmo 31:1-6 — In te, Domine, speravi</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">A Ti, Señor, me acojo: *<br/>no quede yo nunca defraudado; líbrame Tú, que eres justo.</p>
        <p className="psalm-verse">Inclina tu oído hacia mí, *<br/>ven aprisa a librarme.</p>
        <p className="psalm-verse">Sé la roca de mi refugio, *<br/>un baluarte donde me salve.</p>
        <p className="psalm-verse">Tú eres mi roca y mi baluarte; *<br/>por tu nombre, dirígeme y guíame.</p>
        <p className="psalm-verse">Sácame de la red que me han tendido, *<br/>porque Tú eres mi amparo.</p>
        <p className="psalm-verse">En tus manos encomiendo mi espíritu; *<br/>Tú, el Señor, Dios leal, me librarás.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      <p className="text-center text-sm text-gray-500 italic mb-4">Salmo 91 — Qui habitat</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Tú que habitas al amparo del Altísimo, *<br/>que moras a la sombra del Omnipotente,</p>
        <p className="psalm-verse">Di al Señor: «Refugio mío, alcázar mío, *<br/>Dios mío, en quien confío».</p>
        <p className="psalm-verse">Él te librará de la red del cazador, *<br/>de la peste funesta.</p>
        <p className="psalm-verse">Te cubrirá con sus plumas, bajo sus alas te refugiarás: *<br/>su brazo es escudo y armadura.</p>
        <p className="psalm-verse">No temerás el espanto nocturno, *<br/>ni la flecha que vuela de día.</p>
        <p className="psalm-verse">Porque a sus ángeles ha dado órdenes *<br/>para que te guarden en tus caminos.</p>
        <p className="psalm-verse">Te llevarán en sus palmas *<br/>para que tu pie no tropiece en la piedra.</p>
        <p className="psalm-verse">«Se puso junto a mí: lo libraré; *<br/>lo protegeré porque conoce mi nombre».</p>
        <p className="psalm-verse">Me invocará, y yo le responderé; *<br/>con él estaré en la tribulación.</p>
        <p className="psalm-verse">Lo saciaré de largos días *<br/>y le haré ver mi salvación.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      <p className="text-center text-sm text-gray-500 italic mb-4">Salmo 134 — Ecce nunc</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Bendecid al Señor, todos los siervos del Señor, *<br/>los que estáis en la casa del Señor por la noche.</p>
        <p className="psalm-verse">Levantad las manos hacia el santuario *<br/>y bendecid al Señor.</p>
        <p className="psalm-verse">El Señor te bendiga desde Sión, *<br/>el que hizo el cielo y la tierra.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>

      {/* Himno */}
      <h2 className="section-title" id="himno">Himno</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">Te lucis ante terminum</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Antes que acabe la luz del día, *<br/>Te rogamos, Creador de todo,</p>
        <p className="psalm-verse">Que, por tu clemencia, seas *<br/>nuestro amparo y nuestra guarda.</p>
        <p className="psalm-verse">Huyan lejos los sueños funestos *<br/>y los fantasmas de la noche;</p>
        <p className="psalm-verse">Reprime a nuestro enemigo, *<br/>para que no manche nuestros cuerpos.</p>
        <p className="psalm-verse">Concédenoslo, Padre piadosísimo, *<br/>y Tú, Unigénito igual al Padre,</p>
        <p className="psalm-verse">Que con el Espíritu Consolador *<br/>reinas por todos los siglos. Amén.</p>
      </div>

      {/* Lectura breve */}
      <h2 className="section-title" id="lectura">Lectura Breve</h2>
      <div className="my-4">
        <p>Tú estás en medio de nosotros, Señor, y sobre nosotros es invocado tu Nombre; no nos desampares, oh Señor Dios nuestro. <em className="text-gray-500">Jeremías 14:9</em></p>
      </div>
      <div className="my-4">
        <p>Sed sobrios y velad; porque vuestro adversario el diablo, como león rugiente, anda alrededor buscando a quien devorar. Resistidle firmes en la fe. <em className="text-gray-500">1 San Pedro 5:8-9</em></p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Demos gracias a Dios.</p>
      </div>

      {/* Responsorio */}
      <h2 className="section-title" id="responsorio">Responsorio</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> En tus manos, Señor, encomiendo mi espíritu.</p>
        <p className="versicle response"><strong>R.</strong> En tus manos, Señor, encomiendo mi espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Porque Tú nos has redimido, Señor, Dios de la verdad.</p>
        <p className="versicle response"><strong>R.</strong> Encomiendo mi espíritu.</p>
        <p className="versicle">Gloria al Padre, y al Hijo, y al Espíritu Santo.</p>
        <p className="versicle response"><strong>R.</strong> En tus manos, Señor, encomiendo mi espíritu.</p>
      </div>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Guárdanos, Señor, como a las niñas de tus ojos.</p>
        <p className="versicle response"><strong>R.</strong> A la sombra de tus alas protégenos.</p>
      </div>

      {/* Nunc Dimittis */}
      <h2 className="section-title" id="nunc-dimittis">Nunc Dimittis</h2>
      <p className="text-center text-sm text-gray-500 italic mb-4">El Cántico de Simeón — Lucas 2:29-32</p>
      <p className="rubric">¶ Antífona: Sálvanos, Señor, despiertos, guárdanos dormidos; para que velemos con Cristo y descansemos en paz.</p>
      <div className="my-4 space-y-3">
        <p className="psalm-verse">Ahora, Señor, según tu promesa, *<br/>puedes dejar a tu siervo irse en paz.</p>
        <p className="psalm-verse">Porque mis ojos han visto *<br/>tu Salvador,</p>
        <p className="psalm-verse">A quien has presentado *<br/>ante todos los pueblos:</p>
        <p className="psalm-verse">Luz para alumbrar a las naciones *<br/>y gloria de tu pueblo Israel.</p>
      </div>
      <p className="gloria">Gloria al Padre, y al Hijo, y al Espíritu Santo.<br/>Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.</p>
      <p className="rubric">¶ Antífona: Sálvanos, Señor, despiertos, guárdanos dormidos; para que velemos con Cristo y descansemos en paz.</p>

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

      {/* Preces */}
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> El Señor esté con vosotros.</p>
        <p className="versicle response"><strong>R.</strong> Y con tu espíritu.</p>
        <p className="versicle"><strong>Ofic.</strong> Oremos.</p>
      </div>

      {/* Colectas de Completas */}
      <h2 className="section-title" id="colectas">Colectas de Completas</h2>
      <div className="collect">
        <p>Visítanos, Señor, esta morada, y aleja de ella todas las asechanzas del enemigo; que tus santos ángeles habiten en ella para guardarnos en paz, y tu bendición sea siempre sobre nosotros; por Jesucristo nuestro Señor. Amén.</p>
      </div>
      <div className="collect">
        <p>Ilumina nuestras tinieblas, Te rogamos, oh Señor; y por tu gran misericordia defiéndenos de todos los peligros y riesgos de esta noche; por amor de tu Hijo único, nuestro Salvador Jesucristo. Amén.</p>
      </div>
      <div className="collect">
        <p>Sé nuestra guarda mientras velamos, oh Señor, y protégenos mientras dormimos; para que despiertos velemos con Cristo, y dormidos descansemos en paz. Amén.</p>
      </div>

      {/* Bendición final */}
      <h2 className="section-title" id="bendicion">Bendición Final</h2>
      <div className="my-4 space-y-1">
        <p className="versicle"><strong>Ofic.</strong> Bendigamos al Señor.</p>
        <p className="versicle response"><strong>R.</strong> Demos gracias a Dios.</p>
      </div>
      <div className="text-center my-8 italic">
        <p>El Señor todopoderoso y misericordioso, Padre, Hijo y Espíritu Santo, nos bendiga y nos guarde. Amén.</p>
      </div>
    </article>
  );
}
