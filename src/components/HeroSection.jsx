import "../styles/Hero.css";
import Navbar from "./Navbar";
function HeroSection() {
  const backgroundStyle = {
    backgroundImage: `url("https://res.cloudinary.com/dw1igjvgi/image/upload/v1726242542/SanusPRWeb/20240912_085851_khk03u.jpg")`,
    backgroundSize: "cover",
    backgroundrepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <>
      <main className="h-screen w-screen" style={backgroundStyle} >
        <Navbar />
  
        <p className="Welcome"> Bienvenido a </p>
        <p className="Sanus"> SANUS </p>
        <h2>Unimos fuerzas para transformar la salud oral en Puerto Rico.</h2>
        <button>Conocer más</button>
      </main>
    </>
  );
}

export default HeroSection;
