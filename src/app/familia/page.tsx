import { Metadata } from "next";

export const metadata: Metadata = { title: "Oración Familiar – LOC 1928" };

export default function Familia() {
  return (
    <article className="max-w-[700px] mx-auto">
      <h1 className="text-3xl text-[var(--color-primary-dark)] text-center mb-1 font-medium tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>
        Oración Familiar
      </h1>
      <p className="text-center text-gray-500 italic mb-2">Formas de Oración para usarse en Familias</p>
      <p className="text-center text-sm text-gray-400 mb-8">Con Oraciones Adicionales</p>

      {/* Morning Prayer */}
      <h2 className="section-title">Oración Matutina</h2>

      <p className="rubric mb-4">
        ¶ El padre o madre de familia, habiendo reunido a todos los que convenientemente puedan estar presentes, que uno de ellos, o cualquier otro que pueda ser designado, diga lo siguiente, todos de rodillas, y comenzando con la Oración del Señor.
      </p>

      <div className="collect mb-6">
        <p>Padre nuestro que estás en los cielos, santificado sea tu Nombre. Venga tu reino. Hágase tu voluntad, así en la tierra como en el cielo. El pan nuestro de cada día, dánosle hoy. Y perdónanos nuestras ofensas, como también nosotros perdonamos a los que nos ofenden. Y no nos dejes caer en tentación, mas líbranos del mal. Porque tuyo es el reino, y el poder, y la gloria, por los siglos de los siglos. Amén.</p>
      </div>

      <p className="rubric text-center mb-4">¶ Aquí puede seguir la Colecta del día.</p>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">La Colecta del Día</h3>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3 mt-6">Colecta por la Paz</h3>
      <div className="collect mb-6">
        <p>Oh Dios, que eres autor de la paz y amante de la concordia, a quien conocer es vida eterna, a quien servir es plena libertad: Defiéndenos, tus humildes siervos, de todos los asaltos de nuestros enemigos; para que nosotros, confiando seguramente en tu defensa, no temamos el poder de ningún adversario; por el poder de Jesucristo nuestro Señor. Amén.</p>
      </div>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">Colecta por la Gracia</h3>
      <div className="collect mb-6">
        <p>Oh Señor, nuestro Padre celestial, Dios todopoderoso y eterno, que nos has traído con seguridad al principio de este día: Defiéndenos en el mismo con tu gran poder; y concede que en este día no caigamos en ningún pecado, ni corramos ningún peligro; sino que todas nuestras acciones, siendo dirigidas por tu gobernación, sean justas a tus ojos; por Jesucristo nuestro Señor. Amén.</p>
      </div>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">Oración por la Gracia de Dios</h3>
      <div className="collect mb-6">
        <p>Oh Dios, que manifiestas tu poder todopoderoso principalmente en mostrar misericordia y piedad: Concédenos abundantemente tal medida de tu gracia, que nosotros, corriendo por el camino de tus mandamientos, podamos alcanzar tus promesas de gracia, y ser hechos partícipes de tu tesoro celestial; por Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Evening Prayer */}
      <h2 className="section-title mt-10">Oración Vespertina</h2>

      <p className="rubric mb-4">
        ¶ El padre o madre de familia, habiendo reunido a todos los que convenientemente puedan estar presentes, que uno de ellos diga lo siguiente, todos de rodillas.
      </p>

      <div className="collect mb-6">
        <p>Padre nuestro que estás en los cielos, santificado sea tu Nombre. Venga tu reino. Hágase tu voluntad, así en la tierra como en el cielo. El pan nuestro de cada día, dánosle hoy. Y perdónanos nuestras ofensas, como también nosotros perdonamos a los que nos ofenden. Y no nos dejes caer en tentación, mas líbranos del mal. Porque tuyo es el reino, y el poder, y la gloria, por los siglos de los siglos. Amén.</p>
      </div>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">Colecta por la Paz</h3>
      <div className="collect mb-6">
        <p>Oh Dios, de quien proceden todos los santos deseos, todos los buenos consejos y todas las obras justas: Da a tus siervos aquella paz que el mundo no puede dar; para que nuestros corazones estén dispuestos a obedecer tus mandamientos; y que, libres del temor de nuestros enemigos, pasemos nuestro tiempo en reposo y quietud; por los méritos de Jesucristo nuestro Salvador. Amén.</p>
      </div>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">Colecta por Ayuda contra los Peligros</h3>
      <div className="collect mb-6">
        <p>Alúmbranos con tu presencia, oh Señor, y por tu gran misericordia defiéndenos de todos los peligros e insidias de esta noche; por el amor de tu único Hijo, nuestro Salvador Jesucristo. Amén.</p>
      </div>

      <h3 className="text-center text-xs uppercase tracking-widest text-gray-500 mb-3">Oración por la Protección Divina</h3>
      <div className="collect mb-6">
        <p>Oh Dios, a cuyo amparo se acogen los que en ti confían, sin cuyo favor nada es fuerte ni santo: Multiplica en nosotros tu misericordia; para que, con tu gobierno y tu dirección, de tal manera pasemos por los bienes temporales, que no perdamos los eternos; por Jesucristo nuestro Señor. Amén.</p>
      </div>

      {/* Gracia final */}
      <div className="text-center my-8 italic border-t border-[var(--color-border)] pt-6">
        <p>La gracia de nuestro Señor Jesucristo, el amor de Dios, y la comunión del Espíritu Santo, sea con todos nosotros para siempre. Amén.</p>
      </div>
    </article>
  );
}
