import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '@/pages/carrito/ShoppingCartContextProvider';
import styles from '../../styles/style_productos/Card_productos.module.css';

export default function ProductCard({ product, context = 'products', deleteFromCart }) {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // estado para el mensaje de confirmación
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { id, title, price, imageUrl, description, quantity } = product;
  const { addToCart } = useContext(ShoppingCartContext);

  // Funciones para abrir y cerrar el modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    const [currentImage, setCurrentImage] = useState(product.imageUrl);
    const handleMouseEnter = () => {
      if (product.imageAltUrl) {
        setCurrentImage(product.imageAltUrl);
      }
    };
    const handleMouseLeave = () => {
      setCurrentImage(product.imageUrl);
    };

    const getNumericPrice = (priceString) => {
        if (typeof priceString !== 'string') return 0;
        return parseFloat(priceString.replace(/[^0-9.-]+/g,"")) || 0;
    }
    
    const numericPrice = getNumericPrice(price);

    // función para manejar la adición al carrito
    const handleAddToCart = (productId) => {
      addToCart(productId);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    };

  return (
    <>
      {/* La tarjeta del producto */}
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={currentImage} alt={product.title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.cardImage}/>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{product.title}</h3>
          <p className={styles.cardPrice}>{product.price}</p>
          { context === 'products' ? (
            <button onClick={openModal} className={styles.cardButton}>
              Ver detalles
            </button>
          ) : (
            <div className={styles.cartItemControls}>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal: ${numericPrice * quantity}</p>
                <button onClick={() => deleteFromCart(id)} className={styles.cardButton}>
                    Eliminar Uno
                </button>
                <button onClick={() => deleteFromCart(id, true)} className={styles.cardButton}>
                    Eliminar Todos
                </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal (solo se muestra si isModalOpen es true y estamos en la página de productos) */}
      {context === 'products' && isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          {/* Detiene la propagación del evento para que al hacer clic dentro del modal, no se cierre */}
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <img src={currentImage} alt={product.title} className={styles.modalImage} />
            <div className={styles.modalDetails}>
              <h2>{product.title}</h2>
              <p className={styles.modalPrice}>{product.price}</p>
              <p className={styles.modalDescription}>{product.description}</p>
              
              <div className={`${styles.confirmationMessage} ${showConfirmation ? styles.show : ''}`}>
                ✓ Producto añadido correctamente
              </div>
              
              <button 
                className={styles.addToCartButton} 
                onClick={() => handleAddToCart(id)}
                disabled={showConfirmation}
              >
                {showConfirmation ? '¡Agregado!' : 'Agregar al carrito'}
              </button>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}