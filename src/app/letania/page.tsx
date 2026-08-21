import { Metadata } from "next";

export const metadata: Metadata = { title: "La Letanía – LOC 1928" };

export default function Letania() {
  return (
    <article className="office-content">
      <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-2 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
        La Letanía o Plegaria General
      </h1>
      <p className="rubric">¶ Para usarse después de la tercera colecta de la Oración Matutina o Vespertina, o antes de la Santa Comunión, o bien por separado.</p>

      <div className="my-6 space-y-3">
        <div><p>Oh Dios Padre, Creador del cielo y de la tierra:</p><p className="response pl-4"><strong>R.</strong> ten piedad de nosotros.</p></div>
        <div><p>Dios Hijo, Redentor del mundo:</p><p className="response pl-4"><strong>R.</strong> ten piedad de nosotros.</p></div>
        <div><p>Dios Espíritu Santo, Santificador de los fieles:</p><p className="response pl-4"><strong>R.</strong> ten piedad de nosotros.</p></div>
        <div><p>Santa, bendita y gloriosa Trinidad, un solo Dios:</p><p className="response pl-4"><strong>R.</strong> ten piedad de nosotros.</p></div>
      </div>

      <div className="collect my-6">
        <p>Señor, no te acuerdes de nuestros pecados ni de los de nuestros padres, ni tomes venganza de nuestras maldades; perdónanos, buen Señor, perdona a tu pueblo, que redimiste con tu preciosísima sangre, y no estés siempre enojado con nosotros.</p>
        <p className="response mt-2"><strong>R.</strong> Ten piedad de nosotros.</p>
      </div>

      <h2 className="section-title">Deprecaciones</h2>
      <div className="my-4 space-y-2">
        {[
          "De todo mal y daño; del pecado; de las astucias y ataques del diablo; de tu ira y de la condenación eterna:",
          "De la ceguera del corazón; de la soberbia, la vanagloria y la hipocresía; de la envidia, el odio y toda falta de amor:",
          "De todo deseo desordenado y pecaminoso, y de los engaños del mundo, del demonio y de la carne:",
          "Del rayo y la tempestad; del incendio, el terremoto y la inundación; de la peste y el hambre; de la guerra, la violencia y la muerte repentina:",
          "De toda sedición y rebelión; de toda falsa doctrina, herejía y cisma; de la dureza de corazón y del desprecio de tu Palabra y de tus mandamientos:",
        ].map((petition, i) => (
          <div key={i}>
            <p>{petition}</p>
            <p className="response pl-4"><strong>R.</strong> líbranos, Señor.</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Por los misterios de Cristo</h2>
      <div className="my-4 space-y-2">
        {[
          "Por el misterio de tu santa encarnación; por tu santo nacimiento; por tu bautismo, ayuno y tentación:",
          "Por tu agonía y tu sudor de sangre; por tu cruz y pasión; por tu preciosa muerte y sepultura; por tu gloriosa resurrección y ascensión; y por la venida del Espíritu Santo:",
          "En todo tiempo de tribulación; en todo tiempo de prosperidad; en la hora de la muerte y en el día del juicio:",
        ].map((petition, i) => (
          <div key={i}>
            <p>{petition}</p>
            <p className="response pl-4"><strong>R.</strong> líbranos, Señor.</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Intercesiones</h2>
      <div className="my-4 space-y-2">
        {[
          "Señor Dios, nosotros, pecadores, te pedimos que escuches nuestros ruegos, y que gobiernes y guíes a tu santa Iglesia universal por el camino recto:",
          "Que guíes el corazón de quienes nos gobiernan, para que ante todo busquen tu honor y tu gloria:",
          "Que bendigas y protejas a todas las autoridades, dándoles la gracia de administrar justicia y sostener la verdad:",
          "Que ilumines a todos los obispos, presbíteros y diáconos con el verdadero conocimiento de tu Palabra, para que la proclamen con su predicación y su ejemplo:",
          "Que envíes trabajadores a tu viña:",
          "Que bendigas y guardes a todo tu pueblo:",
          "Que des a todas las naciones unidad, paz y concordia:",
          "Que te dignes darnos un corazón dispuesto para amarte y temerte, y para vivir cuidadosamente según tus mandamientos:",
          "Que te dignes dar a todo tu pueblo aumento de gracia para oír con humildad tu Palabra, para abrazarla con afecto puro y para producir los frutos del Espíritu:",
          "Que traigas al camino de la verdad a todos los que andan en el error y el engaño:",
          "Que te dignes fortalecer a los que aún permanecen firmes; y sostener y dar fuerza a los débiles; levantar a los caídos; y finalmente hacernos hollar a Satanás bajo nuestros pies:",
          "Que ayudes, defiendas y consueles a todos los que están en peligro, necesidad o tribulación:",
          "Que protejas a los que viajan, a las mujeres que dan a luz, a los enfermos y a los niños, y que te compadezcas de los presos y cautivos:",
          "Que ampares y sostengas a los huérfanos y a las viudas, y a todos los que están solos y oprimidos:",
          "Que tengas misericordia de todos:",
          "Que perdones a nuestros enemigos y perseguidores, y conviertas su corazón:",
          "Que nos des y conserves los frutos de la tierra, para que a su tiempo los disfrutemos:",
          "Que nos des verdadero arrepentimiento, nos perdones nuestros pecados y descuidos, y nos concedas la gracia de tu Espíritu Santo para enmendar nuestra vida según tu santa Palabra:",
        ].map((petition, i) => (
          <div key={i}>
            <p>{petition}</p>
            <p className="response pl-4"><strong>R.</strong> te rogamos, óyenos.</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Agnus Dei</h2>
      <div className="my-4 space-y-2">
        <div><p>Hijo de Dios:</p><p className="response pl-4"><strong>R.</strong> te rogamos, óyenos.</p></div>
        <div><p>Cordero de Dios, que quitas el pecado del mundo:</p><p className="response pl-4"><strong>R.</strong> concédenos la paz.</p></div>
        <div><p>Cordero de Dios, que quitas el pecado del mundo:</p><p className="response pl-4"><strong>R.</strong> ten misericordia de nosotros.</p></div>
      </div>

      <div className="my-4 space-y-1">
        <p>Cristo, óyenos.</p>
        <p className="response"><strong>R.</strong> Cristo, óyenos.</p>
        <p>Señor, ten piedad.</p>
        <p className="response"><strong>R.</strong> Señor, ten piedad.</p>
        <p>Cristo, ten piedad.</p>
        <p className="response"><strong>R.</strong> Cristo, ten piedad.</p>
        <p>Señor, ten piedad.</p>
        <p className="response"><strong>R.</strong> Señor, ten piedad.</p>
      </div>

      <p className="rubric">¶ Enseguida el oficiante y el pueblo dirán juntos el Padre Nuestro.</p>
      <div className="collect">
        <p>Padre nuestro que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.</p>
      </div>

      <h2 className="section-title">Oración Final</h2>
      <div className="collect">
        <p>Oh Dios, Padre misericordioso, que no desprecias el gemido del corazón contrito ni el anhelo de los afligidos: escucha con bondad las oraciones que te dirigimos en nuestras penas y adversidades, y atiéndenos, para que los males que la astucia del demonio o de los hombres traman contra nosotros queden, por tu buena providencia, reducidos a la nada; y así nosotros, tus siervos, libres de toda persecución, te demos siempre gracias en tu santa Iglesia; por Jesucristo, nuestro Señor. Amén.</p>
      </div>
    </article>
  );
}
