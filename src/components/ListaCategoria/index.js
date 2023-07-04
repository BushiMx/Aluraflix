import './ListaCategoria.css'

const OpcionesCategoria = (props) => {

    const manejarValores = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-categoria">
        <select value={props.valor} onChange={manejarValores}>
            <option value="" defaultValue="" hidden>Selecciona una categoria...</option>
            {props.categoria.map((categoria, index) => <option key={index}>{categoria}</option>)}
        </select>
    </div>

}

export default OpcionesCategoria