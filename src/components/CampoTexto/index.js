// import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {
    
    const {type = "text"} = props

    const manejarValores = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className='campo_texto'>
        {/* <label>{props.Titulo}</label> */}
        <input 
            autoComplete='none' 
            placeholder={props.Placeholder}
            value={props.valor}
            onChange={manejarValores}
            type={type}
        />
    </div>
}

export default CampoTexto