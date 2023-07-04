import './VideoCard.css'
import ImagenVideo from '../Card'


const VideoCard = (props) => {

    const { titulo, colorFondo } = props.datos
    const {videos, playVideo} = props
    console.log(videos)

    return <>
    {
        videos.length > 0 &&
        <section className='VideoCard'>
            <h3 className='TituloCategoria' style={{backgroundColor: colorFondo}}>{titulo}</h3>
            <div className='imagen'>
                {
                    videos.map((videos, index)=><ImagenVideo datos={videos} key={index} playVideo={playVideo}/>)
                }
            </div>
        </section>
    }
    </>
}

export default VideoCard
