'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll cuando menú abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  // Cerrar menú al hacer scroll
  useEffect(() => {
    const handleScrollCloseMenu = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScrollCloseMenu);
    return () => window.removeEventListener('scroll', handleScrollCloseMenu);
  }, [menuOpen]);

  // Cerrar menú al clickear fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('#menu-toggle')
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }, 50);
  };

  const menuItems = [
    { label: 'Sobre Nosotros', id: 'sobre-nosotros' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Por qué elegirnos', id: 'por-que-elegirnos' },
    { label: 'Proyectos', id: 'proyectos' },
    { label: 'Contacto', id: 'contacto' },
  ];

  return (
    <>
      {/* Overlay de blur - siempre fuera del header */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/10 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-white/30 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className=" mx-auto flex items-center justify-between py-6 px-6">
          <div className="text-2xl font-bold text-gray-900">QH Ingeniería <br className="block md:hidden" /> y Servicios</div>

          {/* Botón hamburguesa */}
          <button
            id="menu-toggle"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 cursor-pointer"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menú Desktop */}
          <ul className="hidden md:flex gap-8 text-gray-700">
            {menuItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="hover:text-blue-600 transition"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Línea doble de borde inferior */}
        {scrolled && (
          <div className="flex h-1 overflow-hidden">
            <motion.div
              className="bg-green-700 h-full w-1/2 origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4 }}
              style={{ transformOrigin: 'center' }}
            />
            <motion.div
              className="bg-orange-600 h-full w-1/2 origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ transformOrigin: 'center' }}
            />
          </div>
        )}
      </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            id="mobile-menu"
            ref={menuRef}
            className="fixed top-[80px] left-0 right-0 bg-white z-50 flex flex-col gap-6 px-6 py-6 shadow-md md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            role="menu"
          >
            {menuItems.map(({ label, id }) => (
              <li key={id} role="menuitem">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                  href={`#${id}`}
                  className="block text-gray-700 hover:text-blue-600 transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
