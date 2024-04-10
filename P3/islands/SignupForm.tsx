import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { JSX } from "preact";

export const Form: FunctionComponent = () => {
    const [error, setError] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [sex, setSex] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
  
    const submitHandler = async (
      e: JSX.TargetedEvent<HTMLFormElement, Event>,
    ) => {
      e.preventDefault();
      const errorMsg: string[] = [];
      
      if (name === "") {
        errorMsg.push("You must provide a name");
      }
      if (password === "") {
        errorMsg.push("You must provide a password");
      }
      if (age === 0) {
        errorMsg.push("You must provide an age");
      }
      if (sex === "") {
        errorMsg.push("You must provide the sex");
      }
      if (description === "") {
        errorMsg.push("You must provide a description");
      }
      if (hobbies.length === 0) {
        errorMsg.push("You must provide at least one hobby");
      }
      if (photo === "") {
        errorMsg.push("You must provide a photo");
      }

  
      if (errorMsg.length > 0){
        setError(errorMsg.join(" | "));
      }
      else {
        setError("");
        e.currentTarget.submit();
      }
    };    
  
    return (
      <div class="signupForm">

        <h1>Introduce los datos de tu nuevo perfil</h1>
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
            <label for="password">Contraseña: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setPassword(e.currentTarget.value)}
              type="password"
              id="password"
              name="password"
            />
          </div>

          <div>
            <label for="age">Edad: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setAge(parseInt(e.currentTarget.value))}
              type="number"
              id="age"
              name="age"
            />
          </div>

          <div>
            <label for="sex">Sexo: </label>
          </div>
          <div>
            <select 
              name="sex"
              id="sex"
              onFocus={(e) => setError("")}
              onInput={(e) => setSex(e.currentTarget.value)}
            >
            <option value="">Selecciona una opción</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
            </select>
          </div>

          <div>
            <label for="description">Descripción: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setDescription(e.currentTarget.value)}
              type="text"
              id="description"
              name="description"
            />
          </div>

          <div>
            <label for="hobbies">Aficiones: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setHobbies(e.currentTarget.value.split(","))}
              type="text"
              id="hobbies"
              name="hobbies"
            />
          </div>

          <div>
            <label for="photo">URL de tu foto de perfil: </label>
          </div>
          <div>
            <input
              onFocus={(e) => setError("")}
              onInput={(e) => setPhoto(e.currentTarget.value)}
              type="text"
              id="photo"
              name="photo"
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
                setPassword("");
                setAge(0);
                setSex("");
                setDescription("");
                setHobbies([]);
                setPhoto("");                
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