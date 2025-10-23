import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Metatags from "@/components/Metatags";
import ShoppingCart from "@/components/ShoppingCart_page/ShoppingCart";
import SimulacionCompra from "@/components/ShoppingCart_page/SimulacionCompra";
import productStyles from '@/styles/style_productos/GrillaDeProductos_productos.module.css';
import cartStyles from '@/styles/style_productos/ShoppingCart_productos.module.css';

export default function Cart() {
  return (
    <>
      <Head>
        <title>Carrito de Compras</title>
        <Metatags />
      </Head>
      <div>
        <header>
          <Navbar />
        </header>

        <section className={cartStyles.hero}>
          <div className={productStyles.heroOverlay}></div>
          <h1 className={productStyles.heroTitle}>Mi Carrito</h1>
          <p className={productStyles.heroSubtitle}>Revisa tus productos y finaliza tu compra</p>
        </section>
        <main className={productStyles.main}>
          <h2 className={productStyles.pageTitle}>Resumen de tu pedido</h2>
          <ShoppingCart />
          <SimulacionCompra />
        </main>

        <Footer />
      </div>
    </>

  );
}