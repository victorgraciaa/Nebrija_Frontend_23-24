import axios from "npm:axios";
import { Perfil } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";


export default async function Home() {
  try {
    const response = await axios.get<Perfil[]>(
      "https://lovers.deno.dev/",
    );
    const perfiles = response.data;

    return (
      <div>
        <Contenedor perfiles={perfiles}/>
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}
