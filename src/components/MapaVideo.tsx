'use client';

export default function MapaInteractivo() {
  return (
    <div className="w-full px-10 text-center">
      <h3 className="text-xl md:text-2xl text-gray-800 mb-6">
        Más de <span className="text-orange-600 font-bold">500 clientes</span> confían en nosotros hace más de 20 años, a lo largo de todo el país.
      </h3>

      <div className="relative w-full max-w-3xl mx-auto  rounded-lg overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video-map.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    </div>
  );
}
