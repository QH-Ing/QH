'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Info, PhoneCall, Package, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const showBorderAlways = pathname === '/products' || pathname === '/projects';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  useEffect(() => {
    const handleScrollCloseMenu = () => {
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScrollCloseMenu);
    return () => window.removeEventListener('scroll', handleScrollCloseMenu);
  }, [menuOpen]);

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
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleMenuClick = (id: string) => {
    setMenuOpen(false);
    if (pathname === '/') {
      setTimeout(() => scrollToSection(id), 50);
    } else {
      router.push(`/#${id}`);
    }
  };

  const menuItems = [
    { label: 'Sobre Nosotros', id: 'sobre-nosotros', icon: <Info size={18} /> },
    { label: 'Servicios', id: 'servicios', icon: <Layers size={18} /> },
    { label: 'Productos', href: '/products', icon: <Package size={18} /> },
    { label: 'Contacto', id: 'contacto', icon: <PhoneCall size={18} /> },
  ];

  return (
    <>
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

      <header
        className={`sticky top-0 z-50 transition-colors duration-300 ${
          scrolled || showBorderAlways ? 'bg-white/30 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex items-center justify-between py-6 px-6 md:px-16">
          <div
            onClick={() => router.push('/')}
            className="cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Image
                src="/logo-qh-2.png"
                alt="Logo"
                width={200}
                height={100}
                className="h-8 md:h-10 w-auto"
              />
            </motion.div>
          </div>


          <button
            id="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 cursor-pointer"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-10 text-gray-800 text-m tracking-wide">
            {menuItems.map(({ label, id, href }, index) => (
              <li key={label} className="relative group pb-1">
                {href ? (
                  <a
                    href={href}
                    className="cursor-pointer transition-colors duration-300 hover:text-black"
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 ${
                        index % 2 === 0 ? 'bg-orange-600 group-hover:w-full' : 'bg-green-700 group-hover:w-full'
                      }`}
                    />
                  </a>
                ) : (
                  <button
                    onClick={() => handleMenuClick(id!)}
                    className="cursor-pointer transition-colors duration-300 hover:text-black"
                  >
                    {label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] w-0 transition-all duration-300 ${
                        index % 2 === 0 ? 'bg-orange-600 group-hover:w-full' : 'bg-green-700 group-hover:w-full'
                      }`}
                    />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {(scrolled || showBorderAlways) && (
          <div className="flex h-1 overflow-hidden">
            <motion.div
              className="bg-green-700 h-full w-1/2 origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="bg-orange-600 h-full w-1/2 origin-center"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
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
            className="fixed top-[80px] left-4 right-4 bg-white/80 backdrop-blur-lg z-50 flex flex-col gap-6 px-6 py-8 rounded-2xl shadow-xl md:hidden border border-gray-200"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="menu"
          >
            {menuItems.map(({ label, id, href, icon }, ) => (
              <li key={label} role="menuitem">
                {href ? (
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="cursor-pointer flex items-center gap-2 text-gray-800 text-lg font-medium px-1 py-1 rounded-md transition-all duration-300 hover:bg-green-100"
                  >
                    {icon} {label}
                  </a>
                ) : (
                  <button
                    onClick={() => handleMenuClick(id!)}
                    className="cursor-pointer flex items-center gap-2 text-gray-800 text-lg font-medium w-full text-left px-1 py-1 rounded-md transition-all duration-300 hover:bg-green-100"
                  >
                    {icon} {label}
                  </button>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
