'use client';

import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Fondo: imagen o video */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/video-fondo-agua.mp4"
        />


      {/* Overlay opcional */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col justify-between h-full px-6 md:px-16 py-6">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-15 text-6xl md:text-7xl font-bold text-white leading-tight max-w-5xl"
        >
          QH Ingeniería y <br className="block md:hidden" />
          Servicios <br className="block md:hidden" /> S.A.
        </motion.h1>

        {/* Parte inferior */}
        <div className="flex flex-col md:flex-row md:items-end md:gap-40">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-25 text-white text-base md:text-lg max-w-xl bg-white/20 backdrop-blur-sm p-4"
          >
            Soluciones confiables en sistemas de bombeo e instalaciones hidráulicas. <br />
            Servicio técnico especializado con atención personalizada.
          </motion.p>

          <motion.button
            onClick={() => {
                const section = document.getElementById('contacto');
                if (section) {
                const yOffset = -90;
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
                return;
                }
              if (section) {
                (section as HTMLElement).scrollIntoView({ behavior: 'smooth' });
              }
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-25 bg-orange-600 text-white px-6 py-3 cursor-pointer hover:bg-green-700 transition duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Contactanos
          </motion.button>
        </div>
      </div>
    </section>
  );
}
