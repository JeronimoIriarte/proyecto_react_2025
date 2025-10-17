import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/style_home/Card_home.module.css";

const Tarjeta = (props) => {

    const { imageUrl, imageAltUrl, title, price, id } = props.productos;

    const [currentImage, setCurrentImage] = useState(imageUrl);
    const handleMouseEnter = () => {
        if (imageAltUrl) {
            setCurrentImage(imageAltUrl);
        }
    };
    const handleMouseLeave = () => {
        setCurrentImage(imageUrl);
    };

    return (
        <>
            <div className={styles.card}>
                <img src={currentImage} alt={id} className={styles.image} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                <div className={styles.image_content}>
                    <h3>{title}</h3>
                    <p>${price.toLocaleString("es-ES")}</p>
                    <Link href="/productos" className={styles.boton}>Ver Ofertas</Link>
                </div>
            </div>
        </>
    );
};

export default Tarjeta;
