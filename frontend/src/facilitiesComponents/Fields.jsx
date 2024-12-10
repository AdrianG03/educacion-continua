import facilities from "../data/fields.json";
import teck2 from "../assets/laboAssets/template.jpg";
import img0 from "../assets/fieldsAssets/img0.jpg";
import img1 from "../assets/fieldsAssets/img1.jpg";

export default function Fields() {
  const images = [img0, img1];
  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="text-2xl font-bold">EXPLANADAS</h1>
      </div>
      {facilities.map((fac) => (
        <>
          <div className="p-4 mb-10 border rounded-lg shadow-lg bg-white text-black text-justify flex gap-4 items-center">
            {/* Recuadro de la imagen */}
            <div className="w-auto h-auto flex-shrink-0 border rounded-lg overflow-hidden bg-gray-200">
              <img
                src={images[fac.imgIndex] || teck2}
                alt={fac.name}
                className="w-[570px] h-[250px] object-cover"
              />
            </div>
            {/* Información del curso */}
            <div>
              <h2 className="text-xl font-semibold mb-2">{fac.name}</h2>
              <p className="text-black">
                <b>Ubicación:</b> {fac.ubication}
              </p>
              <p className="text-black">
                <b>Capacidad:</b> {fac.capacity}
              </p>
              <p className="text-black">
                <b>Medidas:</b> {fac.measures}
              </p>
              <p className="text-black">
                <b>Descripción:</b> {fac.description}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}
