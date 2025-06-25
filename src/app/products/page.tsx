'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

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

export default function Productos() {
  return (
    <section className="w-full bg-white text-gray-900 px-6 md:px-20 py-20">
      <Head>
        <title>Productos – Bombas, motores, tableros y más</title>
        <meta name="description" content="Venta, reparación y alquiler de bombas sumergibles, motores eléctricos y tableros de control. Equipos listos para operar." />
        <meta name="keywords" content="bombas sumergibles, tableros eléctricos, motobombas, mixers industriales, motores eléctricos, equipos industriales" />
      </Head>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-4">
          Nuestros <span className="font-bold text-orange-600">Productos</span>
        </h2>
        <Link
          href="/#contacto"
          className="block text-center text-lg font-semibold text-orange-600 hover:text-white hover:bg-orange-600 transition-colors duration-300 px-6 py-2 border border-orange-600 w-fit mx-auto mb-12"
        >
          Consulte por su venta y/o alquiler
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {productos.map((producto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-orange-600 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col justify-between"
            >
              <div className="relative w-full h-60">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{producto.nombre}</h3>
                <p className="text-sm text-gray-700 mb-4">{producto.descripcion}</p>
                <a
                  href={producto.manual}
                  download
                  className="mt-auto flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-white hover:bg-orange-600 border border-orange-600 transition-colors duration-300 px-4 py-2 w-fit rounded"
                >
                  <HiOutlineDocumentDownload size={18} />
                  Descargar manual
                </a>
              </div>
              <div className="h-1 from-orange-500 to-orange-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
