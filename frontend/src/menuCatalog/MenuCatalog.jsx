import ButtonMenu from "../components/ButtonMenu";

export default function MenuCatalog() {
  return (
    <>
      <h1 className="text-3xl font-bold">CATÁLOGO</h1>
      <p className="text-xl font-medium break-words text-justify">
        Aquí encontrarás información de nuestro catálogo de cursos, si te
        interesa alguno de ellos y no se encuentra en la lista de cursos
        actuales, comunícate con nosotros para programarlo.
      </p>
      <br />
      <div className="mt-10 flex justify-between pb-10">
        <ButtonMenu letter="T" label="TODO" onClick={() => alert("Prueba")} />
        <ButtonMenu
          letter="A"
          label="ADMINISTRATIVOS"
          onClick={() => alert("Prueba")}
        />
        <ButtonMenu
          letter="D"
          label="DESARROLLO HUMANO"
          onClick={() => alert("Prueba")}
        />
        <ButtonMenu
          letter="T"
          label="TÉCNICA"
          onClick={() => alert("Prueba")}
        />
        <ButtonMenu
          letter="E"
          label="EMPRESARIAL"
          onClick={() => alert("Prueba")}
        />
        <ButtonMenu
          letter="C"
          label="COMPUTACIÓN"
          onClick={() => alert("Prueba")}
        />
      </div>
    </>
  );
}
