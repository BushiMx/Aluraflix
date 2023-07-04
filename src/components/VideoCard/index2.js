import './VideoCard.css'
import ImagenVideo from '../Card'
//Carousel
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
//CSS del carousel
// Theme
import '@splidejs/react-splide/css/sea-green';


const VideoCard = (props) => {

    const { titulo, colorFondo } = props.datos
    const {videos, playVideo} = props
    

    return <>
    {
        videos.length > 0 &&
        <section className='VideoCard'>
            <h3 className='TituloCategoria' style={{backgroundColor: colorFondo}}>{titulo}</h3>
            {/* <div className='imagen'>
                {
                    videos.map((videos, index)=><ImagenVideo datos={videos} key={index} playVideo={playVideo}/>)
                }
            </div> */}
            
            
        <Splide aria-label="My Favorite Images"
        options={ {
          rewind: true,
          width : '100%',
          height: 300,
          perPage: 2,
          gap   : '1rem',
          isNavigation: true
        } }>
        
            <SplideTrack className='slide'>
            {/* <SplideSlide> */}
                {
                    videos.map((videos, index)=><ImagenVideo datos={videos} key={index} playVideo={playVideo}/>)
                }
            {/* </SplideSlide> */}
            </SplideTrack>
        
      </Splide>
      

        </section>
    }
    </>
}

export default VideoCard
