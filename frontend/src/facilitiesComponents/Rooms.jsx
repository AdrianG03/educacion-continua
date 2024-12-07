import facilities from "../data/rooms.json";
import img0 from "../assets/roomAssets/img0.jpg";
import img1 from "../assets/roomAssets/img1.jpg";
import img2 from "../assets/roomAssets/img2.jpg";
import img3 from "../assets/roomAssets/img3.jpg";
import img4 from "../assets/roomAssets/img4.jpg";
import img5 from "../assets/roomAssets/img5.jpg";
import teck2 from "../assets/laboAssets/template.jpg";

export default function Rooms() {
  const images = [img0, img1, img2, img3, img4, img5];

  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="text-2xl font-bold">SALAS</h1>
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
                <b>Tipo de servicios:</b> {fac.services}
              </p>
              <p className="text-black">
                <b>Equipo:</b> {fac.equipment}
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
