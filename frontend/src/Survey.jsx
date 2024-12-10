import teck from "./assets/teck3.jpg";

export default function Survey() {
  return (
    <div
      className="h-[1000px] py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(${teck})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="w-[700px] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-primary mt-20">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          ENCUESTA DE SATISFACCIÓN
        </h2>

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray- dark:text-gray-200" htmlFor="name">
                Nombre Completo
              </label>
              <input
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-white dark:text-gray-200">
                Ocupación
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value="">Selecciona una ocupación</option>
                  <option>Estudiante</option>
                  <option>Profesional independiente</option>
                  <option>Empleado</option>
                  <option>Empresario</option>
                  <option>Desempleado</option>
                  <option>Ama de casa</option>
                  <option>Docente</option>
                  <option>Jubilado</option>
                  <option>Freelancer</option>
                  <option>Tecnólogo</option>
                  <option>Investigador</option>
                  <option>Creativo (artista, diseñador, etc.)</option>
                  <option>Otro</option>
                </select>
              </label>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="service"
              >
                Califica nuestro servicio
              </label>
              <input
                id="service"
                type="range"
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="course"
              >
                ¿Qué curso te gustaría que se impartiera?
              </label>
              <input
                id="course"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Retroalimentación
              </label>
              <textarea
                id="textarea"
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-800 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-700">
              ENVIAR
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
