import React from 'react'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import productsData from "@/data/products.json";
import styles from '@/styles/style_productos/GrillaDeProductos_productos.module.css';
import Card_productos from '@/components/Productos_page/Card_productos.jsx';


const Main_Productos = () => {

    const products = productsData.products;
    const [productos] = useState(products); // Todos los productos
    const [filteredProducts, setFilteredProducts] = useState(productos); // Productos a mostrar
    const [filter, setFilter] = useState("All"); // Filtro actual
    const [isLoading, setIsLoading] = useState(false); // Estado de carga
    const router = useRouter(); // Inicializar el router

    // useEffect para leer la URL al cargar el componente
    useEffect(() => {
        if (router.isReady) {
            const initialFilter = router.query.filtro;
            if (initialFilter) {
                // Si hay un filtro en la URL, lo aplicamos
                handleFilterChange(initialFilter);
            }
        }
    }, [router.isReady, router.query.filtro]);


    const handleFilterChange = (category) => {
        setIsLoading(true);
        setTimeout(() => {
            setFilter(category);
            if (category === "All") {
                setFilteredProducts(products);
                return setIsLoading(false);
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
            setIsLoading(false);
        }, 500);
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
                        <h3>Filtros de camisetas</h3>
                        <div className={styles.filtroBotones}>
                            <button 
                                onClick={() => handleFilterChange("All")}
                                className={filter === 'All' ? styles.active : ''}
                            >
                                Todos
                            </button>
                            <button 
                                onClick={() => handleFilterChange("Ofertas")}
                                className={filter === 'Ofertas' ? styles.active : ''}
                            >
                                Ofertas
                            </button>
                            <button 
                                onClick={() => handleFilterChange("seleccion_arg")}
                                className={filter === 'seleccion_arg' ? styles.active : ''}
                            >
                                Selección Argentina
                            </button>
                            <button 
                                onClick={() => handleFilterChange("boca")}
                                className={filter === 'boca' ? styles.active : ''}
                            >
                                Boca Juniors
                            </button>
                            <button 
                                onClick={() => handleFilterChange("river")}
                                className={filter === 'river' ? styles.active : ''}
                            >
                                River Plate
                            </button>
                            <button 
                                onClick={() => handleFilterChange("racing")}
                                className={filter === 'racing' ? styles.active : ''}
                            >
                                Racing Club
                            </button>
                            <button 
                                onClick={() => handleFilterChange("independiente")}
                                className={filter === 'independiente' ? styles.active : ''}
                            >
                                Independiente
                            </button>
                            <button 
                                onClick={() => handleFilterChange("san_lorenzo")}
                                className={filter === 'san_lorenzo' ? styles.active : ''}
                            >
                                San Lorenzo
                            </button>
                            <button 
                                onClick={() => handleFilterChange("importadas")}
                                className={filter === 'importadas' ? styles.active : ''}
                            >
                                Importadas
                            </button>
                        </div>
                    </div>
                    <div className={styles.productGrid}>
                        {isLoading ? (
                            <div className={styles.loadingContainer}>
                                <img
                                    src="/gifs/loading.gif"
                                    alt="Cargando..."
                                    className={styles.loadingGif}
                                />
                            </div>
                        ) : (
                            filteredProducts.map((producto) => (
                                <Card_productos key={producto.id} product={producto} />
                            ))
                        )}
                    </div>
                </div>
            </main>
        </>

    )
}

export default Main_Productos