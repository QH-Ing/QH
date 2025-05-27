'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type Slide = {
  type: 'image' | 'video';
  src: string;
};

const slides: Slide[] = [
  { type: 'image', src: '/img1.jpg' },
  { type: 'video', src: '/video1.mp4' },
  { type: 'image', src: '/img2.jpg' },
  { type: 'image', src: '/img3.jpg' },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[current];

  return (
    <section className="relative w-full min-h-[50vh] bg-gray-200 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-8 overflow-hidden">
      
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Nuestra Historia.
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          En <strong className="text-gray-800">QH Ingeniería y Servicios</strong> contamos con una sólida trayectoria en el sector hidráulico,
          brindando <strong className="text-gray-800">soluciones integrales</strong> en instalación, mantenimiento y reparación de sistemas de bombeo.
          Nuestro compromiso es ofrecer un servicio <strong className="text-gray-800">eficiente, profesional</strong> y adaptado a las necesidades de cada cliente. <br />
          <strong className="text-gray-800">Más de 20 años de historia</strong>, trabajando en <strong className="text-gray-800">Rosario y la región</strong>, ofreciendo <strong className="text-gray-800">soluciones de calidad y confianza</strong>.
        </p>
      </div>

      {/* Columna derecha - Carrusel */}
      <div className="w-full md:w-1/2 relative flex items-center justify-center">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-md border border-gray-300 shadow-sm relative">
          {currentSlide.type === 'image' ? (
            <Image
              src={currentSlide.src}
              alt={`Imagen ${current + 1}`}
              fill
              className="object-cover transition-all duration-700 ease-in-out"
            />
          ) : (
            <video
              src={currentSlide.src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>

        {/* Botón anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow hover:bg-white transition"
        >
          ◀
        </button>

        {/* Botón siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/70 backdrop-blur-sm text-gray-800 p-2 rounded-full shadow hover:bg-white transition"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
