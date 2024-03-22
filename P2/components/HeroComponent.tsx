import { FunctionComponent } from "preact";

export type HeroProps = {
  name: string;
  image: string;
  sound: string;
};

const HeroComponent: FunctionComponent<HeroProps> = (props) => {
  const { name, image, sound } = props;
  return (
    <div class="characterContainer">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m rounded" src={image} />
      <p>
        <audio controls>
        <source src={sound} type="audio/mpeg">Sonido: </source>
        </audio>
      </p>
    </div>
  );
};

export default HeroComponent;