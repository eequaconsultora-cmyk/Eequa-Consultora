import React from 'react';
import { SERVICES } from '../data/siteData';
import { ArrowUpRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-[#ffffff] border-b border-[#004e41]/10 relative"
      aria-label="Nuestros Servicios"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3d544f] leading-relaxed">
              Trabajamos desde una mirada integral para resolver los desafíos estratégicos, organizacionales y comunicacionales del turismo y sus destinos.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#004e41] hover:text-[#00382f] group pb-1 border-b-2 border-[#59c99d]"
            >
              <span>Quiero conversar sobre mi proyecto</span>
              <ArrowUpRight className="w-4 h-4 text-[#004e41] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* 4 Service Cards Grid (Desktop & Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((pillar) => {
            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-[#004e41]/15 bg-[#fbfdfc] p-7 sm:p-9 flex flex-col justify-between hover:border-[#ff5204]/40 hover:shadow-lg hover:shadow-[#004e41]/5 transition-all duration-300 group"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#ff5204] mb-3 leading-snug">
                    {pillar.title}
                  </h3>

                  {pillar.tagline && (
                    <p className="text-sm font-medium text-[#59756e] mb-4 italic">
                      "{pillar.tagline}"
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#2d423e] leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Detailed Subservices List */}
                  <div className="space-y-3 pt-4 border-t border-[#004e41]/10">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#004e41]">
                      Servicios asociados:
                    </p>
                    {pillar.services.map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-[#59c99d]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#004e41]" />
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-semibold text-[#1a2f2b]">
                            {sub.title}
                          </h4>
                          {sub.description ? (
                            <p className="text-xs text-[#526b64] mt-0.5 leading-normal">
                              {sub.description}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Strategic Framing Note */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#004e41] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
              ¿Necesitás ayuda en tu organización?
            </h4>
            <p className="text-sm text-[#d4ebe2] leading-relaxed">
              Partimos de un diagnóstico del escenario real para definir qué intervenciones tienen prioridad y cómo estructurar una propuesta a la medida de tu presupuesto y tiempos.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('contacto');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#59c99d] text-[#00382f] font-bold text-sm hover:bg-[#dfff90] transition-colors shadow-sm"
          >
            Quiero conversar sobre mi proyecto
          </button>
        </div>

      </div>
    </section>
  );
};
