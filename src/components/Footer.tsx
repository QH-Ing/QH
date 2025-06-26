'use client';

import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <motion.footer
      className="bg-orange-600 text-white py-12 px-6 text-sm mt-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Info Empresa */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Q.H. Ingeniería y Servicios S.A.</h4>
          <p className="text-white/80 font-light leading-relaxed">
            Provisión de servicios hidráulicos y soluciones integrales para la gestión del agua.
            Servicio confiable y profesional en Rosario y alrededores.
          </p>
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Q.H. Ingeniería y Servicios S.A.
            Todos los derechos reservados.
          </p>
        </div>

        {/* Contacto y Redes */}
        <div className="flex flex-col gap-3 md:items-end text-white/80 font-light">
          {/* Teléfono */}
          <p className="flex items-center gap-2">
            <FiPhone className="text-white" />
            <a href="tel:+543414615505" className="hover:underline">
              +54 341 4615505
            </a>
          </p>

          {/* Email */}
          <p className="flex items-center gap-2">
            <FiMail className="text-white" />
            <a
              href="mailto:qhingenieria@qhingenieria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline break-words"
              
            >
              qhingenieria@qhingenieria.com
            </a>
          </p>

          {/* Dirección */}
          <p className="flex items-center gap-2">
            <FiMapPin className="text-white" />
            <a
              href="https://maps.app.goo.gl/7GbSNaBEFX2A95MAA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Arijon 3274, Rosario, Santa Fe, Argentina.
            </a>
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
