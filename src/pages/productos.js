import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Metatags from "@/components/Metatags";
import ProductCard from "@/components/ProductCard";
import productsData from "../data/products.json";
import styles from '../styles/Productos.module.css';

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
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <h1 className={styles.heroTitle}>Colección Exclusiva</h1>
          <p className={styles.heroSubtitle}>Descubre Nuestras Camisetas más exclusivas de la Argentina</p>
        </section>
        
        <main className={styles.main}>
          <h2 className={styles.pageTitle}>Catálogo de Productos</h2>
          
          <div className={styles.productGrid}>
            {productsData.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}