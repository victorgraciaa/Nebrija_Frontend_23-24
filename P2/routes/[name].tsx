import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Hero } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";
import HeroComponent from "../components/HeroComponent.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, Hero[]>) {
    try {
      const { name } = ctx.params;
      const heros = await Axios.get<Hero[]>(
        `https://supermondongo.deno.dev/${name}`,
      );
      return ctx.render(heros.data);
    } catch (e) {
      console.error(e);
      throw new Error("Ha habido un error");
    }
  },
};

export default function Page(props: PageProps<Hero[]>) {
    try {
        const heros = props.data;      
        return (
            <div>
                <Contenedor heros = {heros}/>
            </div>
        );
    } catch (e) {
        return <div>Ha habido un error</div>;
    }
}