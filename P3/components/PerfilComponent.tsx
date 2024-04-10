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

const PerfilComponent: FunctionComponent<PerfilProps> = (props) => {
    const { name, password, age, sex, description, hobbies, photo, comments } = props;
    return(
        <div class="perfil">
            <img class="perfil-img" src={photo}/>

            <div class="perfil-info">
                <h2 class="">{name}</h2>
                <p>{age}</p>
                <p>{sex}</p>
                <p>{description}</p>
                <ul>
                    {hobbies.map((hobbie) => (
                        <li>{hobbie}</li>
                    ))}
                </ul>
                <ul>
                    {comments.map((comment) => (
                        <li>{comment}</li>
                    ))}
                </ul>
            </div>

            
        </div>
    )
}

export default PerfilComponent;