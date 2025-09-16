import Footer from "@/components/footer";
import HomePrincipal from "@/components/home_principal";
import Metatags from "@/components/metatags";
import Navbar from "@/components/navbar";
import SeccionAbout from "@/components/seccion_about";
import SeccionPrincipal from "@/components/seccion_principal";


export default function Home() {
  return <>
    <head>
      <Metatags />
    </head>
    <body>
      <header>
        <Navbar />
      </header>
      <main>
        <HomePrincipal />
        <SeccionPrincipal />
        <SeccionAbout />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  </>;
}
