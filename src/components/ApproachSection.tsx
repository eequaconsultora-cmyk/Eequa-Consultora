import React from 'react';
import { APPROACH_STEPS } from '../data/siteData';
import { Workflow, ArrowRight } from 'lucide-react';

export const ApproachSection: React.FC = () => {
  return (
    <section
      id="enfoque"
      className="py-20 md:py-28 bg-[#f7faf8] border-b border-[#004e41]/10 relative overflow-hidden"
      aria-label="Nuestro Enfoque Integrado"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#004e41]/10 text-xs font-bold text-[#004e41] uppercase tracking-wider mb-4">
            <Workflow className="w-3.5 h-3.5 text-[#004e41]" />
            <span>Diferencial de Método</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight mb-5">
            Nuestro Enfoque
          </h2>
          <p className="text-lg text-[#374f49] font-medium leading-relaxed">
            Integramos estrategia, gestión, comunicación y desarrollo organizacional.
          </p>
          <p className="text-sm sm:text-base text-[#57726b] mt-2 max-w-2xl mx-auto">
            Ninguna problemática turística o institucional puede resolverse de forma aislada. Conectamos cada eslabón para que las decisiones se traduzcan en impacto real sobre el territorio.
          </p>
        </div>

        {/* Integrated Flow Grid: 6 connected steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {APPROACH_STEPS.map((step, index) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#004e41]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top border bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#004e41] group-hover:bg-[#59c99d] transition-colors" />

              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-[#004e41] bg-[#004e41]/10 px-2.5 py-0.5 rounded">
                    Fase {step.stepNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-[#59756f] uppercase tracking-wider">
                    {step.tagline}
                  </span>
                </div>

                {/* Step title */}
                <h3 className="text-xl font-bold text-[#004e41] mb-3 group-hover:text-[#00382f] transition-colors">
                  {step.name}
                </h3>

                {/* Step description */}
                <p className="text-xs sm:text-sm text-[#4a5f59] leading-relaxed mb-5">
                  {step.description}
                </p>
              </div>

              {/* Guiding Question Box */}
              <div className="p-3.5 rounded-xl bg-[#f7faf8] border border-[#004e41]/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#004e41] block mb-1">
                  Pregunta guía:
                </span>
                <p className="text-xs font-medium text-[#203a34] italic">
                  "{step.keyQuestion}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Value chain connectivity banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#004e41] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Un ciclo continuo de valor para el territorio
            </h4>
            <p className="text-xs sm:text-sm text-[#b8ded4]">
              Estrategia → Gestión → Organización → Comunicación → Experiencia → Resultados
            </p>
          </div>

          <a
            href="#contacto"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#dfff90] text-[#00382f] text-xs sm:text-sm font-bold hover:bg-[#ccee77] active:scale-[0.98] transition-all shrink-0"
          >
            <span>Conversar sobre tu proyecto</span>
            <ArrowRight className="w-4 h-4 text-[#00382f]" />
          </a>
        </div>

      </div>
    </section>
  );
};

