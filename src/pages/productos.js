import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main_Productos from "@/components/Productos_page/Main_Productos";
import Metatags from "@/components/Metatags";


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