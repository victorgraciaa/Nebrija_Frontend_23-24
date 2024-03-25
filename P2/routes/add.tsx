import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Hero } from "../types.ts";
import axios from "npm:axios";
import Form from "../islands/Form.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try{
      const params = await req.formData();
      console.log(params)
      const { name, imagen, sonido, creador } = Object.fromEntries(params);
      console.log(name,"\n",imagen,"\n", sonido,"\n", creador);
      const data = await axios.post("https://supermondongo.deno.dev/", {
        name,
        imagen,
        sonido,
        creador
      }, );
      return ctx.render(data);
    }
    catch(e){
      console.error(e);
      return new Response("Error", {status: 500});
    }
  },
}

const Page = (props: PageProps<Hero>) => {

  try {

      return (
        <div>
          <Form/>
        </div>
      );

  } catch (e) {
      return (<div>Ha habido un error</div>);
  }

    
};

export default Page;
