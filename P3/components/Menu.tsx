import { FunctionComponent } from "preact";

type MenuProps = {
  selected: "Página principal" | "Búsqueda por filtros" | "Crear cuenta";
};

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "Página principal" ? "selected" : ""}>
        Página principal
      </a>
      <a href="/filter" class={selected === "Búsqueda por filtros" ? "selected" : ""}>
        Búsqueda por filtros
      </a>
      <a href="/signup" class={selected === "Crear cuenta" ? "selected" : ""}>
        Crear cuenta
      </a>
    </div>
  );
};

export default Menu;