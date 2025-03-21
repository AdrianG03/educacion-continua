import PropTypes from "prop-types";
import ButtonMenu from "../components/ButtonMenu";

export default function MenuCatalog({ setCategory, selectedCategory }) {
  const categories = [
    { letter: "T", label: "TODO" },
    { letter: "A", label: "ADMINISTRATIVO" },
    { letter: "D", label: "DESARROLLO HUMANO" },
    { letter: "T", label: "TÉCNICO" },
    { letter: "E", label: "EMPRESARIAL" },
    { letter: "C", label: "COMPUTACIÓN" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center md:text-left">
        CATÁLOGO DE CURSOS
      </h1>
      <p className="text-xl font-medium break-words text-justify">
        Aquí encontrarás información de nuestro catálogo de cursos. Si te
        interesa alguno de ellos y no se encuentra en la lista de cursos
        actuales, comunícate con nosotros para programarlo.
      </p>
      <br />
      {/* Contenedor responsive */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:flex md:justify-between pb-10">
        {categories.map((category) => (
          <div key={category.label} className="flex justify-center">
            <ButtonMenu
              letter={category.letter}
              label={category.label}
              onClick={() => setCategory(category.label.toUpperCase())}
              isActive={selectedCategory === category.label.toUpperCase()}
            />
          </div>
        ))}
      </div>
    </>
  );
}

MenuCatalog.propTypes = {
  setCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
};
