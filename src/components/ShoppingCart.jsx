import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import { useContext } from "react";
import ProductCard from "./Productos_page/Card_productos";
import Link from "next/link";
import styles from '../styles/style_Productos/ShoppingCart.module.css';
import productStyles from '../styles/style_productos/Productos.module.css'; // <-- 1. Importa los estilos de la grilla

const ShoppingCart = () => {

    const { state, deleteFromCart, clearCart } = useContext(ShoppingCartContext);
    const { cart } = state;

    const getNumericPrice = (priceString) => {
        if (typeof priceString !== 'string') return 0;
        return parseFloat(priceString.replace(/[^0-9.-]+/g, "")) || 0;
    }

    const total = cart.reduce((acc, item) => acc + getNumericPrice(item.price) * item.quantity, 0);

    return (
        <>
        <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
                <Link href="/productos" className={styles.continueShoppingLink}>
                    &larr; Seguir Comprando
                </Link>
                <button onClick={clearCart} className={styles.clearButton}>Limpiar Carrito</button>
            </div>

            <article>
                {cart.length === 0 ? (
                    <p className={styles.emptyCartMessage}>El carrito está vacío.</p>
                ) : (
                    <>
                        <div className={productStyles.productGrid}>
                            {cart.map((item) => (
                                <ProductCard
                                    key={item.id}
                                    product={item}
                                    context="cart"
                                    deleteFromCart={deleteFromCart}
                                />
                            ))}
                        </div>
                        <div className={styles.cartTotal}>
                            Total: ${total.toFixed(2)}
                        </div>
                    </>
                )}
            </article>
        </div>
        
        <article>
            {cart.length === 0 ? (
                <p className={styles.emptyCartMessage}>El carrito está vacío.</p>
            ) : (
                <>
                    <div className={productStyles.productGrid}> 
                        {cart.map((item) => (
                            <ProductCard 
                                key={item.id} 
                                product={item} 
                                context="cart" 
                                deleteFromCart={deleteFromCart} 
                            />
                        ))}
                    </div>
                    <div className={styles.cartTotal}>
                        Total: ${total}
                    </div>
                </>
            )}
        </article>
        </>
  );
};

export default ShoppingCart;