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
  titulo:"O que é React JS? "
  },
  {
    id: uuidv4(),
    titulo: "Quais as melhores práticas com React?",
    descripcion: "Recebemos o @Dev Soutinho nesse Hipsters Ponto Tube para falar sobre as melhores práticas com React e como você pode aproveitar melhor as possibilidades dessa tecnologia no cenário atual.",
    link: "https://www.youtube.com/watch?v=k77WZrvuDQU",
    categoria: "Front End",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg"
  },
  {
    id: uuidv4(),
    titulo: "O que faz uma desenvolvedora front-end?",
    descripcion: "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!",
    link: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
    categoria: "Front End",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Bic.jpg"
  },
  {
    id: uuidv4(),
    titulo: "O que é REST?",
    link: "https://www.youtube.com/watch?v=weQ8ssA6iBU",
    categoria: "Back End",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Burger-King.jpg"
  },
  {
    id: uuidv4(),
    titulo: "NGINX: Servidor Web, Proxy Reverso e API Gateway",
    descripcion: "Gabs Ferreira conversou com o @Dias de Dev, que é instrutor aqui da Alura e criou  nosso novo curso de NGINX",
    link: "https://www.youtube.com/watch?v=I4oydqod7j0",
    categoria: "Back End",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Apple.jpg"
  },
  {
    id: uuidv4(),
    titulo: "Evolução do C++",
    descripcion: "O que mudou durante a evolução da linguagem C e quais são, de fato, as novidades do C++ moderno? Nosso instrutor, Vinicius Dias, explica nesse vídeo esse processo de evolução e que novidades surgiram.",
    link: "https://www.youtube.com/watch?v=_n5hLYGjdfk",
    categoria: "Back End",
    imagen:"https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Amazon.png",
  },
  {
    id: uuidv4(),
    titulo: "Java, Spring, Microserviços e vagas na Hotmart",
    descripcion: "Nessa live, Paulo Silveira conversa sobre a evolução do Java em microsserviços e sobre o caso da Hotmart com Marco Aurélio Ribeiro, especialista em desenvolvimento com 17 anos de carreira e trooper da Hotmart há mais de seis anos.",
    link: "https://www.youtube.com/watch?v=f46tw7lOt_0",
    categoria: "Back End",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg"
  },
  {
    id: uuidv4(),
    titulo: "O que é Data Science?",
    descripcion: "Python é o novo Excel? Para que serve o R, Pandas e Jupyter? E qual é, afinal, a diferença entre o Data Science, Business Intelligence e Machine Learning? Descubra no primeiro episódio de Hipsters Ponto Tube!",
    link: "https://www.youtube.com/watch?v=5b9Z8toVaAU",
    categoria: "Data Science",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Bic.jpg"
  },
  {
    id: uuidv4(),
    titulo: "Aprenda tudo sobre Data Science, seus primeiros passos",
    descripcion: "Você é entusiasta de Inteligência artificial, é do mundo Python, de BI etc e quer aprender sobre Data Science? Preparamos este curso pra você!",
    link: "https://www.youtube.com/watch?v=IQdISZCosAE",
    categoria: "Data Science",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Burger-King.jpg"
  },
  {
    id: uuidv4(),
    titulo: "Quais as profissões em Ciência de Dados? com Mikaeri Ohana",
    descripcion: "Quer saber qual carreira seguir na área de Ciência de Dados? A Mikaeri Ohana, especialista em Data Science, te ajuda a descobrir alguns caminhos para mergulhar nessa profissão.",
    link: "https://www.youtube.com/watch?v=5CHLH9LU1Uc",
    categoria: "Data Science",
    imagen:"https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Amazon.png",
  },
  {
    id: uuidv4(),
    titulo: "Aprenda a transformar design em código com o Figma",
    descripcion: "A Rafaella Ballerini, instrutora de Front-End na Alura, vem trazer várias dicas pra você transformar o design em código. Aprenda como exportar imagens, ícones e inspecionar os elementos direto do Figma.",
    link: "https://www.youtube.com/watch?v=sup2hlWm5yE",
    categoria: "Design & UX",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg"
  },
  {
    id: uuidv4(),
    titulo: "Qual é a diferença entre back-end e front-end?",
    descripcion: "Afinal, existe diferença entre back-end e front-end? Nesse Alura+, o nosso instrutor Vinícius Dias vai responder a essa questão tão recorrente no mundo do desenvolvimento.",
    link: "https://www.youtube.com/watch?v=a-l4z6V2yXA",
    categoria: "Infraestructura",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Bic.jpg"
  },
  {
    id: uuidv4(),
    titulo: "Introdução ao Postman",
    descripcion: "As APIs são muito utilizadas para integrações de sistemas diversos. Mas, como fazer testes com elas sem utilizar um navegador e verificar seu retorno? O Vinicius Dias explica neste vídeo utilizando a ferramenta Postman.",
    link: "https://www.youtube.com/watch?v=op81bMbgZXs",
    categoria: "Infraestructura",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Burger-King.jpg"
  },
  {
    id: uuidv4(),
    titulo: "O que é ORM?",
    descripcion: "Afinal, o que é, como funciona e para que serve um ORM? O instrutor Guilherme Lima explica neste Alura+ com exemplos práticos e simplificados.",
    link: "https://www.youtube.com/watch?v=x39vqeBTUmE",
    categoria: "Infraestructura",
    imagen:"https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Amazon.png",
  },
  {
    id: uuidv4(),
    titulo: "O que é Deep Learning?",
    descripcion: "Afinal, o que é Deep Learning e onde se aplica? O Gui Silveira explica neste vídeo além de outros conceitos que rodeiam este tema como as redes neurais densas, estimadores, classificadores e mais.",
    link: "https://www.youtube.com/watch?v=kryIBKPVZ7A",
    categoria: "Infraestructura",
    imagen: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Adidas.jpg"
  }
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

