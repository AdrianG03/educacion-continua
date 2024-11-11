import { useParams } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import courses from "../data/courses.json";

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
            width: "5.5in",
            height: "7.5in",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
            borderRadius: "4px",
            padding: "0.5in", // Reducimos el padding para el tamaño más pequeño
            fontFamily: "serif",
          }}
          dangerouslySetInnerHTML={{ __html: course.path }}
        />

        <div className="flex justify-center mt-10 mb-10">
          <a
            href={course.program} // Link al PDF
            target="_blank" // Abrir en una nueva pestaña
            rel="noopener noreferrer" // Seguridad adicional
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Obtener Programa
          </a>
        </div>
      </div>
    </div>
  );
}
