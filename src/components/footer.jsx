import React from "react";
import styles from "../styles/footer.module.css"; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Sección de Logo, Descripción y Redes Sociales */}
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <img
              src="images/logo_horizontal.png"
              alt="Panozzo Logo"
              width={250}
              height={120}
              className={styles.logoImage}
            />
          </div>
          {/* Espacio para los iconos de redes sociales */}
          <div className={styles.socialIcons}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="images/logo_facebook.png"
                alt="logo Facebook"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="images/logo_instagram.png"
                alt="logo Instagram"
                className={styles.socialIcon}
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <img
                src="images/logo_twitter.png"
                alt="logo Twitter"
                className={styles.socialIcon}
              />
            </a>
          </div>
        </div>

        {/* Sección de Enlaces Rápidos */}
        <div className={styles.linksSection}>
          <h2 className={styles.sectionTitle}>Enlaces Rápidos</h2>
          <ul className={styles.linkList}>
            <li>
              <a href="/" className={styles.link}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/productos" className={styles.link}>
                Productos
              </a>
            </li>
            <li>
              <a href="/ofertas" className={styles.link}>
                Ofertas
              </a>
            </li>
          </ul>
        </div>

        {/* Sección de Información de Contacto */}
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Información de Contacto</h2>
          <p className={styles.contactItem}>+1 (555) 123-4567</p>
          <p className={styles.contactItem}>contacto@miapp.com</p>
          <p className={styles.contactItem}>123 Calle Principal</p>
          <p className={styles.contactItem}>Ciudad, Estado 12345</p>
        </div>
      </div>

      {/* Sección de Derechos de Autor */}
      <div className={styles.copyrightSection}>
        <p>
          © {new Date().getFullYear()} <b>Panozzo.com</b> Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
