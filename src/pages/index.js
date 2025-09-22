import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SeccionPrincipal from "@/components/seccion_principal";
import SeccionProductos from "@/components/SeccionProductos";
import SeccionAbout from "@/components/seccion_about";
import Metatags from "@/components/metatags";

export default function Home() {
  return (
    <>
      <Head>
        <Metatags />
      </Head>
      <div className="video-background">
        <video autoPlay loop muted playsInline className="video-element">
          <source src="videos/background_jugadas.mp4" type="video/mp4" />
          <source src="videos/background_jugadas.webm" type="video/webm" />
          Tu navegador no soporta el tag de video.
        </video>
        <div>
          <header>
            <Navbar />
          </header>
          <SeccionPrincipal />
          <SeccionAbout />
          <SeccionProductos />
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
      <style jsx>{`
.video-background {
    height: 100vh;
    width: 100%;
}

.video-element {
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
    background-size: cover;
}

.content {
    position: relative;
    z-index: 1;
    color: white;
    text-align: center;
}
      `}</style>
    </>
  );
}
