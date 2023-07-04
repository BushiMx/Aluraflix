import { useState } from 'react'
import './FormCategoria.css'
import CampoTexto from '../CampoTexto'
// import OpcionesCategoria from '../ListaCategoria'
import InputColor from 'react-input-color';
import { v4 as uuidv4 } from 'uuid';
import Boton from '../Button'

const FormularioCategoria = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const { agregarCategoria} = props

    const ManejarEnvio = (e) => {
        e.preventDefault()
        let datosFormulario = {
            titulo: nombre,
            descripcion,
            colorFondo:color.hex,
            id: uuidv4()
        }
        // console.log(datosFormulario)
        agregarCategoria(datosFormulario)
    }


    // Actualizar color
    const [color, setColor] = useState({});


    return <section className='formulario'>
        <form onSubmit={ManejarEnvio}> 
            <h1>Nueva Categoria</h1>
            <CampoTexto 
                Placeholder="Nombre" 
                valor={nombre} 
                actualizarValor={actualizarNombre}/>
            <CampoTexto 
                Placeholder="Descripcion" 
                valor={descripcion} 
                actualizarValor={actualizarDescripcion}/>
            <InputColor
                // type='color'
                className='input-color'
                initialValue="#5e72e4"
                onChange={setColor}
            />
            <div className='botones'>
                <Boton titulo="Guardar" action="save"/>
                <Boton titulo="Limpiar" action="clear"/>
            </div>
        </form>
        
    </section>
}

export default FormularioCategoria