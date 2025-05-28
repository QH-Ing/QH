'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const productos = [
  {
    nombre: 'Bomba Centrífuga',
    descripcion: 'Ideales para instalaciones de presión constante y caudal medio. Gran durabilidad y eficiencia energética.',
    imagen: '/productos/centrifuga.jpg',
  },
  {
    nombre: 'Bomba Sumergible',
    descripcion: 'Perfectas para extracción de agua de pozos y cisternas. Funcionamiento silencioso y seguro.',
    imagen: '/productos/sumergible.jpg',
  },
  {
    nombre: 'Bomba Periférica',
    descripcion: 'Usadas en instalaciones domésticas y riego. Buen rendimiento con caudales bajos y presiones altas.',
    imagen: '/productos/periferica.jpg',
  },
  {
    nombre: 'Bomba Presurizadora',
    descripcion: 'Diseñadas para mejorar la presión de agua en viviendas, duchas y electrodomésticos.',
    imagen: '/productos/presurizadora.jpg',
  },
];

export default function Productos() {
  return (
    <section className="w-full bg-white text-gray-900 px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-light text-center mb-12">
          Nuestros <span className="font-bold text-orange-600">Productos</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {productos.map((producto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-orange-600 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="relative w-full h-60">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{producto.nombre}</h3>
                <p className="text-sm text-gray-700">{producto.descripcion}</p>
              </div>
              <div className="h-1 from-orange-500 to-orange-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
