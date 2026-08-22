import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ScenariosSection } from './components/ScenariosSection';
import { ServicesSection } from './components/ServicesSection';
import { ApproachSection } from './components/ApproachSection';
import { TeamSection } from './components/TeamSection';
import { WhyEequaSection } from './components/WhyEequaSection';
import { MethodologySection } from './components/MethodologySection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const handleSelectScenarioForContact = (scenarioTitle: string) => {
    setSelectedSubject(`Consulta sobre escenario: ${scenarioTitle}`);
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      const headerOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

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

        {/* 2. Escenarios ("¿En qué escenarios podemos aportar valor?") */}
        <ScenariosSection onSelectScenarioForContact={handleSelectScenarioForContact} />

        {/* 3. Servicios ("Nuestros Servicios") */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* 4. Enfoque Integral ("Nuestro Enfoque") */}
        <ApproachSection />

        {/* 5. ¿Por qué Eequa? (Diferenciales) */}
        <WhyEequaSection />

        {/* 6. Quiénes Somos & Red de Profesionales */}
        <TeamSection />

        {/* 7. Cómo Trabajamos (Metodología de intervención) */}
        <MethodologySection />

        {/* 8. Insights & Perspectivas */}
        <InsightsSection />

        {/* 9. Contacto & Trabajemos Juntos */}
        <ContactSection initialSubject={selectedSubject} />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
