import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '@/pages/carrito/ShoppingCartContextProvider';
import styles from '@/styles/style_productos/Card_productos.module.css';

export default function Card_productos({ product, context = 'products', deleteFromCart }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { id, title, price, imageUrl, imageAltUrl, description, quantity } = product;
  const { addToCart } = useContext(ShoppingCartContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

    const [currentImage, setCurrentImage] = useState(imageUrl);
    const handleMouseEnter = () => {
      if (imageAltUrl) {
        setCurrentImage(imageAltUrl);
      }
    };
    const handleMouseLeave = () => {
      setCurrentImage(imageUrl);
    };

    const getNumericPrice = (priceString) => {
        if (typeof priceString !== 'string') return 0;
        return parseFloat(priceString.replace(/[^0-9.-]+/g,"")) || 0;
    }
    
    const numericPrice = getNumericPrice(price);

    const handleAddToCart = (productId) => {
      addToCart(productId);
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 2000);
    };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={currentImage} alt={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={styles.cardImage}/>
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{product.title}</h3>
          <p className={styles.cardPrice}>${product.price}</p>
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

      {context === 'products' && isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <img src={currentImage} alt={title} className={styles.modalImage} />
            <div className={styles.modalDetails}>
              <h2>{product.title}</h2>
              <p className={styles.modalPrice}>${product.price}</p>
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
              <select className={styles.sizeSelect}>
                <option value="" disabled selected>Seleccione una talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
}