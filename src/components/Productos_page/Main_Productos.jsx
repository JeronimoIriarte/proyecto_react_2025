import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from '@/styles/style_productos/GrillaDeProductos_productos.module.css';
import Card_productos from '@/components/Productos_page/Card_productos.jsx';

const Main_Productos = () => {

    // Estados para los datos del servidor
    const [products, setProducts] = useState([]); // Guardamos TODOS los productos aquí
    const [filteredProducts, setFilteredProducts] = useState([]); // Guardamos los que se ven en pantalla
    const [filter, setFilter] = useState("All");
    const [isLoading, setIsLoading] = useState(true);
    
    const router = useRouter();

    // 1. CARGAR PRODUCTOS DEL BACKEND
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Petición al backend real
                const response = await axios.get("http://localhost:5000/products");
                const data = response.data;
                
                setProducts(data); // Guardamos la "copia maestra" de los datos

                // Si viene con un filtro en la URL (ej: desde el Home), lo aplicamos
                if (router.isReady && router.query.filtro) {
                    const category = router.query.filtro;
                    setFilter(category);
                    applyFilter(category, data); // Filtramos usando los datos recién llegados
                } else {
                    setFilteredProducts(data); // Si no hay filtro, mostramos todo
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Error cargando productos:", error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [router.isReady, router.query.filtro]); // Se ejecuta al cargar o si cambia el filtro de URL


    // Función auxiliar para filtrar los datos (sin delay)
    const applyFilter = (category, dataOrigin) => {
        let result = [];
        if (category === "All") {
            result = dataOrigin;
        } else if (category === "Ofertas") {
            result = dataOrigin.filter((product) => product.onSale === true);
        } else {
            result = dataOrigin.filter((product) => product.category === category);
        }
        setFilteredProducts(result);
        setIsLoading(false);
    };

    // 2. MANEJAR CLIC EN BOTONES DE FILTRO (Con delay visual)
    const handleFilterChange = (category) => {
        setIsLoading(true);
        setFilter(category);
        
        // Mantenemos tu efecto de carga de 0.5s
        setTimeout(() => {
            applyFilter(category, products);
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