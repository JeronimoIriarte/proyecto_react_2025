import React, { useState, useEffect } from 'react';
import { Form_panelDeControl } from '@/components/PanelDeControl_page/Form_panelDeControl';
import Productos_panelDeControl from '@/components/PanelDeControl_page/Productos_panelDeControl';
import axios from 'axios';
import Metatags from '@/components/Metatags';

export const Crud = () => {

    // Estado para guardar los productos que vienen del Backend
    const [db, setdb] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);

    // Estados para el filtro visual
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState("All");
    const [isLoading, setIsLoading] = useState(false);

    // 1. LEER DATOS (GET)
    const readDb = async () => {
        setIsLoading(true);
        try {
            const ENDPOINT = "http://localhost:5000/products";
            const response = await axios.get(ENDPOINT);
            
            // response.data contiene el array de productos de MongoDB
            setdb(response.data);
            setFilteredProducts(response.data); // Inicialmente mostramos todos
        } catch (error) {
            console.error("Error trayendo los productos:", error);
            alert("Error al conectar con el servidor");
        } finally {
            setIsLoading(false);
        }
    }

    // Ejecutar readDb cuando carga la página
    useEffect(() => {
        readDb();
    }, []);

    // 2. CREAR PRODUCTO (POST)
    const createProduct = async (product) => {
        // Generamos un ID manual como string (para compatibilidad con tu sistema actual)
        product.id = String(Date.now());

        const ENDPOINT = "http://localhost:5000/products";

        try {
            await axios.post(ENDPOINT, product);
            // Recargamos la lista para ver el nuevo producto
            readDb();
            alert("Producto creado con éxito");
        } catch (error) {
            console.error(error);
            alert("Error al crear el producto");
        }
    }

    // 3. ACTUALIZAR PRODUCTO (PUT)
    const updateProduct = async (product) => {
        // Usamos el ID personalizado que tiene tu producto
        const { id } = product;
        const ENDPOINT = `http://localhost:5000/products/${id}`;

        try {
            await axios.put(ENDPOINT, product);
            readDb();
            setDataToEdit(null); // Limpiamos el formulario
            alert("Producto actualizado con éxito");
        } catch (error) {
            console.error(error);
            alert("Error al actualizar");
        }
    }

    // 4. ELIMINAR PRODUCTO (DELETE)
    const deleteProduct = async (product) => {
        const { id, title } = product;
        const isConfirmed = confirm(`¿Estás seguro de eliminar el producto: ${title}?`);

        if (isConfirmed) {
            const ENDPOINT = `http://localhost:5000/products/${id}`;
            try {
                await axios.delete(ENDPOINT);
                readDb();
                alert("Producto eliminado");
            } catch (error) {
                console.error(error);
                alert("Error al eliminar");
            }
        }
    }

    // Función para manejar el filtrado en el frontend (sin llamar a la API a cada rato)
    const handleFilterChange = (category) => {
        setIsLoading(true);
        // Simulamos un pequeño delay para dar feedback visual
        setTimeout(() => {
            setFilter(category);
            if (category === "All") {
                setFilteredProducts(db);
            } else if (category === "Ofertas") {
                const ofertas = db.filter((product) => product.onSale === true);
                setFilteredProducts(ofertas);
            } else {
                const filtered = db.filter((product) => product.category === category);
                setFilteredProducts(filtered);
            }
            setIsLoading(false);
        }, 300); 
    };

    return (
        <>
            <Metatags />
            <title>Panel de Control</title>
            
            <Form_panelDeControl 
                createProduct={createProduct} 
                updateProduct={updateProduct} 
                setDataToEdit={setDataToEdit} 
                dataToEdit={dataToEdit} 
            />
            
            <Productos_panelDeControl 
                handleFilterChange={handleFilterChange} 
                deleteProduct={deleteProduct} 
                setDataToEdit={setDataToEdit} 
                filteredProducts={filteredProducts} 
                isLoading={isLoading} 
            />
        </>
    )
}
export default Crud;