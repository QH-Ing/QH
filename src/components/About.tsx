'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  type: 'image' | 'video';
  src: string;
};

const slides: Slide[] = [
  { type: 'image', src: '/obra1.jpeg' },
  { type: 'image', src: '/obra6.jpeg' },
  { type: 'image', src: '/obra3.jpeg' },
  { type: 'image', src: '/obra4.jpeg' },
  { type: 'image', src: '/obra5.jpeg' },
];

export default function About() {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const paginate = (newDirection: number) => {
    setCurrent(([prev]) => {
      const newIndex = (prev + newDirection + slides.length) % slides.length;
      return [newIndex, newDirection];
    });
  };

  const currentSlide = slides[current];

  return (
    <section className="flex flex-col md:flex-row md:items-center justify-between px-6 md:px-20 py-16 gap-10 bg-gray-200 min-h-[60vh]">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 max-w-lg text-left self-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Nuestra Historia
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          En <strong className="text-gray-900">QH Ingeniería y Servicios</strong> contamos con una sólida trayectoria en el sector hidráulico,
          brindando <strong className="text-gray-900">soluciones integrales</strong> en instalación, mantenimiento y reparación de sistemas de bombeo.
          Nuestro compromiso es ofrecer un servicio <strong className="text-gray-900">eficiente y profesional</strong>, adaptado a las necesidades de cada cliente.<br />
          <strong className="text-gray-900">Más de 20 años de historia</strong> trabajando en <strong className="text-gray-900">Rosario y la región</strong>, ofreciendo <strong className="text-gray-900">soluciones de calidad y confianza</strong>.
        </p>
      </div>

      {/* Columna derecha - Carrusel */}
      <div className="w-full md:w-1/2 relative flex flex-col items-center justify-center max-w-xl">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md border border-gray-100 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentSlide.src}
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset }) => {
                if (offset.x > 100) paginate(-1);
                else if (offset.x < -100) paginate(1);
              }}
              className="absolute inset-0"
            >
              {currentSlide.type === 'image' ? (
                <Image
                  src={currentSlide.src}
                  alt={`Imagen ${current + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              ) : (
                <video
                  src={currentSlide.src}
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Indicadores dentro de la imagen */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-10">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent([index, index > current ? 1 : -1])}
                className={`w-2 h-2 rounded-full ${
                  index === current ? 'bg-orange-600' : 'bg-orange-300'
                }`}
                animate={{ scale: index === current ? 1.2: 1 }}
                transition={{ duration: 0.4 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
