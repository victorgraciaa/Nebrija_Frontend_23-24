import { FunctionComponent } from "preact";

type MenuProps = {
    selected: "Posts" | "Add"
}

const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
    return(
    <div class="menu">
        <a href="/" class={selected === "Posts" ? "selected" : ""}>
        Posts
        </a>
        <br/>
        <a href="/add" class={selected === "Add" ? "selected" : ""}>
        Add
        </a>
    </div>
    )
}

export default Menu;