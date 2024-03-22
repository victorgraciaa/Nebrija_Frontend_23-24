import { FreshContext } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";

const Layout = async (req: Request, ctx: FreshContext) => {
  const Component = ctx.Component;
  const route = ctx.route;
  // last after /
  const page = route.split("/").pop();
  // if page is empty, it means we are at the root
  let selected: string | undefined = page === "" ? "Página principal" : "Creación de héroe";

  if(page === ""){
    selected = "Página principal";
  }
  else if(page === "add"){
    selected = "Creación de héroe";
  }
  else{
    selected = "Búsqueda de héroes";
  }


return (
    <>
        <Menu selected={selected as "Página principal" | "Búsqueda de héroes" | "Creación de héroe"} />
        <Component />
    </>
);
};

export default Layout;
