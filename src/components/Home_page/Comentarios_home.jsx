import styles from "@/styles/style_home/Testimonios_home.module.css";


const testimonio = [
    {
        id: 1,
        name: "Matias",
        estrellas: 5,
        comentario: "La calidad de la tela es excelente y el diseño es justo como lo vi en la web. Súper cómoda. ¡Muy recomendable!"
        
        
    },
    {
        id: 2,
        name: "Lucas",
        estrellas: 5,
        comentario: "Material de primera. Incluso después de lavarla varias veces, el color sigue vivo y no se deforma. ¡Mi nueva favorita!"
    },
    {
        id: 3,
        name: "Nicolas",
        estrellas: 5,
        comentario: "El ajuste es tal cual la tabla de tallas. Queda perfecta, ni muy holgada ni muy ajustada. Muy contento con la compra."
    },
    {
        id: 4,
        name: "Sofia",
        estrellas: 5,
        comentario: "Recibí mi camiseta en tiempo y forma. El embalaje fue cuidado y la atención al cliente fue excelente. ¡Volveré a comprar!"
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