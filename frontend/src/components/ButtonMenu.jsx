import PropTypes from "prop-types";

export default function ButtonMenu({ letter, label, onClick }) {
  return (
    <button
      className="bg-gray-300 rounded-full flex p-2 hover:shadow-md"
      onClick={onClick}
    >
      <div className="rounded-full bg-gray-600 size-7 text-center font-bold text-white">
        {letter}
      </div>
      <p className="font-medium px-2 text-black">{label}</p>
    </button>
  );
}

ButtonMenu.propTypes = {
  label: PropTypes.string.isRequired,
  letter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
