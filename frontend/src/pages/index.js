import Head from "next/head";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import SeccionPrincipal from "@/components/Home_page/Header_home.jsx";
import SeccionProductos from "@/components/Home_page/Productos_home.jsx";
import SeccionComentarios from "@/components/Home_page/Comentarios_home.jsx";
import Metatags from "@/components/Metatags.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <Metatags />
        <title>Panozzo Indumentaria</title>
      </Head>
        <div>
          <header>
            <Navbar />
          </header>
          <SeccionPrincipal />
          <SeccionProductos />
          <SeccionComentarios />
          <footer>
            <Footer />
          </footer>
        </div>
    </>
  );
}
