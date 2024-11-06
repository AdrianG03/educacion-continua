import teck2 from "./assets/facilitiesAssets/template.jpg";
import facilities from "./data/laboratories.json";

export default function Facilities() {
  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold">NUESTRAS INSTALACIONES</h1>
        <p className="text-xl font-medium break-words text-justify">
          El Tecnológico Nacional de México en Cuautla cuenta con mútiples
          espacios en el campus universitario para el desarrollo de actividades
          en diferentes áreas, desde laboratorios de cómputo, espacios de uso
          múltiples, salas ejecutivas, salas audiovisuales, entre muchas otras.
          Todos acondicionados para brindar una experiendia de aprendizaje de
          calidad.
        </p>
        <div className="flex justify-between mt-10 gap-6">
          <button className="flex-grow rounded-lg bg-primary text-white font-bold text-xl hover:bg-blue-800 h-10">
            LABORATORIOS
          </button>
          <button className="flex-grow rounded-lg bg-primary text-white font-bold text-xl hover:bg-blue-800 h-10">
            SALAS
          </button>
        </div>

        <div className="flex justify-center my-10">
          <h1 className="text-2xl font-bold">LABORATORIOS</h1>
        </div>
        {facilities.map((fac) => (
          <>
            <div className="p-4 mb-10 border rounded-lg shadow-lg bg-white text-black text-justify flex gap-4 items-center">
              {/* Recuadro de la imagen */}
              <div className="w-auto h-auto flex-shrink-0 border rounded-lg overflow-hidden bg-gray-200">
                <img
                  src={teck2}
                  alt="Laboratorio"
                  className="w-[570px] h-[250px] object-cover"
                />
              </div>
              {/* Información del curso */}
              <div>
                <h2 className="text-xl font-semibold mb-2">{fac.name}</h2>
                <p className="text-gray-600">
                  <b>Ubicación:</b> {fac.ubication}
                </p>
                <p className="text-gray-600">
                  <b>Capacidad:</b> {fac.capacity}
                </p>
                <p className="text-gray-600">
                  <b>Tipo de servicios:</b> {fac.services}
                </p>
                <p className="text-gray-600">
                  <b>Equipo:</b> {fac.equipment}
                </p>
                <p className="text-gray-600">
                  <b>Descripción:</b> {fac.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
