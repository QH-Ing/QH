'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import MapaInteractivo from './MapaInteractivo';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success('Mensaje enviado con éxito ✅');
        setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
      } else {
        toast.error('Error al enviar el mensaje ❌');
      }
    } catch (err) {
      console.error(err);
      toast.error('Hubo un error inesperado');
    }
  };

  return (
    <section className="bg-gray-200 px-6 py-20 text-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        
        {/* Mapa (arriba en mobile, derecha en desktop) */}
        <div className="w-full lg:w-1/2">
          <MapaInteractivo />
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contactanos</h2>
          <p className="text-lg text-gray-600 mb-12">
            Estamos para ayudarte. Completá el formulario y te responderemos a la brevedad.
          </p>
          <form onSubmit={handleSubmit} className="grid gap-6 text-left">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="nombre" className="mb-2 text-sm font-medium text-gray-700">Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="border bg-white border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border bg-white border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="telefono" className="mb-2 text-sm font-medium text-gray-700">Teléfono (opcional)</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="border bg-white border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="mensaje" className="mb-2 text-sm font-medium text-gray-700">Mensaje</label>
              <textarea
                name="mensaje"
                rows={5}
                required
                value={formData.mensaje}
                onChange={handleChange}
                className="border bg-white border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer md:w-auto bg-orange-600 text-white px-6 py-3 hover:bg-green-700 transition duration-300 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
