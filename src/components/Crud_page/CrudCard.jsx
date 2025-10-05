import React, { useState } from 'react';
import styles from '../../styles/style_admin/CrudCard.module.css';

export default function CrudCard({ product, deleteProduct, setDataToEdit }) {
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { id, title, price, image, image_alt, description } = product;

    return (
        <>
            
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={image} alt={title} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    <p className={styles.cardPrice}>{price}</p>
                    <div className={styles.buttonsContainer}>
                    <button onClick={openModal} className={styles.cardButton}>
                        Ver detalles
                    </button>
                    <button onClick={() => setDataToEdit(product)} className={styles.cardButton}>
                        Editar producto
                    </button>
                    <button onClick={() => deleteProduct(id)} className={styles.cardButton}>
                        Eliminar producto
                    </button>
                    </div>
                </div>
            </div>

            
            {isModalOpen && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>&times;</button>
                        <img src={image} alt={title} className={styles.modalImage} />
                        <div className={styles.modalDetails}>
                            <h2>{title}</h2>
                            <p className={styles.modalPrice}>{price}</p>
                            <p className={styles.modalDescription}>{description}</p>
                            <button className={styles.deleteButton}>ELIMINAR PRODUCTO</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}