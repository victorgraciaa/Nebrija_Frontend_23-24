import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Perfil } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";
import PerfilComponent from "../components/PerfilComponent.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Perfil[]>) {
    try {
      const { name } = ctx.params;
      const perfiles = await Axios.get<Perfil[]>(
        `https://lovers.deno.dev/${name}`,
      );
      return ctx.render(perfiles.data);
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

export default function Page(props: PageProps<Perfil>) {
    try {
        const perfil = props.data;      
        return (
            <div class="perfil">
                <PerfilComponent 
                name={perfil.name}
                password={perfil.password}
                age={perfil.age}
                sex={perfil.sex}
                description={perfil.description}
                hobbies={perfil.hobbies}
                photo={perfil.photo}
                comments={perfil.comments} 
                />
            </div>
        );
    } catch (e) {
        return <div>Ha habido un error</div>;
    }
}