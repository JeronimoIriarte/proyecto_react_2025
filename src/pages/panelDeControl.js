import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/Crud_page/CrudCard';
import productsData from "../data/products.json";
import { Form_crud } from '@/components/Crud_page/Form_crud';
import axios from 'axios';
import styles from '../styles/style_PanelDeControl/panelDeControl.module.css';


export const Crud = () => {

    const products = productsData.products;

    const [db, setdb] = useState(productsData.products);
    const [dataToEdit, setDataToEdit] = useState(null);

    const [productos] = useState(products);
    const [filteredProducts, setFilteredProducts] = useState(productos);
    const [filter, setFilter] = useState("All");

    const [isLoading, setIsLoading] = useState(false);

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
            setIsLoading(false); // Desactiva el estado de carga después de 1.5 segundos
        }, 500);
    };

    const readDb = async () => {
        const ENDPOINT = "http://localhost:5000/products"
        const response = await axios.get(ENDPOINT);
        const products = response.data;
        setdb(() => products);
    }
    useEffect(() => {
        readDb();
    }, []);

    const createProduct = async (product) => {

        product.id = String(Date.now());

        const ENDPOINT = "http://localhost:5000/products"

        const request = {
            method: "POST",
            headers: { "content-ype": "application/json" },
            data: JSON.stringify(product)
        }

        await axios(ENDPOINT, request);

        console.log(product);

        readDb();
    }

    const updateProduct = async (product) => {
        const { id } = product;

        const ENDPOINT = `http://localhost:5000/products/${id}`;

        const request = {
            method: "PUT",
            headers: { "content-type": "application/json" },
            data: JSON.stringify(product)
        }

        await axios(ENDPOINT, request);

        readDb();
    }

    const deleteProduct = async (product) => {
        const { id, title } = product;

        const isConfirmed = confirm(`¿Estás seguro de eliminar el producto: ${title}?`);

        const ENDPOINT = `http://localhost:5000/products/${id}`;

        const request = {
            method: "DELETE",
            headers: { "content-type": "application/json" }
        }

        if (isConfirmed) {
            await axios(ENDPOINT, request);
            readDb();

        } else {
            return;
        }


    }

    return (
        <>
            <Form_crud createProduct={createProduct} updateProduct={updateProduct} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit} />
            <title>Panel de Control</title>
            <favicon rel="icon" href="public\images\logo_head.png" />
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
                    {isLoading ? (
                        <div className={styles.loadingContainer}>
                            <img
                                src="/gifs/loading.gif" // Ruta del GIF de cargando
                                alt="Cargando..."
                                className={styles.loadingGif}
                            />
                        </div>
                    ) : (

                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} setDataToEdit={setDataToEdit} />
                        ))

                    )}
                </div>
            </div>
        </>
    )
}
export default Crud;