'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HiOutlineChip,
  HiOutlineRefresh,
  HiOutlineLightningBolt
} from 'react-icons/hi';
import { FaWater } from 'react-icons/fa';
import FondoParticulas from './Particulas'; 

const services = [
  {
    title: 'INSTALACIÓN DE BOMBAS',
    description: 'Montaje profesional de sistemas de bombeo adaptados a cada proyecto.',
    icon: <FaWater size={30} className="text-orange-600 group-hover:animate-pulse transition-all duration-300" />,
  },
  {
    title: 'MANTENIMIENTO PREVENTIVO',
    description: 'Control periódico para asegurar el funcionamiento de instalaciones.',
    icon: <HiOutlineRefresh size={30} className="text-orange-600 group-hover:animate-pulse transition-all duration-300" />,
  },
  {
    title: 'REPARACIÓN DE EQUIPOS',
    description: 'Diagnóstico técnico y reparación con repuestos certificados.',
    icon: <HiOutlineChip size={30} className="text-orange-600 group-hover:animate-pulse transition-all duration-300" />,
  },
  {
    title: 'AUTOMATIZACIÓN',
    description: 'Integración de sistemas inteligentes para una operación eficiente.',
    icon: <HiOutlineLightningBolt size={30} className="text-orange-600 group-hover:animate-pulse transition-all duration-300" />,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden w-full bg-white text-gray-900 px-6 md:px-20 py-20">
      <FondoParticulas />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
        
        {/* Título */}
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-3xl md:text-5xl font-light leading-tight">
            Nuestro compromiso <br />
            <span className="font-bold text-gray-900">con el agua.</span>
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg max-w-md">
            Brindamos <strong className="text-gray-900">soluciones hidráulicas</strong> clave para un presente <strong className="text-gray-900">eficiente</strong> y un futuro <strong className="text-gray-900">sostenible</strong>.
          </p>
        </div>

        {/* Cuadrados */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative w-full h-30 sm:h-45 bg-white border-2 border-orange-600 text-gray-900 flex flex-col items-center justify-center text-center overflow-hidden transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Borde verde animado externo */}
              <div className="absolute -inset-1 rounded-sm border-2 shadow-[0_0_1px_1px_rgba(34,197,94,0.5)] border-green-600 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-800 pointer-events-none z-0" />

              {/* Contenido */}
              <div className="relative z-10 flex flex-col items-center px-4">
                {service.icon}
                <h3 className="text-s font-semibold mt-2 mb-1">
                  {service.title}
                </h3>
                <p className="text-[14px] leading-tight">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
