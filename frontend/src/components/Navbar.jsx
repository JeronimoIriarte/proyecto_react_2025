import { ShoppingCartContext } from "@/pages/carrito/ShoppingCartContextProvider";
import { useContext } from "react";
import React, { useState, useEffect } from 'react';
import styles from '@/styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    const { state } = useContext(ShoppingCartContext);
    const { cart } = state;
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`${styles.mainHeader} ${isScrolled ? styles.navbarScrolled : ''}`}>
                <nav className={styles.navbar}>
                    <a href="/" className={styles.navbarLogo}>
                        <img src="/images/logo_horizontal.png" alt="panozzo" className={styles.logoPrincipal} />
                    </a>
                    
                    <ul className={`${styles.navbarMenu} ${isOpen ? styles.open : ''}`}>
                        <li><Link href="/" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Inicio</Link></li>
                        <li><Link href="/productos" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Productos</Link></li>
                        <li><Link href="/sobreNosotros" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Sobre Nosotros</Link></li>
                        <li><Link href="#footer" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Contacto</Link></li>
                    </ul>

                    {/* 1. NUEVO CONTENEDOR PARA LAS ACCIONES DE LA DERECHA */}
                    <div className={styles.navbarActions}>
                        <div className={styles.navbarCart}>
                            <Link href="/carrito/cart" className={styles.cartButton}>
                                <img src="/images/icons/cart_icon.svg" alt="Ir al carrito" className={styles.cartImage} />
                                {totalItems === 0 ? (null) : (<span className={styles.cartItemCount}>{totalItems > 9 ? '9+' : totalItems}</span>)}
                            </Link>
                        </div>
                        <div className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`} onClick={toggleMenu}>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                            <span className={styles.bar}></span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}



