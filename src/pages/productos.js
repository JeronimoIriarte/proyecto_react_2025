import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Main_Productos from "@/components/Productos_page/Main_Productos";
import Metatags from "@/components/Home_page/Metatags_home";


export default function Productos() {



  return (
    <>
      <Head>
        <title>Nuestros Productos</title>
        <Metatags />
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