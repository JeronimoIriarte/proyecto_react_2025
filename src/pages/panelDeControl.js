import React, { useState, useEffect } from 'react';
import productsData from "../data/products.json";
import { Form_panelDeControl } from '@/components/PanelDeControl_page/Form_panelDeControl';
import Productos_panelDeControl from '@/components/PanelDeControl_page/Productos_panelDeControl';
import axios from 'axios';
import Metatags from '@/components/Metatags';



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
            <Metatags />
            <title>Panel de Control</title>
            <Form_panelDeControl createProduct={createProduct} updateProduct={updateProduct} setDataToEdit={setDataToEdit} dataToEdit={dataToEdit} />
            <Productos_panelDeControl handleFilterChange={handleFilterChange} deleteProduct={deleteProduct} setDataToEdit={setDataToEdit} filteredProducts={filteredProducts} isLoading={isLoading} />
        </>
    )
}
export default Crud;