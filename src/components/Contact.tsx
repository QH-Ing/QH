export default function Contact() {
    return (
      <section className="bg-gray-200 px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contactanos</h2>
          <p className="text-lg text-gray-600 mb-12">
            Estamos para ayudarte. Completá el formulario y te responderemos a la brevedad.
          </p>
          <form
            action="https://formsubmit.co/tu-email@ejemplo.com"
            method="POST"
            className="grid gap-6 text-left"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="nombre" className="mb-2 text-sm font-medium text-gray-700">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  className="border bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-500  border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-600  bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="telefono" className="mb-2 text-sm font-medium text-gray-700">Teléfono (opcional)</label>
              <input
                type="tel"
                name="telefono"
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-600  bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label htmlFor="mensaje" className="mb-2 text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                name="mensaje"
                rows={5}
                required
                className="border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-600  bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full md:w-auto bg-orange-600 text-white px-6 py-3 hover:bg-green-700 cursor-pointer transition duration-300 font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Enviar consulta
            </button>
          </form> 
        </div>
      </section>
    );
  }
  