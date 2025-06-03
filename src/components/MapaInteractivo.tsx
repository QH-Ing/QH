'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MapaInteractivo() {
  const ciudades = [
    { top: '39%', left: '55%' },
    { top: '30%', left: '48%' },
    { top: '25%', left: '45%' },
    { top: '33%', left: '52%' }, 
    { top: '25%', left: '50%' },
    { top: '42%', left: '47%' },
    { top: '37%', left: '58%' },
    { top: '25%', left: '57%' },
    { top: '20%', left: '52%' },
    { top: '50%', left: '40%' },
    { top: '20%', left: '35%' },
    { top: '10%', left: '35%' },
    { top: '35%', left: '35%' }, 

  ];

  return (
    <div className="w-full px-10 text-center">
      <h3 className="text-xl md:text-2xl text-gray-800 mb-6">
        Más de <span className="text-orange-600 font-bold">500 clientes</span> confían en nosotros hace más de 20 años, a lo largo de todo el país.
      </h3>

      <motion.div
        className="relative w-full max-w-3xl mx-auto h-[500px] bg-contain bg-no-repeat bg-center rounded-lg"
        style={{ backgroundImage: 'url("/mapa.png")' }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
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
      </motion.div>
    </div>
  );
}
