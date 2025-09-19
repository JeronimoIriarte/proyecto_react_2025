import styles from "../styles/SeccionProductos.module.css";

export default function SeccionProductos() {
  // Datos de ejemplo de las camisetas
  const productos = [
    {
      id: 1,
      nombre: "Camiseta Seleccion Argentina",
      precio: "$5000",
      imagen: "/images/camisetaarg.jpg",
    },
    {
      id: 2,
      nombre: "Camiseta Rosario Central",
      precio: "$5200",
      imagen: "/images/camisetacentral.jpg",
    },
    {
      id: 3,
      nombre: "Camiseta Lanus",
      precio: "$4800",
      imagen: "/images/camisetalanus.jpg",
    },
    {
      id: 4,
      nombre: "Camiseta Seleccion Argentina Retro",
      precio: "$5000",
      imagen: "/images/retroarg.jpg",
    },
  ];

  return (
    <section className={styles.productosSection}>
      <h2 className={styles.titulo}>Ofertas Especiales</h2>
      <div className={styles.productosContainer}>
        {productos.map((prod) => (
          <div key={prod.id} className={styles.card}>
            <img
              src={prod.imagen}
              alt={prod.nombre}
              className={styles.cardImage}
            />
            <h3>{prod.nombre}</h3>
            <p>{prod.precio}</p>
            <button>Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
