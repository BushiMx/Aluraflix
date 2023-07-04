import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import Banner from './components/Banner';
import Formulario from './components/Form';
import Footer from './components/Footer';
import VideoCard from './components/VideoCard';
import ImagenVideo from './components/Card';
import FormularioCategoria from './components/FormCategoria';

function App() {

  //Listado de videos
const [videos, actualizarVideos] = useState([
  {categoria: "Front End",
  descripcion: "Afinal, o que é React JS? Neste vídeo, Vanessa Tonini e Mario Souto explicam isto para você falando sobre como esta ferramenta surgiu, para que ela serve, quais são suas aplicações e relação com outras ferramentas e como começar a trabalhar com ele. ",
  imagen:"https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Amazon.png",
  link:"https://www.youtube.com/watch?v=6IuQUgeDPg0",
  id: uuidv4(),
  seguridad: "123",
  titulo:"O que é React JS? "}
])

// Mostrar formulario de videos
  const [mostrarFormulario, actualizarEstado] = useState(false)

  const cambioEstado = () =>{
    actualizarEstado(!mostrarFormulario)
  }

// Mostrar formulario de categoria
const [mostrarFormularioCategoria, actualizarEstadoCategoria] = useState(false)

const cambioEstadoCategoria = () =>{
  actualizarEstadoCategoria(!mostrarFormularioCategoria)
}


// Lista de categorias de videos
  const [categorias, actualizarCategoria] = useState([
    {
      titulo: "Front End",
      colorFondo: "var(--frontEnd)",
      id: uuidv4(),
    },
    {
      titulo: "Back End",
      colorFondo: "var(--backEnd)",
      id: uuidv4(),
    },
    {
      titulo: "Mobile",
      colorFondo: "#FFBA05",
      id: uuidv4(),
    },
    {
      titulo: "Infraestructura",
      colorFondo: "#9CD33B",
      id: uuidv4(),
    },
    {
      titulo: "Data Science",
      colorFondo: "#9CD33B",
      id: uuidv4(),
    },
    {
      titulo: "Design & UX",
      colorFondo:"#DC6EBE",
      id: uuidv4(),
    },
    {
      titulo: "Marketing Digital",
      colorFondo:"#6B5BE2",
      id: uuidv4(),
    },
    {
      titulo: "Gestion e Innovacion",
      colorFondo: "#FF8C2A",
      id: uuidv4(),
    }
  ])
// // Lista de categorias de videos
//   const categorias=[
//     {
//       titulo: "Front End",
//       colorFondo: "var(--frontEnd)",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Back End",
//       colorFondo: "var(--backEnd)",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Mobile",
//       colorFondo: "#FFBA05",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Infraestructura",
//       colorFondo: "#9CD33B",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Data Science",
//       colorFondo: "#9CD33B",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Design & UX",
//       colorFondo:"#DC6EBE",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Marketing Digital",
//       colorFondo:"#6B5BE2",
//       id: uuidv4(),
//     },
//     {
//       titulo: "Gestion e Innovacion",
//       colorFondo: "#FF8C2A",
//       id: uuidv4(),
//     }
//   ]

// Agregar video

  const agregarVideo = (video) => {
    actualizarVideos([...videos, video])
  }

//Agregar Categoria

  const agregarCategoria = (nuevaCategoria) => {
    actualizarCategoria([...categorias, nuevaCategoria])
    
  }

  return (
    <div>
      <Header cambioEstado={cambioEstado}/>
      <Banner/>
      
      {mostrarFormulario === true ? <Formulario 
      categorias={categorias.map((categoria)=>categoria.titulo)} 
      agregarVideo={agregarVideo} cambioEstadoCategoria={cambioEstadoCategoria}/> : <div></div>}
      
      
      {mostrarFormularioCategoria === true ? <FormularioCategoria 
      agregarCategoria={agregarCategoria}/> : <div></div>}
      
      {/* <FormularioCategoria agregarCategoria={agregarCategoria}/> */}
      
      {categorias.map((categoria) => <VideoCard 
      datos={categoria} 
      key={categoria.titulo}
      videos={videos.filter(ImagenVideo => ImagenVideo.categoria === categoria.titulo)}
      />)}
      
      <Footer/>
    </div>
    
  );
}

export default App;
