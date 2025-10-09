import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';

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
                        <img src="/images/logo_horizontal.png" alt="panozzo" className={styles.logoPrincipal} />
                    </a>
                    <ul className={styles.navbarMenu}>
                        <li><Link href="/" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Inicio</Link></li>
                        <li><Link href="/productos" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Productos</Link></li>
                        <li><Link href="#footer" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Nosotros</Link></li>
                        <li><Link href="#footer" className={`${styles.navLink} ${isScrolled ? styles.navlinkScrolled : ''} `}>Contacto</Link></li>
                    </ul>
                    <div className={styles.asd}>
                        
                    </div>
                </nav>
            </div>
        </>
    );
}



