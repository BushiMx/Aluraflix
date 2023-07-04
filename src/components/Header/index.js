import "./Header.css"
import Boton from "../Button"

function Header(props) {

    return <header className="header">
        <img src='../img/logo.png' alt='AluraFlix'/>
        <Boton titulo="Nuevo video" action="agregarVideo" cambioEstado={props.cambioEstado}/>
    </header>
}

export default Header