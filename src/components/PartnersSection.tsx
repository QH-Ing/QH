'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PartnersSection() {
  return (
    <section className="w-full flex flex-col items-center bg-white px-6">
      {/* Título */}
      <h2 className="text-4xl font-bold text-gray-800 mb-16 text-center">
        Representantes de marcas líderes en el mercado.
      </h2>

      {/* Logos principales */}
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
        {/* Sulzer */}
        <motion.a
          href="https://www.sulzer.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2 flex justify-center cursor-pointer"
        >
          <div className="w-[300px] h-[120px] shadow-lg rounded-xl overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/sulzer.png"
              alt="Sulzer"
              width={300}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.a>

        {/* Indesur */}
        <motion.a
          href="https://www.indesur.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2 flex justify-center cursor-pointer"
        >
          <div className="w-[300px] h-[120px] shadow-lg rounded-xl overflow-hidden flex items-center justify-center bg-white">
            <Image
              src="/indesur.jpg"
              alt="Indesur"
              width={280}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.a>
      </div>

      {/* Logos secundarios */}
      <div className="flex flex-wrap justify-center gap-10">
        {/* ABS */}
        <motion.a
          href="https://www.sulzer.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-[180px] h-[100px] shadow-md rounded-lg flex items-center justify-center bg-white"
        >
          <Image
          
            src="/abs-logo.png"
            alt="ABS"
            width={110}
            height={50}
            className="object-contain"
          />
        </motion.a>

        {/* Pumpex */}
        <motion.a
          href="https://www.sulzer.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-[180px] h-[100px] shadow-md rounded-lg flex items-center justify-center bg-white"
        >
          <Image
            src="/pumpex-logo.png"
            alt="Pumpex-Pumps"
            width={150}
            height={50}
            className="object-contain"
          />
        </motion.a>
      </div>
    </section>
  );
}
