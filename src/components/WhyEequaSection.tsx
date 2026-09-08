import React, { useState } from 'react';
import { WHY_EEQUA_POINTS } from '../data/siteData';
import { Target, Compass, Users2, MessageSquare, MapPin, Sparkles } from 'lucide-react';

const WELLNESS_IMAGE_ID = '1O_hOsQ2L5qYvUre86e82ESNDFOuw_oRk';

const WELLNESS_IMAGE_SRCS = [
  `https://lh3.googleusercontent.com/d/${WELLNESS_IMAGE_ID}`,
  `https://drive.google.com/thumbnail?id=${WELLNESS_IMAGE_ID}&sz=w1600`,
  `https://drive.google.com/uc?export=view&id=${WELLNESS_IMAGE_ID}`,
];

export const WhyEequaSection: React.FC = () => {
  const [imgSrcIndex, setImgSrcIndex] = useState(0);

  const handleImgError = () => {
    if (imgSrcIndex < WELLNESS_IMAGE_SRCS.length - 1) {
      setImgSrcIndex((prev) => prev + 1);
    }
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'mirada-estrategica':
        return <Target className="w-5 h-5" />;
      case 'conocimiento-turismo':
      case 'experiencia-gestion':
        return <Compass className="w-5 h-5" />;
      case 'desarrollo-organizacional':
        return <Users2 className="w-5 h-5" />;
      case 'comunicacion-proposito':
        return <MessageSquare className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="enfoque"
      className="py-20 md:py-28 bg-[#f0f5f2] border-b border-[#004e41]/10 relative scroll-mt-20"
      aria-label="Nuestro Enfoque"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight mb-5">
            Nuestro Enfoque
          </h2>
          <p className="text-lg text-[#374f49] font-medium leading-relaxed mb-2">
            Integramos estrategia, gestión, comunicación y desarrollo organizacional.
          </p>
          <p className="text-sm sm:text-base text-[#57726b] max-w-2xl mx-auto leading-relaxed">
            Ante las problemáticas turísticas o institucionales pensamos soluciones integrales. Conectamos cada eslabón para que las decisiones se traduzcan en impacto real.
          </p>
        </div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {WHY_EEQUA_POINTS.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-9 border border-[#004e41]/15 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#004e41] text-[#59c99d] flex items-center justify-center shadow-sm">
                  {getIcon(item.id)}
                </div>
                <span className="text-xs font-mono font-bold text-[#004e41] bg-[#004e41]/10 px-2 py-0.5 rounded">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#004e41] mb-2">
                {item.title}
              </h3>
              
              <p className="text-xs font-bold text-[#59746d] uppercase tracking-wider mb-3">
                {item.highlight}
              </p>

              <p className="text-sm sm:text-base text-[#2f4641] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Editorial Highlight Card: Presencia en el territorio */}
        <div className="rounded-2xl overflow-hidden bg-[#004e41] border border-[#004e41]/20 shadow-lg text-white grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#59c99d]/20 text-[#dfff90] text-xs font-bold uppercase tracking-wider mb-5">
              <MapPin className="w-3.5 h-3.5" />
              <span>Presencia en el territorio</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              El verdadero valor de un destino se descubre y se construye estando ahí.
            </h3>
          </div>

          <div className="lg:col-span-5 h-64 sm:h-72 lg:h-full relative min-h-[260px]">
            <img
              src={WELLNESS_IMAGE_SRCS[imgSrcIndex]}
              alt="Presencia en el territorio - Eequa Consultora"
              referrerPolicy="no-referrer"
              onError={handleImgError}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#004e41] via-[#004e41]/20 to-transparent" />
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#00382f]/80 backdrop-blur-xs text-[11px] text-[#dfff90]">
              Presencia en el territorio
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
