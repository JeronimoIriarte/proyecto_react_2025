
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Metatags from "@/components/Metatags";

export default function Productos() {
  return (
    <>
      <Head>
        <Metatags />
      </Head>
        <div>
          <header>
            <Navbar />
          </header>
          <Footer />
        </div>
    </>
  );
}