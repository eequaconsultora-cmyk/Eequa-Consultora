import React, { useState } from 'react';
import { METHODOLOGY_FRAMEWORK } from '../data/siteData';
import { Layers, ArrowRight, ShieldAlert, CheckCircle2 } from 'lucide-react';

const FIELDWORK_IMAGE_ID = '1-t_DZxX0OrKV8vfKf6DZOP-asV4ih34s';

const FIELDWORK_IMAGE_SRCS = [
  `https://lh3.googleusercontent.com/d/${FIELDWORK_IMAGE_ID}`,
  `https://drive.google.com/thumbnail?id=${FIELDWORK_IMAGE_ID}&sz=w1600`,
  `https://drive.google.com/uc?export=view&id=${FIELDWORK_IMAGE_ID}`,
];

export const MethodologySection: React.FC = () => {
  const [imgSrcIndex, setImgSrcIndex] = useState(0);

  const handleImgError = () => {
    if (imgSrcIndex < FIELDWORK_IMAGE_SRCS.length - 1) {
      setImgSrcIndex((prev) => prev + 1);
    }
  };

  return (
    <section
      id="metodologia"
      className="py-20 md:py-28 bg-[#ffffff] border-b border-[#004e41]/10 relative"
      aria-label="Metodología y Marco de Intervención"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004e41]/10 text-xs font-bold text-[#004e41] uppercase tracking-wider mb-3">
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight mb-4">
            Cómo Trabajamos
          </h2>
          <p className="text-base sm:text-lg text-[#3d544f] leading-relaxed">
            Estructuramos cada intervención a través de cinco etapas ordenadas para asegurar diagnósticos realistas, acompañamiento cercano y resultados verificables.
          </p>
        </div>

        {/* 5 Step Methodology Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {METHODOLOGY_FRAMEWORK.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#fbfdfc] border border-[#004e41]/15 rounded-xl p-5 flex flex-col justify-between hover:border-[#004e41]/40 transition-all duration-200"
            >
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#59c99d] bg-[#004e41] px-2 py-0.5 rounded inline-block mb-3">
                  {step.phase}
                </span>
                <h3 className="text-lg font-bold text-[#004e41] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#354f49] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#004e41]/10 text-[11px] text-[#004e41] font-medium">
                <span className="font-bold text-[#004e41] block text-[10px] uppercase text-[#59746e]">
                  Entregable:
                </span>
                {step.outcome}
              </div>
            </div>
          ))}
        </div>

        {/* Framework Prepared for Case Studies with Fieldwork Illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f0f7f4] border border-[#59c99d]/30 rounded-2xl overflow-hidden p-6 sm:p-8">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004e41]/10 text-xs font-bold text-[#004e41] uppercase tracking-wider mb-3">
              <span>Trabajo en Terreno & Facilitación</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#004e41] mb-2">
              Presencia en territorio y articulación con los actores locales
            </h4>
            <p className="text-xs sm:text-sm text-[#3b544e] leading-relaxed mb-6">
              Nuestra metodología combina el rigor técnico con la escucha activa en terreno: facilitamos talleres participativos con prestadores, equipos municipales y directivos para construir consensos que se sostengan en el tiempo.
            </p>

            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#004e41] text-white text-xs font-bold hover:bg-[#00382f] transition-colors"
            >
              <span>Analizar mi caso o destino</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#59c99d]" />
            </a>
          </div>

          <div className="lg:col-span-5 h-72 sm:h-80 lg:h-full min-h-[280px] rounded-xl overflow-hidden relative shadow-sm border border-[#004e41]/10 bg-[#004e41]/5">
            <img
              src={FIELDWORK_IMAGE_SRCS[imgSrcIndex]}
              alt="Talleres de capacitación y facilitación en territorio - Eequa Consultora"
              referrerPolicy="no-referrer"
              onError={handleImgError}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004e41]/85 via-[#004e41]/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-medium">
              Talleres participativos & desarrollo de capacidades locales
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
