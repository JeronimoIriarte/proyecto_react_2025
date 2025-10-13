import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeccionPrincipal from "@/components/Home_page/Seccion_principal";
import SeccionProductos from "@/components/Home_page/Seccion_Productos";
import SeccionAbout from "@/components/Home_page/Seccion_about";
import Metatags from "@/components/Home_page/Metatags";

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
          <SeccionAbout />
          <SeccionProductos />
          <footer>
            <Footer />
          </footer>
        </div>
    </>
  );
}
