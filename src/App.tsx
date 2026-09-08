import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyEequaSection } from './components/WhyEequaSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setSelectedSubject(`Consulta sobre servicio: ${serviceTitle}`);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      const headerOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7faf8] text-[#132622] font-sans antialiased selection:bg-[#59c99d]/30 selection:text-[#004e41]">
      
      {/* Fixed Sticky Header Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Servicios ("Nuestros Servicios") */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 3. Nuestro Enfoque (Pilares Estratégicos & Territorio) */}
        <WhyEequaSection />

        {/* 4. Quiénes Somos & Red de Profesionales */}
        <TeamSection />

        {/* 5. Contacto & Trabajemos Juntos */}
        <ContactSection initialSubject={selectedSubject} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
