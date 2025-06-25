'use client';

import Image from 'next/image';

export default function PartnersSection() {
  const mainLogos = [
    { src: '/sulzer.png', alt: 'Sulzer', link: 'https://www.sulzer.com' },
    { src: '/abs-logo.png', alt: 'ABS', link: 'https://www.sulzer.com' },
    { src: '/pumpex-logo.png', alt: 'Pumpex', link: 'https://www.sulzer.com' },
    { src: '/innomotics-logo.png', alt: 'Inomotics', link: 'https://www.innomotics.com/' },
    { src: '/siemens-logo.png', alt: 'Siemens', link: 'https://www.siemens.com/' },
    { src: '/indesur.jpg', alt: 'Indesur', link: 'https://www.indesur.com.ar' },
  ];

  const secondaryLogos = [
    { src: '/pedrollo-logo.png', alt: 'Pedrollo', link: 'https://www.pedrollo.com' },
    { src: '/espa-logo.png', alt: 'ESPA', link: 'https://www.espa.com/' },
    { src: '/motorarg-logo.png', alt: 'Motorarg', link: 'https://www.motorarg.com.ar/' },
    { src: '/kunz-logo.png', alt: 'Kunz', link: 'https://bombaskunz.com.ar/' },
    { src: '/grundfos-logo.png', alt: 'Grundfos', link: 'https://www.grundfos.com/' },
    { src: '/saer-logo.png', alt: 'Saer', link: 'https://www.saerelettropompe.com/' },
    { src: '/mec-logo.png', alt: 'MEC', link: 'https://mec-argentina.com.ar/' },
    { src: '/czerweny-logo.png', alt: 'Czerweny', link: 'https://czerweny.ar/' },
    { src: '/weg-logo.png', alt: 'WEG', link: 'https://www.weg.net/' },
    { src: '/schneider-logo.png', alt: 'Schneider', link: 'https://www.se.com/' },
  ];

  return (
    <section className="w-full bg-white py-10 px-8 overflow-hidden">
      {/* Carrousel Principal */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-14">
        Representantes de marcas líderes en el mercado.
      </h2>

      <div className="relative w-full overflow-hidden group mb-20">
        <div className="flex w-max animate-scroll group-hover:pause">
          {mainLogos.concat(mainLogos).map((logo, idx) => (
            <a
              key={idx}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[250px] h-[100px] mx-6 flex items-center justify-center bg-white transition-transform duration-500 hover:scale-130"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={
                  logo.alt === 'ABS' ? 90 :
                  logo.alt === 'Sulzer' || logo.alt === 'Indesur' ? 180 :
                  140
                }
                height={
                  logo.alt === 'ABS' ? 60 :
                  logo.alt === 'Sulzer' || logo.alt === 'Indesur' ? 130 :
                  100
                }
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Carrousel Secundario */}
      <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-700 mb-10">
        Otras marcas que comercializamos.
      </h3>

      <div className="relative w-full overflow-hidden group">
        <div className="flex w-max animate-scroll group-hover:pause">
          {secondaryLogos.concat(secondaryLogos).map((logo, idx) => (
            <a
              key={idx}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[180px] h-[80px] mx-4 flex items-center justify-center bg-white transition-transform duration-500 hover:scale-105"
            >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.alt === 'Grundfos' ? 140 : 100}
              height={logo.alt === 'Grundfos' ? 80 : 60}
              className="object-contain"
            />

            </a>
          ))}
        </div>
      </div>

      {/* Animaciones scroll */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        .group-hover\\:pause:hover {
          animation-play-state: paused;
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
