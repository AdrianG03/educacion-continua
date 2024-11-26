import PropTypes from "prop-types";

export default function ButtonMenu({ letter, label, onClick, isActive }) {
  return (
    <button
      className={`rounded-full flex p-2 ${
        isActive ? "bg-blue-800 text-white" : "bg-gray-300 text-black"
      } hover:shadow-md`}
      onClick={onClick}
    >
      <div
        className={`rounded-full size-7 text-center font-bold ${
          isActive ? "bg-blue-500 text-white" : "bg-gray-600"
        }`}
      >
        {letter}
      </div>
      <p className="font-medium px-2">{label}</p>
    </button>
  );
}

ButtonMenu.propTypes = {
  label: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool, // Nuevo prop para determinar si el botón está activo
};
