'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NuestrosClientes() {
  const logos = [
    { src: '/john-deere.png', alt: 'John Deere', className: 'ampliado' },
    { src: '/celulosa.jpg', alt: 'Celulosa' },
    { src: '/cargill.jpg', alt: 'Cargill' },
    { src: '/molinos.png', alt: 'Molinos' },
    { src: '/terragene.png', alt: 'Terragene', className: 'ampliado' },
    { src: '/dreyfus.png', alt: 'Dreyfus' },
    { src: '/cofco.jpg', alt: 'Cofco', className: 'ampliado'  },
    { src: '/edeca.png', alt: 'Edeca' },
    { src: '/obring.png', alt: 'Obring' },
    { src: '/renova.png', alt: 'Renova', className: 'reducido'  },
    { src: '/pampaenergia.jpg', alt: 'Pampa Energía' },
    { src: '/brayco.jpg', alt: 'Grupo Brayco' },
    { src: '/terminal6.jpg', alt: 'Terminal 6', className: 'ampliado' },
    { src: '/cotar.png', alt: 'Cotar' },
    { src: '/milkaut.png', alt: 'Milkaut' },
    { src: '/laserenisima.png', alt: 'La Serenísima' },
    { src: '/sancor.png', alt: 'Sancor' },
    { src: '/yeruba.png', alt: 'Yeruba', className: 'reducido'  },
    { src: '/pecam.jpg', alt: 'Pecam', className: 'ampliado' },
    { src: '/pellegrinet.png', alt: 'Pellegrinet', className: 'ampliado' },
    { src: '/life.jpeg', alt: 'Life Desarrollos', className: 'reducido' },
    { src: '/rosetti.png', alt: 'Rosetti', className: 'ampliado' },
    { src: '/afa.png', alt: 'AFA', className: 'reducido' },
    { src: '/briket.png', alt: 'Briket', className: 'ampliado' },
    { src: '/basf.png', alt: 'Basf' },
    { src: '/assa.jpg', alt: 'ASSA', className: 'ampliado'},
    { src: '/muni-rosario.png', alt: 'Municipalidad de Rosario', className: 'ampliado'  },
    { src: '/muni-sf.png', alt: 'Municipalidad de Santa Fe', className: 'ampliado' },
    { src: '/gerdau.png', alt: 'Gerdau' },
    { src: '/ypf.png', alt: 'YPF' },
    { src: '/electrolux.png', alt: 'Electrolux' },
    { src: '/ternium.png', alt: 'Ternium' },
    { src: '/unilever.png', alt: 'Unilever', className: 'reducido' },
    { src: '/nestle.jpg', alt: 'Nestlé' },
  ];

  const mitad = Math.ceil(logos.length / 2);
  const fila1 = logos.slice(0, mitad);
  const fila2 = logos.slice(mitad);

  return (
    <section className="w-full bg-white py-20 px-6 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center font-medium tracking-tight text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-12"
      >
        Clientes
      </motion.h2>

      {[fila1, fila2].map((fila, index) => (
        <div key={index} className="relative overflow-hidden group mb-6">
          <div className="flex w-max animate-marquee group-hover:pause">
            {[...fila, ...fila].map((logo, i) => (
              <div
                key={`${index}-${i}`}
                className="min-w-[140px] min-h-[80px] mx-4 bg-white flex items-center justify-center "
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.className === 'ampliado' ? 140 : logo.className === 'reducido' ? 80 : 100}
                  height={logo.className === 'ampliado' ? 80 : logo.className === 'reducido' ? 40 : 20}
                  className={`object-contain grayscale hover:grayscale-0 transition duration-300 ${logo.className || ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <style jsx>{`
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
