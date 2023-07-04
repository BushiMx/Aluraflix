import { useState } from 'react'
import './Form.css'
import CampoTexto from '../CampoTexto'
import OpcionesCategoria from '../ListaCategoria'
import Boton from '../Button'
import { v4 as uuid } from 'uuid'

const Formulario = (props) => {

    const [titulo, actualizarTitulo] = useState("")
    const [linkVideo, actualizarLink] = useState("")
    const [linkImagen, actualizarImagen] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")


    const { agregarVideo} = props

    const ManejarEnvio = (e) => {
        e.preventDefault()
        let datosFormulario = {
            titulo: titulo,
            link: linkVideo,
            imagen: linkImagen,
            categoria: categoria,
            descripcion: descripcion,
            id: uuid()
        }
        agregarVideo(datosFormulario)
    }

    return <section className='formulario'>
        <form onSubmit={ManejarEnvio}> 
            <h1>Nuevo video</h1>
            <CampoTexto 
                Placeholder="Titulo del video" 
                valor={titulo} 
                actualizarValor={actualizarTitulo}/>
            <CampoTexto 
                Placeholder="Link del video" 
                valor={linkVideo}
                actualizarValor={actualizarLink}/>
            <CampoTexto 
                Placeholder="Link de la imagen del video" 
                valor={linkImagen} 
                actualizarValor={actualizarImagen}/>
            <OpcionesCategoria
                valor={categoria} 
                actualizarValor={actualizarCategoria}
                categoria={props.categorias}
                />
            <CampoTexto 
                Placeholder="Descripcion" 
                valor={descripcion} 
                actualizarValor={actualizarDescripcion}/>
            <div className='botones'>
                <Boton titulo="Guardar" action="save"/>
                <Boton titulo="Limpiar" action="clear"/>
                <Boton titulo="Nueva Categoria" action="newCategory" cambioEstadoCategoria={props.cambioEstadoCategoria}/>
            </div>
        </form>
        
    </section>
}

export default Formulario