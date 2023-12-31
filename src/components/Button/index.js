// import styled from 'styled-components';

// const Boton = styled.button`
//   color: var(--white);
//   border: 1px solid var(--white);
//   background: var(--black);
//   box-sizing: border-box;
//   cursor: pointer;
//   padding: 16px 24px;
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   outline: none;
//   border-radius: 5px;
//   text-decoration: none;
//   display: inline-block;
//   transition: opacity .3s;

//   &:hover,
//   &:focus {
//     opacity: .5;
//   }
// `;

// export default Boton;


// import { colors } from "@mui/material"
import "./Button.css"
import { useState } from "react"


const Boton = (props) => {

    const onSubmit = () => {
        switch (accion){
            case "agregarVideo":
                props.cambioEstado()
                break;
            case "save":
                // console.log("Guardar");
                break;
            case "clear":
                console.log("Limpiar");
                break;
            case "newCategory":
                props.cambioEstadoCategoria()
                break;
            default:
                console.log("default", accion)
        }
    }

    const accion = props.action


    return <button className="boton" onClick={onSubmit}>{props.titulo}</button>
}

export default Boton
