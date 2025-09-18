import React, { useState, useEffect, useRef } from 'react';

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/Imagen de WhatsApp 2025-09-16 a las 19.39.48_9bf91140.jpg",
      alt: "Patacones con queso, huevo y sopa",
      title: "Patacones"
    },
    {
      id: 2,
      src: "/Imagen de WhatsApp 2025-09-16 a las 19.39.48_ec50d2f1.jpg",
      alt: "Patacones tradicionales",
      title: "Empanadas"
    },
    
    {
      id: 4,
      src: "/Imagen de WhatsApp 2025-09-16 a las 19.39.48_05d54a29.jpg",
      alt: "Tortillas de verde doradas",
      title: "Tortillas"
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

    const galleryElements = sectionRef.current?.querySelectorAll('.gallery-item');
    galleryElements?.forEach((el) => observer.observe(el));

    return () => {
      galleryElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="galeria" ref={sectionRef} className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-green-600">Galería</span> de Sabores
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mira la calidad y presentación de nuestros deliciosos platos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              data-index={index}
              className={`gallery-item group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
                visibleItems[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <p className="text-sm">Click para ver más</p>
                  </div>
                </div>

                {/* Gradient overlay for better text readability */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Te gusta lo que ves?
            </h3>
            <p className="text-gray-600 mb-6">
              ¡Ven a probar nuestros deliciosos platos! Te garantizamos una experiencia culinaria única.
            </p>
            <a
              href="https://wa.me/593984094824?text=Hola%20que%20tal%2C%20me%20gustar%C3%ADa%20pedir%20algo%20de%20Verde%20Sabroso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Hacer Pedido
            </a>
          </div>
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl">
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="object-contain rounded-lg max-w-[90vw] max-h-[80vh]"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;