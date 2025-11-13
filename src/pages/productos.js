import Head from "next/head";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Main_Productos from "@/components/Productos_page/Main_Productos.jsx";
import Metatags from "@/components/Metatags.jsx";


export default function Productos() {



  return (
    <>
      <Head>
        <Metatags />
        <title>Nuestros Productos</title>
      </Head>
      <div>
        <header>
          <Navbar />
        </header>
        <Main_Productos/>
        <Footer />
      </div>
    </>
  );
}