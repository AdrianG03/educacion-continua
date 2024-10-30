import MenuCatalog from "./menuCatalog/MenuCatalog";
import courses from "./data/courses.json";
import { Link } from "react-router-dom";

export default function Catalog() {
  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-3/4">
        <MenuCatalog />

        <div className="flex flex-col gap-4 pb-10">
          {courses.map((course) => (
            <>
              <Link to={`/catalogo/${course.id}`} key={course.id}>
                <div
                  key={course.id} // Agrega una key única para cada elemento
                  className="p-4 border rounded-lg shadow-md bg-white text-black text-justify hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-600 font-bold mb-2">{course.type}</p>
                  <p className="text-gray-600">
                    <b>Objetivo:</b> {course.description}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
