import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "Página principal" | "Búsqueda por filtros" | "Creación de héroe";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "Página principal" ? "selected" : ""}>
        Página principal
      </a>
      <a href="/search" class={selected === "Búsqueda por filtros" ? "selected" : ""}>
        Búsqueda por filtros
      </a>
      <a href="/add" class={selected === "Creación de héroe" ? "selected" : ""}>
        Creación de héroe
      </a>
    </div>
  );
};

export default Menu;