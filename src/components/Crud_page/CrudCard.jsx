import React, { useState } from 'react';
import styles from '../../styles/style_admin/CrudCard.module.css';

export default function CrudCard({ product }) {
    // Estado para controlar la visibilidad del modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Funciones para abrir y cerrar el modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            {/* La tarjeta del producto */}
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={product.image} alt={product.title} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{product.title}</h3>
                    <p className={styles.cardPrice}>{product.price}</p>
                    <div className={styles.buttonsContainer}>
                    <button onClick={openModal} className={styles.cardButton}>
                        Ver detalles
                    </button>
                    <button className={styles.cardButton}>
                        Eliminar producto
                    </button>
                    </div>
                </div>
            </div>

            {/* Modal (solo se muestra si isModalOpen es true) */}
            {isModalOpen && (
                <div className={styles.modalBackdrop} onClick={closeModal}>
                    {/* Detenemos la propagación del evento para que al hacer clic dentro del modal, no se cierre */}
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeButton} onClick={closeModal}>&times;</button>
                        <img src={product.image} alt={product.title} className={styles.modalImage} />
                        <div className={styles.modalDetails}>
                            <h2>{product.title}</h2>
                            <p className={styles.modalPrice}>{product.price}</p>
                            <p className={styles.modalDescription}>{product.description}</p>
                            <button className={styles.deleteButton}>ELIMINAR PRODUCTO</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}