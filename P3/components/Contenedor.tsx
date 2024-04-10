import { FunctionComponent } from "preact";
import { PerfilProps } from "./PerfilComponent.tsx";
import PerfilCortoComponent from "./PerfilCortoComponent.tsx";

type ContenedorProps = {
  perfiles: PerfilProps[];
};

const Contenedor: FunctionComponent<ContenedorProps> = (props) => {
    const { perfiles } = props
  return (
    <>
        <h1 class="mainTitle">Perfiles</h1>
        <div class="">
          {perfiles.map((p) => (
            <a href={`/${p.name}`}>
            <PerfilCortoComponent
                name={p.name}
                password={p.password}
                age={p.age}
                sex={p.sex}
                description={p.description}
                hobbies={p.hobbies}
                photo={p.photo}
                comments={p.comments}                
            />
          </a>
          ))}
        </div>
    </>    
  );
};

export default Contenedor;