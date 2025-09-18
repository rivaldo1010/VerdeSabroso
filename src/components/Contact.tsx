import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "Abel Castillo y Bolivia (Esquina)",
      subtitle: "Guayaquil, Ecuador",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+593984094824",
      subtitle: "WhatsApp disponible",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horario",
      content: "Marte a Domingo",
      subtitle: "7:30 AM - 1:00 PM",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Redes Sociales",
      content: "Tik Tok : @verde.sabroso, Instagram : @verdesabrosoec",
      subtitle: "Síguenos en redes",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contacto" ref={sectionRef} className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-green-600">Contáctanos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para servirte. ¡Ven a visitarnos o haz tu pedido!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900 font-semibold mb-1">
                  {item.content}
                </p>
                <p className="text-gray-600 text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps */}
        <div className={`transform transition-all duration-700 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-6xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Nuestra Ubicación
            </h3>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1758073174354!6m8!1m7!1sIelgLnL7gywzZMKigpHLDQ!2m2!1d-2.20834377757663!2d-79.90470066334473!3f113.4!4f-6.799999999999997!5f0.7820865974627469"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 rounded-xl"
                title="Ubicación Verde Sabroso"
              ></iframe>
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://maps.app.goo.gl/ZCX44VkscGi77geh7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                <MapPin className="w-5 h-5" />
                Ver en Google Maps
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              ¿Listo para disfrutar?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Haz tu pedido ahora y disfruta de nuestros deliciosos platos hechos con amor
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/593984094824?text=Hola%20que%20tal%2C%20me%20gustar%C3%ADa%20pedir%20algo%20de%20Verde%20Sabroso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              
              <a
                href="tel:+593984094824"
                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                <span className="font-semibold">Verde Sabroso</span> - 
                El mejor sabor de Guayaquil en cada bocado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;