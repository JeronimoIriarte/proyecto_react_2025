import styles from "@/styles/style_home/Testimonios_home.module.css";


const testimonio = [
    {
        id: 1,
        name: "Jero",
        estrellas: 5,
        comentario: "Las camisetas no se, pero la pagina 10/10"
    },
    {
        id: 2,
        name: "jhony",
        estrellas: 5,
        comentario: "El crud quedo epico"
    },
    {
        id: 3,
        name: "Franco's",
        estrellas: 5,
        comentario: "Traigan camisteas con el logo de React y JS"
    },
];

const renderEstrellas = (estrellas) => {
    return Array(estrellas).fill(0).map((_, i) => (
        <span key={i} style={{ color: '#FFD700' }}>★</span>));
};



export default function SeccionComentarios() {
    return (
        <section className={styles.sectionAbout}>
            <div className={styles.containerTestimonios}>
                <h3 className={styles.tituloTestimonios}>Nuestros Clientes</h3>
                <div className={styles.gridTestimonios}>
                    {testimonio.map((item) => (
                        <div key={item.id} className={styles.tarjetaTestimonio}>
                            <div className={styles.estrellas}>{renderEstrellas(item.estrellas)}</div>
                            <p className={styles.textoTestimonio}>"{item.comentario}"</p>
                            <p className={styles.nombreTestimonio}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}