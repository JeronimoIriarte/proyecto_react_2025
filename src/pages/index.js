import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SeccionPrincipal from "@/components/Seccion_principal";
import SeccionProductos from "@/components/Seccion_Productos";
import SeccionAbout from "@/components/Seccion_about";
import Metatags from "@/components/Metatags";

export default function Home() {
  return (
    <>
      <Head>
        <Metatags />
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
