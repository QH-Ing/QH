import Image from "next/image";

export default function Projects() {
    const images = [
      "/proyectos/proyecto1.jpg",
      "/proyectos/proyecto2.jpg",
      "/proyectos/proyecto3.jpg",
      "/proyectos/proyecto4.jpg",
      "/proyectos/proyecto5.jpg",
      "/proyectos/proyecto6.jpg"
    ];
  
    return (
      <section className="min-h-screen bg-white px-4 sm:px-6 py-16 sm:py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Proyectos Realizados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
                <Image
                  width={500}
                  height={500}
                  src={src}
                  alt={`Proyecto ${index + 1}`}
                  className="w-full h-60 sm:h-64 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  