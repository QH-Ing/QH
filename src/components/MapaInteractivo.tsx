'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MapaInteractivo() {
  const ciudades = [
    { top: '39%', left: '55%' }, // Buenos Aires
    { top: '30%', left: '48%' }, // Córdoba
    { top: '25%', left: '45%' }, // Córdoba
    { top: '33%', left: '52%' }, // Rosario
    { top: '25%', left: '50%' }, // Ejemplo 1
    { top: '42%', left: '47%' }, // Ejemplo 2
    { top: '37%', left: '58%' }, // Ejemplo 3
    { top: '25%', left: '57%' }, // Ejemplo 3
    { top: '20%', left: '52%' }, // Ejemplo 3
  ];

  return (
    <div
      className="relative w-full max-w-3xl mx-auto h-[600px] bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: 'url("/mapa.png")' }}
    >
      {ciudades.map((ciudad, index) => (
        <motion.div
          key={index}
          className="absolute z-10"
          style={{ top: ciudad.top, left: ciudad.left }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.3 }}
        >
          <FaMapMarkerAlt className="text-orange-600 text-xl drop-shadow-md" />
        </motion.div>
      ))}
    </div>
  );
}
