import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '../styles/SeccionProductos.module.css';
import Card from './Card';


export default function SeccionProductos() {
  // Datos de ejemplo de las camisetas
  const productos = [
    {
      id: 1,
      title: "Camiseta Seleccion Argentina",
      price: "$5000",
      image: "/images/camisetaarg.jpg",
    },
    {
      id: 2,
      title: "Camiseta Rosario Central",
      price: "$5200",
      image: "/images/camisetacentral.jpg",
    },
    {
      id: 3,
      title: "Camiseta Retro Lanus",
      price: "$4800",
      image: "/images/camisetalanus.jpg",
    },
    {
      id: 4,
      title: "Camiseta Seleccion Argentina Retro",
      price: "$5000",
      image: "/images/retroarg.jpg",
    },
  ];

  return (
    <>
      <section className={styles.productosSection}>
        <h2>Ofertas</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={2} // Muestra 3 imágenes a la vez
          navigation // Habilita las flechas de navegación
          pagination={{ clickable: true }} // Habilita los puntos de paginación
          breakpoints={{
            470: {
              slidesPerView: 1, // 1 imagen en pantallas pequeñas
            },
            790: {
              slidesPerView: 2, // 2 imágenes en pantallas medianas
            },
            1024: {
              slidesPerView: 3, // 3 imágenes en pantallas grandes
            },
          }}
        >
          {productos.map((src, pepe) => (
            <SwiperSlide key={pepe}>
              <div className={styles.card}>
                <Card key={pepe} productos={src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <style jsx>{`

    `}</style>
    </>
  );
};