import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-xl border-b border-gray-100'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo copy.jpg" 
              alt="Verde Sabroso Logo" 
              className="h-14 w-auto drop-shadow-sm"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-800 hover:text-green-600 font-semibold text-lg transition-all duration-300 hover:scale-105 relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-gray-800 hover:text-green-600 font-semibold text-lg transition-all duration-300 hover:scale-105 relative group"
            >
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('galeria')}
              className="text-gray-800 hover:text-green-600 font-semibold text-lg transition-all duration-300 hover:scale-105 relative group"
            >
              Galería
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-800 hover:text-green-600 font-semibold text-lg transition-all duration-300 hover:scale-105 relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-100">
            <nav className="flex flex-col py-6">
              <button
                onClick={() => scrollToSection('inicio')}
                className="px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-green-50 text-left font-semibold text-lg transition-all duration-200"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-green-50 text-left font-semibold text-lg transition-all duration-200"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('galeria')}
                className="px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-green-50 text-left font-semibold text-lg transition-all duration-200"
              >
                Galería
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="px-6 py-4 text-gray-800 hover:text-green-600 hover:bg-green-50 text-left font-semibold text-lg transition-all duration-200"
              >
                Contacto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;