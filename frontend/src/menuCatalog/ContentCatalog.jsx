import { useParams } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import courses from "../data/courses.json";
import tecnmlogo from "../assets/tecnmlogo.png";
import patria from "../assets/patria.png";
import membrete from "../assets/membrete.png";

export default function ContentCatalog() {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-8/12">
        {/* Título */}
        <div className="flex font-bold p-2 text-primary">
          <MdCastForEducation className="text-4xl" />
          <h1 className="pl-4 text-3xl">{course.title}</h1>
        </div>
        {/* Imagen */}
        <div className="flex justify-center items-center">
          <div className="w-[400px] h-[250px] m-3">
            <img
              src={course.img}
              alt="Imagen del curso"
              className="w-[400px] h-[250px]"
            />
          </div>
        </div>
        {/* Datos */}
        <div className="flex justify-between mx-3 mt-5 mb-5 text-justify text-xl">
          <p>
            <b className="text-primary">Duración:</b> {course.time}
          </p>
          <p>
            <b className="text-primary">Modalidad:</b> {course.modal}
          </p>
          <p>
            <b className="text-primary">Tipo:</b> {course.type}
          </p>
        </div>
        <div className="flex justify-between text-justify mx-3 mt-5 mb-5 text-xl">
          <p>
            <b className="text-primary">Objetivo:</b> {course.description}
          </p>
        </div>
        <div className="flex justify-between mx-3 mt-5 mb-5 text-xl">
          <p>
            <b className="text-primary">Programa:</b>
          </p>
        </div>
        <div
          className="border border-gray-300 p-10 shadow-lg mx-auto my-5 bg-white"
          style={{
            width: "8.5in",
            minHeight: "12in", // Altura mínima, pero crecerá si el contenido es mayor
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
            padding: "0.5in",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "auto",
          }}
          dangerouslySetInnerHTML={{
            __html: `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <img src="${tecnmlogo}" alt="Top Left Logo" style="height: 80px;" />
        <img src="${patria}" alt="Top Right Logo" style="height: 90px;" />
      </div>
      <div style="flex-grow: 1; padding: 20px;">
        ${course.path}
      </div>
      <div style="display: flex; justify-content: center; margin-top: 20px;">
        <img src="${membrete}" alt="Bottom Logo" style="height: 120px;" />
      </div>
    `,
          }}
        />

        <div className="flex justify-center mt-10 mb-10">
          <a
            href={course.program}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Obtener Programa
          </a>
        </div>
      </div>
    </div>
  );
}
