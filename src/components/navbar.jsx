import React from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    return (
        <>
        <div className={styles.mainHeader}>
            <nav className={styles.navbar}>
                <a href="#" className={styles.navbarLogo}>
                    <img src="/images/logo.png" alt="panozzo" className={styles.logoPrincipal}/>
                </a>
                <ul className={styles.navbarMenu}>
                    <li><a href="#" className={styles.navLink}>Inicio</a></li>
                    <li><a href="#" className={styles.navLink}>Productos</a></li>
                    <li><a href="#" className={styles.navLink}>Ofertas</a></li>
                    <li><a href="#" className={styles.navLink}>Contacto</a></li>
                </ul>
                <div className={styles.navbarCart}>
                    <a href="#" className={styles.cartIcon}>
                        <img src="/images/carrito.png" alt="Carrito de Compras" className={styles.cartImage}/>
                        <span className={styles.cartItemCount}>3</span>
                    </a>
                </div>
            </nav>
            </div>
        </>
    );
}



