import React from 'react'
import { useState } from "react";
import ProductCard from "@/components/Productos_page/Card_productos";
import productsData from "../../data/products.json";
import styles from '../../styles/style_productos/Productos.module.css';


const Main_Productos = () => {

    const products = productsData.products;
    const [productos] = useState(products); // Todos los productos
    const [filteredProducts, setFilteredProducts] = useState(productos); // Productos a mostrar
    const [filter, setFilter] = useState("All"); // Filtro actual

    const handleFilterChange = (category) => {
        setFilter(category);
        if (category === "All") {
            setFilteredProducts(products);
            return;
        }
        if (category === "Ofertas") {
            const ofertas = products.filter(
                (product) => product.onSale === true
            );
            setFilteredProducts(ofertas);
        } else {
            const filtered = products.filter(
                (product) => product.category === category
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <h1 className={styles.heroTitle}>Colección Exclusiva</h1>
                <p className={styles.heroSubtitle}>Descubre Nuestras Camisetas más exclusivas de la Argentina</p>
            </section>
            <main className={styles.main}>
                <h2 className={styles.pageTitle}>Catálogo de Productos</h2>
                <div className={styles.contenedorDeProductos}>
                    <div className={styles.filtro}>
                        <h3>Filtro de camisetas</h3>
                        <div className={styles.filtroBotones}>
                            <button onClick={() => handleFilterChange("All")}>
                                Todos
                            </button>
                            <button onClick={() => handleFilterChange("Ofertas")}>
                                Ofertas
                            </button>
                            <button onClick={() => handleFilterChange("seleccion_arg")}>
                                Selección Argentina
                            </button>
                            <button onClick={() => handleFilterChange("boca")}>
                                Boca Juniors
                            </button>
                            <button onClick={() => handleFilterChange("river")}>
                                River Plate
                            </button>
                            <button onClick={() => handleFilterChange("racing")}>
                                Racing Club
                            </button>
                            <button onClick={() => handleFilterChange("independiente")}>
                                Independiente
                            </button>
                            <button onClick={() => handleFilterChange("san_lorenzo")}>
                                San Lorenzo
                            </button>
                            <button onClick={() => handleFilterChange("importadas")}>
                                Importadas
                            </button>
                        </div>
                    </div>
                    <div className={styles.productGrid}>
                        {filteredProducts.map((producto) => (
                            <ProductCard key={producto.id} product={producto} />
                        ))}
                    </div>
                </div>
            </main>
        </>

    )
}

export default Main_Productos