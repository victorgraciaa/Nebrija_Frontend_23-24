import { FunctionComponent } from "preact";

export type PerfilProps = {
    name: string;
    password: string;
    age: number;
    sex: string;
    description: string;
    hobbies: string[];
    photo: string;
    comments: string[];
};

const PerfilCortoComponent: FunctionComponent<PerfilProps> = (props) => {
    const { name, password, age, sex, description, hobbies, photo, comments } = props;
    return(
        <div class="perfil">
            <img class="perfil-img" src={photo}/>

            <div class="perfil-info">
                <h2 class="">{name}</h2>
                <p>{age}</p>
                <p>{sex}</p>                
            </div>

            
        </div>
    )
}

export default PerfilCortoComponent;