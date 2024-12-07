import facilities from "../data/laboratories.json";
import teck2 from "../assets/laboAssets/template.jpg";
import img0 from "../assets/laboAssets/img0.jpg";
import img1 from "../assets/laboAssets/img1.jpg";
import img2 from "../assets/laboAssets/img2.jpg";
import img3 from "../assets/laboAssets/img3.jpg";
import img4 from "../assets/laboAssets/img4.jpg";
import img5 from "../assets/laboAssets/img5.jpg";
import img6 from "../assets/laboAssets/img9.jpg";
import img7 from "../assets/laboAssets/img7.jpg";
import img8 from "../assets/laboAssets/img8.jpg";
import img9 from "../assets/laboAssets/img9.jpg";
import img10 from "../assets/laboAssets/img10.jpg";
import img11 from "../assets/laboAssets/img11.jpg";
import img12 from "../assets/laboAssets/img12.jpg";
import img13 from "../assets/laboAssets/img13.jpg";
import img14 from "../assets/laboAssets/img14.jpg";
import img15 from "../assets/laboAssets/img15.jpg";
import img16 from "../assets/laboAssets/img16.jpg";
import img17 from "../assets/laboAssets/img17.jpg";
import img18 from "../assets/laboAssets/img18.jpg";

export default function Laboratories() {
  const images = [
    img0,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    // Agrega las imágenes en el mismo orden que sus índices
  ];
  return (
    <>
      <div className="flex justify-center my-10">
        <h1 className="text-2xl font-bold">LABORATORIOS</h1>
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
            </div>
          </div>
        </>
      ))}
    </>
  );
}
