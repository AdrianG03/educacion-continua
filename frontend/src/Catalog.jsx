import MenuCatalog from "./menuCatalog/MenuCatalog";

export default function Catalog() {
  return (
    <div className="pt-10 h-fit w-screen gap-1 flex justify-center">
      <div className="w-3/4">
        <MenuCatalog />
      </div>
    </div>
  );
}
