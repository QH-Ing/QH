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
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 bg-gray-200 min-h-[60vh]">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 max-w-lg text-left">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
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
      <div className="w-full md:w-1/2 relative flex items-center justify-center max-w-xl">
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-md border border-gray-100 relative">
          {currentSlide.type === 'image' ? (
            <Image
              src={currentSlide.src}
              alt={`Imagen ${current + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-in-out scale-100 hover:scale-105"
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
        </div>

{/* Botón anterior */}
<button
  onClick={prevSlide}
  aria-label="Anterior"
  className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-100/60 text-orange-600 p-2 rounded-full shadow-md hover:bg-orange-200 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
</button>

{/* Botón siguiente */}
<button
  onClick={nextSlide}
  aria-label="Siguiente"
  className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-100/60 text-orange-600 p-2 rounded-full shadow-md hover:bg-orange-200 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
</button>
      </div>
    </section>
  );
}
