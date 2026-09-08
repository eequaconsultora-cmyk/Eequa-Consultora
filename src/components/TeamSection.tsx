import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data/siteData';
import { Award, Briefcase, Users, CheckCircle, Network, Quote, ArrowUpRight, Sparkles } from 'lucide-react';

const MemberAvatar: React.FC<{ name: string; fileId: string }> = ({ name, fileId }) => {
  const sources = [
    `https://lh3.googleusercontent.com/d/${fileId}`,
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`,
    `https://drive.google.com/uc?export=view&id=${fileId}`,
  ];
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="relative shrink-0">
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-[#59c99d] shadow-md bg-white p-1">
        <img
          src={sources[srcIndex]}
          alt={`Retrato de ${name} - Eequa Consultora`}
          referrerPolicy="no-referrer"
          onError={() => {
            if (srcIndex < sources.length - 1) {
              setSrcIndex((prev) => prev + 1);
            } else {
              setFailed(true);
            }
          }}
          className="w-full h-full object-cover object-top rounded-xl"
          loading="lazy"
        />
      </div>
      <div className="absolute -bottom-1.5 -right-1.5 bg-[#004e41] text-[#dfff90] text-[10px] font-bold px-2 py-0.5 rounded-full border border-white shadow-xs">
        Eequa
      </div>
    </div>
  );
};

export const TeamSection: React.FC = () => {
  return (
    <section
      id="quienes-somos"
      className="py-20 md:py-28 bg-[#ffffff] border-b border-[#004e41]/10 relative"
      aria-label="Quiénes Somos y Red de Profesionales"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#004e41]/10 text-xs font-bold text-[#004e41] uppercase tracking-wider mb-3">
            <span>Experiencia & Liderazgo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight mb-4">
            Quiénes Somos
          </h2>
          <p className="text-base sm:text-lg text-[#3d544f] leading-relaxed">
            Combinamos conocimiento técnico en turismo, trayectoria concreta en la dirección de complejos y destinos, y especialización en marketing y comunicación estratégica.
          </p>
        </div>

        {/* 2 Leadership Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-[#fbfdfc] rounded-2xl border border-[#004e41]/15 p-7 sm:p-9 flex flex-col justify-between hover:border-[#004e41]/40 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Header: Name, Role & Prominent Photo aligned */}
                <div className="mb-6 pb-6 border-b border-[#004e41]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#004e41]">
                        {member.name}
                      </h3>
                      <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-[#59c99d]/20 text-[#004e41]">
                        Co-Fundadora
                      </span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-[#486b62]">
                      {member.role}
                    </p>
                  </div>

                  {member.photoDriveId ? (
                    <MemberAvatar name={member.name} fileId={member.photoDriveId} />
                  ) : (
                    <div className="shrink-0 hidden sm:flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-[#004e41]/5 border border-[#004e41]/10 text-[#004e41]/50 p-2">
                      <Users className="w-7 h-7 mb-1 text-[#004e41]" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#004e41]">
                        Co-Fundadora
                      </span>
                    </div>
                  )}
                </div>

                {/* Biography Paragraphs strictly from source */}
                <div className="space-y-3.5 mb-6 text-sm text-[#2c423d] leading-relaxed">
                  {member.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Formal Credentials List */}
                <div className="mb-6 p-4 rounded-xl bg-[#f0f7f4] border border-[#59c99d]/25">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#004e41] block mb-2.5">
                    Trayectoria y Formación:
                  </span>
                  <div className="space-y-2">
                    {member.credentials.map((cred, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#203a34]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#004e41] shrink-0 mt-0.5" />
                        <span>{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote (if present) */}
                {member.quote ? (
                  <div className="p-4 rounded-xl bg-white border border-[#004e41]/10 italic text-xs text-[#425d57] flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-[#59c99d] shrink-0 mt-0.5" />
                    <p>"{member.quote}"</p>
                  </div>
                ) : null}
              </div>

              {/* Action */}
              <div className="pt-5 border-t border-[#004e41]/10 mt-6 flex items-center justify-end">
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004e41] hover:text-[#00382f]"
                >
                  <span>Conversar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#59c99d]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Section 11: Red de Profesionales */}
        <div className="rounded-2xl bg-[#004e41] text-white p-8 sm:p-12 relative overflow-hidden">
          {/* Ambient background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#59c99d]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#59c99d]/20 text-[#dfff90] text-xs font-bold uppercase tracking-wider mb-4">
              <Network className="w-3.5 h-3.5" />
              <span>Equipos interdisciplinarios</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Una mirada integral también requiere distintas miradas profesionales.
            </h3>

            <p className="text-sm sm:text-base text-[#d8eee6] leading-relaxed mb-6">
              Eequa cuenta con una red de profesionales de distintas disciplinas que se incorporan de acuerdo con las necesidades específicas de cada proyecto, garantizando un abordaje adaptado al contexto.
            </p>

            {/* Core Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/15 text-xs">
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <span className="font-bold text-[#dfff90] block text-sm mb-1">Equipo flexible</span>
                <span className="text-white/85 leading-relaxed">Conformamos estructuras ágiles que se adaptan a la escala de cada desafío.</span>
              </div>
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                <span className="font-bold text-[#59c99d] block text-sm mb-1">Conocimiento especializado</span>
                <span className="text-white/85 leading-relaxed">Logramos aportes técnicos puntuales según la temática del proyecto.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
