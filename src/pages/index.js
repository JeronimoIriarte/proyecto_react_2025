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

      <div style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        backgroundColor: "#f4f4f4",
        color: "#333"
      }}>
        <header>
          <Navbar />
        </header>

        <main>
          <SeccionPrincipal />
          <SeccionProductos />
          <SeccionAbout />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
