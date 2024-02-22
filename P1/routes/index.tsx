import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext) => {
    const x = Math.floor(Math.random()*188)+1
    const lesson = await Axios.get<string>(
      `https://learnyourlesson.deno.dev/${x}`,
    );

    return ctx.render(lesson.data);
  },
  
};

export default function Home(props: PageProps<string>) {
  const lesson = props.data

  return (
    <>

      <div class="lesson">
        <i>{lesson}</i>
      </div>

      <button type="submit" class="boton">
        <a href="/">CAMBIA LA FRASE</a>
      </button>      

      <img src="https://static.vecteezy.com/system/resources/previews/018/871/789/original/african-elephant-on-transparent-background-png.png"
      class="elefante"
      alt="Elefante"
      />

      <img src="https://images.creativefabrica.com/products/thumbnails/2023/09/26/0wnKnBzGQ/2VwBsZV7Ts6YgR4irHoxX90xqtr.png"
      class="circulo"
      alt="Circulo"
      />

      <video src="https://www.youtube.com/embed/YDwiDkxjRgQ?si=f8zw_N7JwzUBcv5P" width="640" height="360" class="video" autoplay loop>
    
      </video>

      <iframe
        width="384"
        height="216"
        src="https://www.youtube.com/embed/YDwiDkxjRgQ?controls=0&autoplay=1"
        title="Pan cayendo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        class="video"
      ></iframe>

      <a href="https://www.youtube.com/@AlbertoValeroGomez" target="_blank">
        <img src="https://miguelgomezsa.com/files/blog/aprender-a-programar-desde-cero.jpg"
          class="anuncio"
          alt="anuncio"
        />
      </a>

      <button class="botonColores">¡Pulsa!</button>

    </>
  );
}
