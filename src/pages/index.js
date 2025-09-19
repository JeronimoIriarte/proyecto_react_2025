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
      <body style ={{ margin: 0, 
                      padding: 0, 
                      boxSizing: 'border-box', 
                      fontFamily: 'Arial, sans-serif' }}>

    
        <header>
          <Navbar />
        </header>

        
          <SeccionPrincipal />
          <SeccionAbout />
          <SeccionProductos />
        

        <footer>
          <Footer />
        </footer>
      </body>
    </>
  );
}
