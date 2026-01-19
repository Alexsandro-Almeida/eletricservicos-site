'use client';

import { useState, useEffect } from 'react';
import { hover, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-lg border-b border-navy' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-white">
          
          <img style={{
            width: '10%',
            borderRadius: '100%',
          }} src="/assets/logos/logo1.jpg" alt="logo" />
          
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 transition-colors hover:text-navy"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-full border-2 border-navy bg-navy px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-transparent"
          >
            Fale Conosco
          </a>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-navy bg-dark/95 backdrop-blur-lg md:hidden"
        >
          <div className="flex flex-col gap-4 px-4 py-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 transition-colors hover:text-navy"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 rounded-full border-2 border-navy bg-navy px-5 py-3 text-center font-semibold text-white transition-all hover:bg-transparent"
            >
              Fale Conosco
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
