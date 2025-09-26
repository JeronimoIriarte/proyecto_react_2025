// pages/contacto.js
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeccionContacto from "@/components/SeccionContacto";

export default function Contacto() {
  return (
    <>
      <Navbar />
      <div className="video-container">
        <video autoPlay loop muted playsInline className="video-element">
          <source src="videos/background_jugadas.mp4" type="video/mp4" />
          <source src="videos/background_jugadas.webm" type="video/webm" />
          Tu navegador no soporta el tag de video.
        </video>
        <div className="content">
          <SeccionContacto />
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 80vh; /* ocupa el espacio entre navbar y footer */
          overflow: hidden;
        }

        .video-element {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: -1; /* fondo */
        }

        .content {
          position: relative;
          z-index: 1;
          color: white;
          text-align: center;
          padding: 2rem;
        }
      `}</style>
    </>
  );
}
