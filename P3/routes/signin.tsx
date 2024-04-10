import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import Form from "../islands/SignupForm.tsx";

type PerfilSignIn = {
    name: string;
    password: string;
}

export const handler: Handlers = {
  POST: async (req: Request, ctx: FreshContext) => {
    try{
      return ctx.render("")
    }
    catch(e){
      console.error(e);
      return new Response("Error", {status: 500});
    }
  },
}

const Page = (props: PageProps<PerfilSignIn>) => {

    try {
  
        return (
          <div>
            
          </div>
        );
  
    } catch (e) {
        return (<div>Ha habido un error</div>);
    }
  
      
  };
  
  export default Page;