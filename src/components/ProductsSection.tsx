import React, { useState, useEffect, useRef } from 'react';

const ProductsSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const products = [
    {
      id: 1,
      title: "Tortillas de Verde",
      description: "Deliciosas tortillas hechas con plátano verde fresco",
      varieties: ["Queso", "Carne", "Pollo", "bistec de carne "],
      image: "/Imagen de WhatsApp 2025-09-16 a las 19.39.48_05d54a29.jpg",
      color: "from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Empanadas de Verde",
      description: "Crujientes empanadas rellenas con los mejores ingredientes",
      varieties: ["Queso", "Pollo", "Carne", "bistec de carne "],
      image: "/Imagen de WhatsApp 2025-09-16 a las 19.39.48_ec50d2f1.jpg",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 3,
      title: "Patacones de Verde",
      description: "Tradicionales patacones acompañados con queso y huevo",
      varieties: ["Con Queso", "Con Huevo", "bistec de carne"],
      image: "/Imagen de WhatsApp 2025-09-16 a las 19.39.48_9bf91140.jpg",
      color: "from-green-500 to-green-700"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const productElements = sectionRef.current?.querySelectorAll('.product-item');
    productElements?.forEach((el) => observer.observe(el));

    return () => {
      productElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="productos" ref={sectionRef} className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestros <span className="text-green-600">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada plato es preparado con amor usando nuestra receta secreta y los ingredientes más frescos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-index={index}
              className={`product-item bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20`}></div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Varieties */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Variedades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.varieties.map((variety, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${product.color} shadow-sm`}
                      >
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <a
                  href={`https://wa.me/593989572810?text=Hola%20que%20tal%2C%20me%20gustar%C3%ADa%20pedir%20${product.title}%20de%20Verde%20Sabroso`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-block text-center py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r ${product.color} hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
                >
                  Pedir Ahora
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">100% Natural</h3>
            <p className="text-gray-600">Ingredientes frescos y naturales sin conservantes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Receta Secreta</h3>
            <p className="text-gray-600">Sabor único que nos distingue de la competencia</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-lg text-gray-800 mb-2">Servicio Rápido</h3>
            <p className="text-gray-600">Preparamos tus pedidos con rapidez y calidad</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;