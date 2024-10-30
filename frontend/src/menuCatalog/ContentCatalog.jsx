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
          <iframe
            src={course.program}
            className="w-full h-[500px] mt-4 border rounded"
            title="Programa del curso"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
