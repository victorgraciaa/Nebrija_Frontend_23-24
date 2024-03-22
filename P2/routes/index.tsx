import axios from "npm:axios";
import { Hero } from "../types.ts";
import Contenedor from "../components/Contenedor.tsx";

export default async function Home() {
  try {
    const response = await axios.get<Hero[]>(
      "https://supermondongo.deno.dev",
    );
    const heros = response.data;

    return (
      <div>
        <Contenedor heros={heros}/>
      </div>
    );
  } catch (error) {
    return <div>{error.message}</div>;
  }
}