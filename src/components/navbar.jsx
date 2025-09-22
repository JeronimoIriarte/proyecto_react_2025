import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Cambia el valor según cuándo quieras que se active
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el evento al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <div className={`${styles.mainHeader} ${isScrolled ? styles.navbarScrolled : ''}`}>
                <nav className={styles.navbar}>
                    <a href="#" className={styles.navbarLogo}>
                        <img src="/images/logo.png" alt="panozzo" className={styles.logoPrincipal} />
                    </a>
                    <ul className={styles.navbarMenu}>
                        <li><a href="#" className={styles.navLink}>Inicio</a></li>
                        <li><a href="#" className={styles.navLink}>Productos</a></li>
                        <li><a href="#" className={styles.navLink}>Nosotros</a></li>
                        <li><a href="#" className={styles.navLink}>Contacto</a></li>
                    </ul>
                    <div className={styles.navbarCart}>
                        <a href="#" className={styles.cartIcon}>
                            <img src="/images/carrito.png" alt="Carrito de Compras" className={styles.cartImage} />
                            <span className={styles.cartItemCount}>3</span>
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}



