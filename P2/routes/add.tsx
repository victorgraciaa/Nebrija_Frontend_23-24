import Axios from "npm:axios";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Hero } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";
import AddHero from "../components/AddHero.tsx";
import axios from "npm:axios";

const Page = async (props: PageProps<Hero>) => {

    try {
      const {data} = await axios.post(
        "https://supermondongo.deno.dev/",
        {
          name: "",
          image: "",
          sound: ""
        }
      )

      return (
        <div>
          <AddHero/>
        </div>
        
      );

  } catch (e) {
      return (<div>Ha habido un error</div>);
  }

    
};

export default Page;
