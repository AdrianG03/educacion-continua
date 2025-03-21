import { useState } from "react";
import MenuCatalog from "./menuCatalog/MenuCatalog";
import courses from "./data/courses.json";
import { Link } from "react-router-dom";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("TODO");

  const filteredCourses =
    selectedCategory === "TODO"
      ? courses
      : courses.filter(
          (course) => course.type.toUpperCase() === selectedCategory
        );

  return (
    <div className="pt-10 h-fit w-screen flex justify-center">
      <div className="w-full px-4 md:w-3/4">
        {/* Menú */}
        <MenuCatalog
          setCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        {/* Lista de cursos */}
        <div className="flex flex-col gap-4 pb-10">
          {filteredCourses.map((course) => (
            <Link to={`/catalogo/${course.id}`} key={course.id}>
              <div className="p-4 border rounded-lg shadow-md bg-white text-black text-justify hover:shadow-lg transition-shadow flex flex-col md:flex-row md:gap-4 items-center">
                {/* Imagen */}
                <div className="w-full md:w-52 h-32 flex-shrink-0 border rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Contenido */}
                <div className="w-full md:w-auto mt-4 md:mt-0">
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-600 font-bold mb-2">{course.type}</p>
                  <p className="text-gray-600">
                    <b>Objetivo:</b> {course.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
