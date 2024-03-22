const Page = () => {
    return(
        <div class="layout">
            <div class="header">
                <a href="/agendacsr">Agenda Client Side</a>
                <a href="/agendassr">Agenda Server Side</a>
            </div>

            <h1>My Agenda</h1>
            <div class="agendaForm">
                <h2>Add new contact</h2>
                <input type="text" placeholder="Name" value=""/>
                <input type="email" placeholder="Email" value=""/>
                <button>Add contact</button>
                </div>
        </div>
    )
}

export default Page;