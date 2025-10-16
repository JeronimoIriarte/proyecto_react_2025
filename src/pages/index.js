import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeccionPrincipal from "@/components/Home_page/Header_home";
import SeccionProductos from "@/components/Home_page/Productos_home";
import SeccionComentarios from "@/components/Home_page/Comentarios_home";
import Metatags from "@/components/Home_page/Metatags_home";

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
