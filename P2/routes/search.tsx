import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Hero } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";

type Data = {
  heros: Hero[],
  name: string
}

export const handler: Handlers = {
  
  async GET(req: Request, ctx: FreshContext<unknown, Data>) {

    const url = new URL(req.url);
    const name = url.searchParams.get("name") || "";

    try {
      const heros = await Axios.get<Hero[]>(
        "https://supermondongo.deno.dev/",
      );
      const data: Data = {heros: heros.data, name};
      return ctx.render(data);
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

const Page = (props: PageProps<Data>) => {

    try {
      const {heros, name} = props.data

      return (
        <div class="busqueda">
          <br/>Búsqueda:<form method="get">
            <input type="text" name="name" value={""} /> 
            <button type="submit">Enviar</button>                
          </form>

          <Contenedor heros = {heros.filter((h: Hero) => h.name.toLowerCase().includes(name.toLowerCase()))}/>

        </div>
        
      );

  } catch (e) {
      return (<div>Ha habido un error</div>);
  }

    
};

export default Page;
