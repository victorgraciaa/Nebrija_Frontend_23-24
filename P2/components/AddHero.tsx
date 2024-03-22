import { FunctionComponent } from "preact";
import Form from "../islands/Form.tsx";

const AddHero: FunctionComponent = () => {
  return (

    <div>
    {/*    <form class="AddHero" action="/add" method="post">
      <h1>Crea un nuevo héroe: </h1>
      <input type="text" name="name" placeholder="Nombre: " />
      <input type="url" name="image" placeholder="Link de la imagen" />
      <input type="url" name="sound" placeholder="Link del sonido" />
      <button type="submit">Crear</button>
    </form>
    */}

    <Form />
    </div>
  );
};

export default AddHero;