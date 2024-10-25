import { MdEmail } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaXTwitter, FaHouse } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="my-6">
      <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        <div>
          <h1 className="text-2xl font-extrabold">Envía un mensaje</h1>
          <p className="text-sm text-gray-400 mt-3">
            Si tienes alguna duda, envía un mensaje a nuestro correo
            electrónico. Con gusto te atenderemos
          </p>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <MdEmail className="size-6 text-primary" />
                </div>
                <a
                  target="blank"
                  href="https://mail.google.com/"
                  className="text-primary text-sm ml-3 hover:text-[#007bff]"
                >
                  <small className="block">Gmail</small>
                  <strong>https://gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.cuautla.tecnm.mx/" target="blank">
                  <FaHouse className="size-5 text-primary hover:text-[#007bff]" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.facebook.com/ITCuautlaOficial"
                  target="blank"
                >
                  <TiSocialFacebook className="size-7 text-primary hover:text-[#007bff]" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.instagram.com/tecnmcuautla?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="blank"
                >
                  <SlSocialInstagram className="size-5 text-primary hover:text-[#007bff]" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://x.com/TecnmCuautla" target="blank">
                  <FaXTwitter className="size-5 text-primary hover:text-[#007bff]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auo space-y-4">
          <input
            type="text"
            placeholder="Nombre:"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <input
            type="email"
            placeholder="Email:"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <input
            type="text"
            placeholder="Teléfono:"
            className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
          />
          <textarea
            placeholder="Mensaje:"
            rows="6"
            className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
          ></textarea>
          <button
            type="button"
            className="text-white bg-primary hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
}
