import React from 'react';
import { Logo } from './Logo';
import { BRAND_INFO } from '../data/siteData';
import { Mail, Phone, ArrowUp, Globe, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#00382f] text-white pt-16 pb-12 border-t border-[#59c99d]/20 relative" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Positioning */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo variant="footer" size="md" className="mb-4" />
            
            <p className="text-sm font-semibold text-[#dfff90] mb-3">
              {BRAND_INFO.tagline}
            </p>

            <p className="text-xs text-[#b8d9ce] leading-relaxed max-w-sm mb-6">
              Acompañamos a organizaciones públicas y privadas a diseñar, gestionar y comunicar destinos de turismo de bienestar, integrando estrategia, marketing y desarrollo organizacional.
            </p>

            {/* Social Channels & Email */}
            <div className="flex items-center gap-3 text-xs text-[#a0c7bb]">
              <span className="text-[11px] uppercase tracking-wider text-[#59c99d] font-semibold">
                Canales:
              </span>
              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#59c99d] hover:text-[#00382f] transition-all"
                title="Escribinos por Email"
                aria-label="Email de Eequa Consultora: eequa.consultora@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white transition-all"
                title="Perfil de LinkedIn de Eequa Consultora"
                aria-label="LinkedIn de Eequa Consultora"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-[#e4405f] hover:text-white transition-all"
                title="Instagram @eequa.consultora"
                aria-label="Instagram de Eequa Consultora"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#59c99d] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-[#d0e8e0]">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#escenarios"
                  onClick={(e) => handleNavClick(e, '#escenarios')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Escenarios de Intervención
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  onClick={(e) => handleNavClick(e, '#servicios')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a
                  href="#enfoque"
                  onClick={(e) => handleNavClick(e, '#enfoque')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Nuestro Enfoque Integrado
                </a>
              </li>
              <li>
                <a
                  href="#quienes-somos"
                  onClick={(e) => handleNavClick(e, '#quienes-somos')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Quiénes Somos & Equipo
                </a>
              </li>
              <li>
                <a
                  href="#por-que-eequa"
                  onClick={(e) => handleNavClick(e, '#por-que-eequa')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  ¿Por qué Eequa?
                </a>
              </li>
              <li>
                <a
                  href="#insights"
                  onClick={(e) => handleNavClick(e, '#insights')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Insights & Artículos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={(e) => handleNavClick(e, '#contacto')}
                  className="hover:text-[#dfff90] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact Information */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#59c99d] mb-4">
              Contacto Directo
            </h4>
            
            <div className="space-y-3 text-xs text-[#d0e8e0]">
              <div>
                <span className="text-[11px] text-[#a0c7bb] block">Correo electrónico:</span>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="font-semibold text-white hover:text-[#dfff90] transition-colors"
                >
                  {BRAND_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <span className="text-[11px] text-[#a0c7bb] block mb-1">Teléfonos:</span>
                <p className="text-white">
                  <span className="font-semibold">{BRAND_INFO.contacts[0].phone}</span> — Eliana Francou
                </p>
                <p className="text-white mt-1">
                  <span className="font-semibold">{BRAND_INFO.contacts[1].phone}</span> — Eugenia Blanco
                </p>
              </div>

              <div className="pt-2 border-t border-white/10 text-[11px] text-[#a0c7bb]">
                <p>Especialización en desarrollo territorial, turismo de bienestar y gestión de destinos turísticos.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8ab8aa]">
          <div>
            <p>
              © {new Date().getFullYear()} Eequa Consultora. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#59c99d]">
              Turismo de Bienestar • Argentina
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors text-xs font-semibold"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
