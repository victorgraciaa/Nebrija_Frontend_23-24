import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Perfil } from "../types.ts";
import axios from "npm:axios";
import SignupForm from "../islands/SignupForm.tsx";

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try{
      const params = await req.formData();
      const { name, password, age, sex, description, hobbies, photo } = Object.fromEntries(params);
      const data = await axios.post("https://lovers.deno.dev/", {
        name,
        password,
        age,
        sex,
        description,
        hobbies,
        photo
      }, );
      return ctx.render(data)
    }
    catch(e){
      console.error(e);
      return new Response("Error", {status: 500});
    }
  },
}

const Page = (props: PageProps<Perfil>) => {

    try {
  
        return (
          <div>
            <SignupForm/>
          </div>
        );
  
    } catch (e) {
        return (<div>Ha habido un error</div>);
    }
  
      
  };
  
  export default Page;