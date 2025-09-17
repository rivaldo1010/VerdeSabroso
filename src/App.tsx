import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductsSection from './components/ProductsSection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#FDFDCC]">
      <Header />
      <Hero />
      <ProductsSection />
      <Gallery />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;