import "./Header.css"
import Boton from "../Button"
import logo from '../../logo.png'

function Header(props) {

    return <header className="header">
        <img src={logo} alt='AluraFlix'/>
        <Boton titulo="Nuevo video" action="agregarVideo" cambioEstado={props.cambioEstado}/>
    </header>
}

export default Header