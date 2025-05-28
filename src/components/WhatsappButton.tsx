'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsappButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      href="https://wa.me/543416910148"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 cursor-pointer hover:scale-110 hover:shadow-xl hover:bg-green-700"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  );
}
