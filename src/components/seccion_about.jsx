import styles from '../styles/style_principal/SeccionAbout.module.css';

export default function SeccionAbout() {
    return (
        <section className={styles.sectionAbout}>
            <div className={styles.containerTexto}>
                <h2 className={styles.Nosotros}>Sobre Nosotros</h2>
                <p className={styles.descripcion}>
                Amamos la historia del futbol y la moda deportiva, nuestra mision es revivir esos momentos unicos a traves de camisetas retro que marcaron epocas. Cada prenda esta inspirada en la pasion, los colores
                y la nostalgia de los grandes equipos y selecciones. Mas que una tienda somos fanaticos como vos, queremos
                que lleves con orgullo la camiseta que representa tus mejores recuerdos dentro y fuera de la cancha. 
                </p>
            </div>
            <div className={styles.containerImagen}>
                <img src="/images/tienda-camisetas.webp" alt="Tienda de Camisetas" className={styles.imagenAbout}/>
            </div>
        </section>
    );
}