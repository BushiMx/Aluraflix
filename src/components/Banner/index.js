import './Banner.css';
import ReactPlayer from 'react-player'

const Banner = (props) => {
    
    const { descripcion, link, titulo} = props.playVideo

    return <div className='banner'>
        <img src="./img/fondo.png" alt="Banner" className='banner'/>;
        <h3 className='titulo_banner' >{titulo}</h3>
        <p className='descripcion_banner'>{descripcion}</p>
        <div className ='player'>
            <ReactPlayer url={link} 
            controls
            />
        </div>
    </div>
}

export default Banner