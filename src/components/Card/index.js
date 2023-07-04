import './Card.css'

const ImagenVideo = (props) => {

    const { descripcion, imagen, link, titulo, id} = props.datos

    const {playVideo} = props

    return <div className='Card' onClick={() => playVideo(id)}>
        <img src={imagen} alt={titulo} ></img>
        <div className='overlay'>
            <h2 className='titulo'>{titulo}</h2>
            <p className='descripcion'>{descripcion}</p>
        </div>
    </div>
}

export default ImagenVideo
