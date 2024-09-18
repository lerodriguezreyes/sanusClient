import DirectoraMensaje from "../components/DirectoraMensaje.jsx"
import Navbar from "../components/Navbar"
function About() {
  return (
    <div>
      <Navbar />
      <img src="https://res.cloudinary.com/dw1igjvgi/image/upload/v1726065085/SanusPRWeb/draPagan_wwdxyr.png" alt="Imagen de Dra. Elaine Pagán."/> 
      <DirectoraMensaje />
      <button>Regresar al inicio </button>
    </div>
  )
}

export default About
