export default function Footer() {
    return (
      <footer className="bg-orange-600 text-white py-10 px-6 text-center md:text-left mt-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold text-white mb-2">Q.H. Ingeniería y Servicios S.A.</h4>
            <p className="mb-4">Especialistas en mantenimiento e instalación de bombas hidráulicas. Servicio confiable y profesional en Rosario y alrededores.</p>
            <p className="text-sm">&copy; {new Date().getFullYear()} Q.H. Ingeniería y Servicios S.A. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <p><strong>Teléfono:</strong> (341) 461-5505</p>
            <p><strong>Email:</strong> qhingenieria@qhingenieria.com</p>
            <p><strong>Ubicación:</strong> Arijon 3274. Rosario, Santa Fe, Argentina</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-600">Instagram</a>
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-blue-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }