import React from 'react'
import ProductCard from '@/components/Crud_page/CrudCard';
import productsData from "../data/products.json";
import { Form_crud } from '@/components/Crud_page/Form_crud';

export const Crud = () => {
    return (
        <>
            <div>
                <h1>CRUD Page</h1>
                <p>This is a placeholder for the CRUD operations page.</p>
            </div>
                <Form_crud/>
            <div className="productGrid">
                {productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <style jsx>{`
        .productGrid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 2rem;
}
            `}</style>
        </>
    )
}

export default Crud;