// Agregar video

  const agregarVideo = (video) => {
    actualizarVideos([...videos, video])
  }

//Agregar Categoria

  const agregarCategoria = (nuevaCategoria) => {
    actualizarCategoria([...categorias, nuevaCategoria])
    
  }

  //Reproductor de video
  const [reproducirVideo, seleccionarVideo] = useState([videos[0]])
  
  // const [reproducirVideo, seleccionarVideo] = useState([{
  //   "titulo": "Quais as melhores práticas com React?",
  //   "descripcion": "Recebemos o @Dev Soutinho nesse Hipsters Ponto Tube para falar sobre as melhores práticas com React e como você pode aproveitar melhor as possibilidades dessa tecnologia no cenário atual.",
  //   "link": "https://www.youtube.com/watch?v=k77WZrvuDQU"
  // }])
  
  const playVideo = (id) => {
    let video = videos.filter((videos) => videos.id === id)
    seleccionarVideo(video)
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
    }

  return (
    <div>
      <Header cambioEstado={cambioEstado}/>
      {/* <Banner playVideo={videos[0]}/> */}
      <Banner playVideo={reproducirVideo[0]}/>
      
      {mostrarFormulario === true ? <Formulario 
      categorias={categorias.map((categoria)=>categoria.titulo)} 
      agregarVideo={agregarVideo} cambioEstadoCategoria={cambioEstadoCategoria}/> : <div></div>}
      
      
      {mostrarFormularioCategoria === true ? <FormularioCategoria 
      agregarCategoria={agregarCategoria}/> : <div></div>}
      
      {categorias.map((categoria) => <VideoCard 
      playVideo={playVideo}
      datos={categoria} 
      key={categoria.titulo}
      videos={videos.filter(ImagenVideo => ImagenVideo.categoria === categoria.titulo)}
      />)}
      
      <Footer/>
    </div>
    
  );
}

export default App;
