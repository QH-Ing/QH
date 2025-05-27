export default function Advantages() {
    const items = [
      {
        title: "Experiencia comprobada",
        description: "Más de 15 años brindando soluciones hidráulicas a industrias y particulares."
      },
      {
        title: "Calidad garantizada",
        description: "Trabajamos con marcas líderes y personal altamente capacitado."
      },
      {
        title: "Atención personalizada",
        description: "Nos adaptamos a las necesidades específicas de cada cliente."
      },
      {
        title: "Respuestas rápidas",
        description: "Asistencia ágil ante urgencias y mantenimiento programado."
      }
    ];
  
    return (
      <section className="min-h-screen bg-white px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">¿Por qué elegirnos?</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }