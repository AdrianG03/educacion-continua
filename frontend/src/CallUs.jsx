import Contact from "./components/Contact";
export default function CallUs() {
  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-3/4">
        <h1 className="text-3xl font-bold">CONTÁCTANOS</h1>
        <p className="text-xl font-medium break-words text-justify">
          Agradecemos tu interés en contactarnos; queremos que compartas con
          nosotros tus inquietudes, opiniones, comentarios o solicitar
          información de algunos de los servicios que te ofrecemos.
        </p>
        <Contact />
      </div>
    </div>
  );
}
