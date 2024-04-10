import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios, { Axios } from "npm:axios";
import { Perfil } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";

type Data = {
    perfiles: Perfil[];
    name: string
};

export const handler: Handlers = {

    async GET(req: Request, ctx: FreshContext<unknown, Data>) {

        const url = new URL(req.url);
        const name = url.searchParams.get("name") || "";

        try {
            const perfiles = await axios.get<Perfil[]>(
                "https://lovers.deno.dev/",
            );
            const data: Data = {perfiles: perfiles.data, name};
            return ctx.render(data);
        } catch (e) {
            console.error(e);
            throw new Error("Ha habido un error");
        }

    }

}


const Page = (props: PageProps<Data>) => {

    try {
      const {perfiles, name} = props.data

      return (
        <div class="busqueda">
          <br/>Búsqueda:<form method="get">
            <input type="text" name="name" value={""} /> 
            <button type="submit">Enviar</button>                
          </form>

          <Contenedor perfiles = {perfiles.filter((p: Perfil) => p.name.toLowerCase().includes(name.toLowerCase()))}/>
        </div>
        
      );

  } catch (e) {
      return (<div>Ha habido un error</div>);
  }

    
};

export default Page;