import React from 'react';
import { SCENARIOS } from '../data/siteData';
import { CheckCircle2, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';

interface ScenariosSectionProps {
  onSelectScenarioForContact?: (scenarioTitle: string) => void;
}

export const ScenariosSection: React.FC<ScenariosSectionProps> = ({ onSelectScenarioForContact }) => {
  const handleContactWithScenario = (title: string) => {
    if (onSelectScenarioForContact) {
      onSelectScenarioForContact(title);
    } else {
      const contactEl = document.getElementById('contacto');
      if (contactEl) {
        const headerOffset = 80;
        const elementPosition = contactEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="escenarios"
      className="py-20 md:py-28 bg-[#f0f5f2] border-b border-[#004e41]/10 relative"
      aria-label="Escenarios de intervención"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004e41]/10 text-xs font-bold text-[#004e41] uppercase tracking-wider mb-3">
            <span>Escenarios de Intervención</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight mb-4">
            ¿Tu organización está atravesando alguno de estos escenarios?
          </h2>
          <p className="text-base sm:text-lg text-[#3d544f] leading-relaxed">
            Identificamos los puntos de fricción más habituales en la gestión de destinos y organizaciones turísticas para transformarlos en planes de acción sostenibles.
          </p>
        </div>

        {/* Grid of the 5 Situations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SCENARIOS.map((scenario, index) => {
            const isWideCard = index === 3 || index === 4;
            return (
              <div
                key={scenario.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 border border-[#004e41]/15 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isWideCard ? 'lg:col-span-1 md:col-span-1' : ''
                }`}
              >
                {/* Accent top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#004e41] group-hover:bg-[#59c99d] transition-colors" />

                <div>
                  {/* Top line with sequence number and tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold text-[#004e41] bg-[#004e41]/10 px-2.5 py-0.5 rounded">
                      0{index + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-[#c74000] bg-[#fff0ea] border border-[#ff5204]/20 px-2 py-0.5 rounded-full">
                      {scenario.impactTag}
                    </span>
                  </div>

                  {/* Problem as Concrete Situation */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#004e41] leading-snug mb-3 group-hover:text-[#00382f] transition-colors">
                    {scenario.problemTitle}
                  </h3>

                  {/* Concrete Problem description */}
                  <p className="text-xs sm:text-sm text-[#4a5f59] leading-relaxed mb-5">
                    {scenario.problemDescription}
                  </p>

                  {/* How Eequa aborda el problema */}
                  <div className="p-4 rounded-xl bg-[#f7faf8] border border-[#004e41]/10 mb-5">
                    <div className="flex items-center gap-1.5 mb-1.5 text-[#004e41]">
                      <Sparkles className="w-3.5 h-3.5 text-[#59c99d]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#004e41]">
                        Abordaje Eequa
                      </span>
                    </div>
                    <p className="text-xs text-[#28423d] leading-relaxed mb-3">
                      {scenario.solutionApproach}
                    </p>

                    <div className="space-y-1.5 pt-2.5 border-t border-[#004e41]/10">
                      {scenario.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#3d5650]">
                          <CheckCircle2 className="w-3 h-3 text-[#59c99d] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card footer with CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleContactWithScenario(scenario.problemTitle)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#004e41]/5 text-[#004e41] hover:bg-[#004e41] hover:text-white transition-all text-xs font-semibold group/btn"
                  >
                    <span>Consultar por este escenario</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global assistance banner for general inquiries */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#004e41] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#59c99d]/20 flex items-center justify-center shrink-0 text-[#dfff90]">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-0.5">
                ¿Tu situación combina varios de estos desafíos?
              </h4>
              <p className="text-xs sm:text-sm text-[#b8ded4]">
                El turismo de bienestar requiere articular simultáneamente estrategia, equipos, operativa y comunicación.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleContactWithScenario('Diagnóstico integral de situación')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#dfff90] text-[#00382f] text-xs sm:text-sm font-bold hover:bg-[#ccee77] active:scale-[0.98] transition-all shrink-0"
          >
            <span>Solicitar diagnóstico integral</span>
            <ArrowRight className="w-4 h-4 text-[#00382f]" />
          </button>
        </div>

      </div>
    </section>
  );
};
