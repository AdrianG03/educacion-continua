import PropTypes from "prop-types";
import { MdCastForEducation } from "react-icons/md";

export default function ContentCatalog({
  title,
  time,
  type,
  modal,
  description,
  program,
  img,
}) {
  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-8/12">
        {/* Título */}
        <div className="flex font-bold p-2 text-primary">
          <MdCastForEducation className="text-4xl" />
          <h1 className="pl-4 text-3xl">{title}</h1>
        </div>
        {/* Imagen */}
        <div className="flex justify-center items-center">
          <div className="w-[300px] h-[300px] m-3 b"></div>
        </div>
        {/* Datos */}
        <div className="flex justify-between m-3 text-xl">
          <p>
            <b className="text-primary">Duración:</b> {time}
          </p>
          <p>
            <b className="text-primary">Modalidad:</b> {modal}
          </p>
          <p>
            <b className="text-primary">Tipo:</b> {type}
          </p>
        </div>
      </div>
    </div>
  );
}

ContentCatalog.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
