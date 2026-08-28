import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
}

const HERO_IMAGE_ID = '1Sy5GtoNM190GLp3SxDaEzwMzz4i50XZA';

const HERO_IMAGE_SRCS = [
  `https://lh3.googleusercontent.com/d/${HERO_IMAGE_ID}`,
  `https://drive.google.com/thumbnail?id=${HERO_IMAGE_ID}&sz=w1600`,
  `https://drive.google.com/uc?export=view&id=${HERO_IMAGE_ID}`,
];

export const Hero: React.FC<HeroProps> = () => {
  const [imgSrcIndex, setImgSrcIndex] = useState(0);

  const handleImgError = () => {
    if (imgSrcIndex < HERO_IMAGE_SRCS.length - 1) {
      setImgSrcIndex((prev) => prev + 1);
    }
  };

  const handleScrollTo = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-[#f7faf8] border-b border-[#004e41]/10"
      aria-label="Presentación Eequa Consultora"
    >
      {/* Subtle organic contour line background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-grid-subtle" />
      
      {/* Ambient forest-toned soft gradients for depth */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#59c99d]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#dfff90]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline, Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004e41]/8 border border-[#004e41]/15 mb-6 text-xs font-semibold text-[#004e41] tracking-tight">
              <span className="w-2 h-2 rounded-full bg-[#59c99d] animate-pulse"></span>
              <span>Estrategia · Marketing · Desarrollo Organizacional</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#004e41] leading-[1.08] mb-6">
              Consultora especializada en{' '}
              <span className="relative inline-block text-[#004e41]">
                territorios y destinos
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#59c99d]/60"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M0,7 Q50,0 100,7"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Value Proposition Copy */}
            <p className="text-lg sm:text-xl text-[#344b46] font-normal leading-relaxed max-w-2xl mb-8">
              Acompañamos a organizaciones públicas y privadas a diseñar, gestionar y comunicar proyectos y destinos turísticos, integrando estrategia, marketing y desarrollo organizacional.
            </p>

            {/* Action Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('escenarios')}
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#004e41] text-white font-semibold text-base hover:bg-[#00382f] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#004e41]/20 group"
              >
                <span>Conocé cómo podemos ayudarte</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5204]"></span>
                <ArrowUpRight className="w-5 h-5 text-[#59c99d] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition (Territory & Thermal Wellbeing) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#004e41]">
                {/* Visual authentic landscape of natural thermal water & pristine territory from user's Drive */}
                <div className="relative h-80 sm:h-96 md:h-[440px] w-full">
                  <img
                    src={HERO_IMAGE_SRCS[imgSrcIndex]}
                    alt="Paisaje y entorno de turismo de bienestar - Eequa Consultora"
                    referrerPolicy="no-referrer"
                    onError={handleImgError}
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                    loading="eager"
                  />
                  {/* Subtle Forest overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004e41]/90 via-[#004e41]/20 to-transparent" />
                  
                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#dfff90]"></span>
                      <p className="text-xs uppercase tracking-widest text-[#dfff90] font-semibold">
                        Turismo de Bienestar
                      </p>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-white/95 leading-snug">
                      Destinos, organizaciones, personas, experiencias y desarrollo sustentable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Strategic Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl p-4 shadow-xl border border-[#004e41]/10 max-w-[260px] sm:max-w-[280px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#59c99d]/20 flex items-center justify-center text-[#004e41]">
                    <Sparkles className="w-4 h-4 text-[#004e41]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#004e41]">Modelo de Trabajo</p>
                    <p className="text-[11px] text-[#557069]">Articulación integral</p>
                  </div>
                </div>
                <p className="text-xs text-[#304742] leading-tight">
                  Unimos la visión de largo plazo con la capacidad de los equipos para ejecutar en el día a día.
                </p>
              </div>

              {/* Decorative Brand Accent Dot */}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#ff5204] border-2 border-white shadow-md flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
