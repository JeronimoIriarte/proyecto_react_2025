import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/Crud_page/CrudCard';
import productsData from "../data/products.json";
import { Form_crud } from '@/components/Crud_page/Form_crud';
import axios from 'axios';
import styles from '../styles/style_PanelDeControl/panelDeControl.module.css';


export const Crud = () => {

    const [db, setdb] = useState(productsData.products);
    const [dataToEdit, setDataToEdit] = useState(null);

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
            <div className={styles.contenedor_Principal}>
                <div className={styles.contenedor_filtro}>

                </div>
                <div className={styles.contenedor_productos}>
                    {db.map((product) => (
                        <ProductCard key={product.id} product={product} deleteProduct={deleteProduct} setDataToEdit={setDataToEdit} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default Crud;