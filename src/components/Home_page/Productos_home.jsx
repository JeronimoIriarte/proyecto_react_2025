import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import styles from '@/styles/style_home/Productos_home.module.css';
import Card from './Card_home';
import productsData from '../../data/products.json';

export default function SeccionProductos() {

  const productosEnOferta = productsData.filter((producto) => producto.onSale === true);

  return (
    <>
      <section className={styles.productosSection}>
        <h2>Ofertas</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1} // Muestra 3 imágenes a la vez
          navigation // Habilita las flechas de navegación
          pagination={{ clickable: true }} // Habilita los puntos de paginación
          breakpoints={{
            600: {
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
          {productosEnOferta.map((producto, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <Card key={index} productos={producto} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};