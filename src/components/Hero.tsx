import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-amber-50 to-orange-50"></div>
      
      {/* Floating elements for animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-300 rounded-full opacity-15 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-yellow-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main heading with animation */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span 
                className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent inline-block transform transition-all duration-300 hover:scale-110 animate-pulse"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(1.05)`,
                  textShadow: '0 0 30px rgba(34, 197, 94, 0.3)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                Verde
              </span>
              <br />
              <span 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent inline-block transform transition-all duration-300 hover:scale-110"
                style={{
                  transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px) scale(1.05)`,
                  textShadow: '0 0 30px rgba(251, 146, 60, 0.3)',
                  animation: 'float 3s ease-in-out infinite 1.5s'
                }}
              >
                Sabroso
              </span>
              
              {/* Sparkle effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping opacity-70" style={{animationDelay: '2s'}}></div>
              </div>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Las mejores <span className="font-bold text-green-600">tortillas</span>, 
              <span className="font-bold text-green-600"> empanadas</span> y 
              <span className="font-bold text-green-600"> patacones</span> de verde de Guayaquil
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg text-gray-600 mb-10">
              100% sabor casero • Receta secreta • Ingredientes frescos
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-center mb-16">
              <a
                href="https://wa.me/593989572810?text=Hola%20que%20tal%2C%20me%20gustar%C3%ADa%20pedir%20algo%20de%20Verde%20Sabroso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-green-600 hover:to-green-700 animate-bounce hover:animate-none"
              >
                Pedir Ahora
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button
              onClick={scrollToProducts}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-600 animate-bounce z-10"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;