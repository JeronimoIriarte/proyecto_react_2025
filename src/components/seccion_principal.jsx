import styles from "../styles/Hero.module.css";

export default function SeccionPrincipal() {
  return (
    <section className={styles.hero}>
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="Logo PANOZZO" className={styles.logo} />
      </div>
      <div className={styles["hero-content"]}>
        <h1>Bienvenido a PANOZZO</h1>
        <p>Las mejores camisetas de tus equipos favoritos</p>
        <button>Ver Productos</button>
      </div>
    </section>
  );
}
