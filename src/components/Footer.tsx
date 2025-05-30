'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

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
            Mantenimiento e instalación de bombas hidráulicas.
            Servicio confiable y profesional en Rosario y alrededores.
          </p>
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Q.H. Ingeniería y Servicios S.A.
            Todos los derechos reservados.
          </p>
        </div>

        {/* Contacto y Redes */}
        <div className="flex flex-col gap-2 md:items-end text-white/80 font-light">
          <p>Teléfono: (341) 461-5505</p>
          <p>Email: qhingenieria@qhingenieria.com</p>
          <p>Ubicación: Arijon 3274, Rosario, Santa Fe</p>

          <div className="flex gap-4 mt-4">
            <motion.a
              href="#"
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-white hover:text-green-300 transition"
            >
              <FaInstagram size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-white hover:text-green-300 transition"
            >
              <FaFacebookF size={18} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3, scale: 1.05 }}
              className="text-white hover:text-green-300 transition"
            >
              <FaLinkedinIn size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
