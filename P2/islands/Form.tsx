import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
    const [error, setError] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [sound, setSound] = useState<string>("");
    const [creator, setCreator] = useState<string>("");
  
    const submitHandler = async (
      e: JSX.TargetedEvent<HTMLFormElement, Event>,
    ) => {
      e.preventDefault();
      const errorMsg: string[] = [];
      
      if (name === "") {
        errorMsg.push("You must provide a name");
      }
      if (image === "") {
        errorMsg.push("You must provide an URL for the image");
      }
      if (sound === "") {
        errorMsg.push("You must provide an URL for the sound");
      }
      if (creator === "") {
        errorMsg.push("You must provide a creator");
      }
  
      if (errorMsg.length > 0){
        setError(errorMsg.join(" | "));
      }
      else {
        setError("");
        console.log("DATOS", name, image, sound, creator);
        e.currentTarget.submit();
      }
    };    
  
    return (
      <div class="form">
        <h1>Introduce los datos de tu héroe</h1>
        <form
          action="/add"
          method="POST"
          onSubmit={submitHandler}
        >
          <div>
            <label for="name">Nombre: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setName(e.currentTarget.value)}
              type="text"
              id="name"
              name="name"
            />
          </div>
  
          <div>
            <label for="imagen">URL de la imagen: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setImage(e.currentTarget.value)}
              type="text"
              id="imagen"
              name="imagen"
            />
          </div>
  
          <div>
            <label for="sonido">URL del sonido: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              type="text"
              id="sonido"
              name="sonido"
              onInput={(e) => setSound(e.currentTarget.value)}
            />
          </div>

          <div>
            <label for="creador">Creador: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              type="text"
              id="creador"
              name="creador"
              onInput={(e) => setCreator(e.currentTarget.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={error !== ""}
              class="btn"
            >
              Submit
            </button>
          </div>
          <div>
            <button
              type="reset"
              class="reset"
              onClick={(e) => {
                setName("");
                setImage("");
                setSound("");
                setCreator("");
                setError("");
              }}
            >
              Reset
            </button>
          </div>
          {error !== "" && <div class="span-2 error">{error}</div>}
        </form>
      </div>
    );
  };

export default Form;