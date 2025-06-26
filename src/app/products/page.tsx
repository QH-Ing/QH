'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const productos = [
  {
    nombre: 'Bombas centrífugas Monoblock',
    descripcion: 'Compactas y eficientes, ideales para instalaciones de caudal medio y presión constante.',
    imagen: '/productos/monoblock.jpg',
    manual: '/manuales/monoblock.pdf',
  },
  {
    nombre: 'Bombas centrífugas de base y acople',
    descripcion: 'Diseño robusto para aplicaciones industriales con altos requerimientos de caudal.',
    imagen: '/productos/base-acople.jpg',
    manual: '/manuales/base-acople.pdf',
  },
  {
    nombre: 'Presurizadoras: Periféricas, multietapas horizontales y verticales',
    descripcion: 'Soluciones versátiles para mejorar la presión en redes domiciliarias o comerciales.',
    imagen: '/productos/presurizadoras.jpg',
    manual: '/manuales/presurizadoras.pdf',
  },
  {
    nombre: 'Bombas neumáticas',
    descripcion: 'Funcionan con aire comprimido. Aptas para líquidos corrosivos o inflamables.',
    imagen: '/productos/neumaticas.jpg',
    manual: '/manuales/neumaticas.pdf',
  },
  {
    nombre: 'Bombas sumergibles para pozo profundo',
    descripcion: 'Especiales para extracción de agua en perforaciones de gran profundidad.',
    imagen: '/productos/sumergibles-pozo.jpg',
    manual: '/manuales/sumergibles-pozo.pdf',
  },
  {
    nombre: 'Electrobombas cloacales y/o para efluentes',
    descripcion: 'Diseñadas para el manejo de líquidos con sólidos en suspensión y residuos.',
    imagen: '/productos/cloacales.jpg',
    manual: '/manuales/cloacales.pdf',
  },
  {
    nombre: 'Electrobombas para achique en construcción y minería',
    descripcion: 'Ideales para remover agua acumulada en obras civiles o excavaciones mineras.',
    imagen: '/productos/achique.jpg',
    manual: '/manuales/achique.pdf',
  },
  {
    nombre: 'Equipos para tratamiento de efluentes: agitadores y mezcladores',
    descripcion: 'Favorecen la homogenización de líquidos en plantas de tratamiento de aguas.',
    imagen: '/productos/tratamiento-efluentes.jpg',
    manual: '/manuales/tratamiento-efluentes.pdf',
  },
  {
    nombre: 'Bombas Verticales',
    descripcion: 'Altamente eficientes para sistemas con grandes columnas de presión.',
    imagen: '/productos/verticales.jpg',
    manual: '/manuales/verticales.pdf',
  },
  {
    nombre: 'Electrobombas y motobombas para control de inundaciones',
    descripcion: 'Preparadas para evacuar grandes volúmenes de agua en emergencias.',
    imagen: '/productos/inundaciones.jpg',
    manual: '/manuales/inundaciones.pdf',
  },
  {
    nombre: 'Electrobombas para tomas de agua',
    descripcion: 'Usadas para captar agua desde ríos, lagunas u otras fuentes naturales.',
    imagen: '/productos/tomas-agua.jpg',
    manual: '/manuales/tomas-agua.pdf',
  },
  {
    nombre: 'Electrobombas dosificadoras',
    descripcion: 'Aplicadas en procesos que requieren precisión en la dosificación de químicos.',
    imagen: '/productos/dosificadoras.jpg',
    manual: '/manuales/dosificadoras.pdf',
  },
  {
    nombre: 'Electrobombas domiciliarias',
    descripcion: 'Solución compacta para mejorar la presión de agua en viviendas.',
    imagen: '/productos/domiciliarias.jpg',
    manual: '/manuales/domiciliarias.pdf',
  },
];

export default function ProductosCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="w-full bg-white text-gray-900 px-6 md:px-20 py-20 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-8">
          Nuestros <span className="font-bold text-orange-600">Productos</span>
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            speed={500}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="group"
          >
            {productos.map((producto, index) => (
              <SwiperSlide key={index} className="h-full">
                <motion.div
                  onClick={() => setSelectedImage(producto.imagen)}
                  className="cursor-pointer flex flex-col h-full min-h-[450px] border border-orange-600 shadow-sm hover:shadow-lg transition-all duration-300 bg-white overflow-hidden"
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={producto.imagen}
                      alt={producto.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">{producto.nombre}</h3>
                    <p className="text-sm text-gray-700 mb-4">{producto.descripcion}</p>
                    <div className="mt-auto">
                      <a
                        href={producto.manual}
                        download
                        className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-600 transition-colors duration-300 px-4 py-2 w-fit rounded"
                      >
                        <HiOutlineDocumentDownload size={18} />
                        Descargar manual
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-full cursor-pointer shadow">
            <FaChevronLeft />
          </div>
          <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-full cursor-pointer shadow">
            <FaChevronRight />
          </div>
        </div>

        <style jsx global>{`
          .swiper-pagination {
            margin-top: 48px !important;
          }
          .swiper-pagination-bullets {
            display: flex;
            justify-content: center;
            gap: 8px;
          }
          .swiper-pagination-bullet {
            background: #fb923c;
            opacity: 0.4;
            transition: all 0.3s;
            width: 8px;
            height: 8px;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>

        {/* Modal Imagen */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-3xl p-4">
              <Image
                src={selectedImage}
                alt="Producto ampliado"
                fill
                className="object-contain w-full h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
