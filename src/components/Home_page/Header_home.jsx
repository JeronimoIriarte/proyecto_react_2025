import styles from "@/styles/style_home/Header_home.module.css";
import Link from "next/link";
import Login from './Login_home';

export default function SeccionPrincipal() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.filtro}>
          <div className={styles.logoContainer}>
            <img
              src="/images/logo.png"
              alt="Logo PANOZZO"
              className={styles.logo}
            />
          </div>
          <div className={styles["hero-content"]}>
            <h1>Bienvenido a PANOZZO</h1>
            <p>Las mejores camisetas de tus equipos favoritos</p>
            <Link href="/productos" className={styles.button}>Ver Productos</Link>
            <Login/>
          </div>
        </div>
      </section>
    </>
  );
}
