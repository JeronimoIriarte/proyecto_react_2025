import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Metatags from "@/components/Metatags";
import SobreNosotrosContent from "@/components/about_us_page/SobreNosotrosContent";

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