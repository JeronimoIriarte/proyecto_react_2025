import Head from "next/head";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import Metatags from "@/components/Metatags.jsx";
import SobreNosotrosContent from "@/components/about_us_page/SobreNosotrosContent.jsx";

export default function Nosotros() {
  return (
    <>
      <Head>
        <Metatags />
        <title>Sobre Nosotros - Panozzo Indumentaria</title>
      </Head>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <SobreNosotrosContent />
        </main>
        <Footer />
      </div>
    </>
  );
}