import { FunctionComponent } from "preact";
import { HeroProps } from "./HeroComponent.tsx";
import HeroComponent from "./HeroComponent.tsx";

type ContenedorProps = {
  heros: HeroProps[];
};

const Contenedor: FunctionComponent<ContenedorProps> = (props) => {
    const { heros } = props
  return (
    <>
        <h1 class="mainTitle">Héroes</h1>
        <div class="flex-row flex-around">
          {heros.map((h) => (
            <a href={`/${h.name}`}>
            <HeroComponent
              name={h.name}
              image={h.image}
              sound={h.sound}
            />
          </a>
          ))}
        </div>
    </>    
  );
};

export default Contenedor;