import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ['inicio', 'escenarios', 'servicios', 'enfoque', 'quienes-somos', 'por-que-eequa', 'insights', 'contacto'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio', id: 'inicio' },
    { label: 'Escenarios', href: '#escenarios', id: 'escenarios' },
    { label: 'Servicios', href: '#servicios', id: 'servicios' },
    { label: 'Nuestro Enfoque', href: '#enfoque', id: 'enfoque' },
    { label: 'Quiénes Somos', href: '#quienes-somos', id: 'quienes-somos' },
    { label: '¿Por qué Eequa?', href: '#por-que-eequa', id: 'por-que-eequa' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#004e41]/95 backdrop-blur-md shadow-md border-b border-[#00382f]/60 py-3.5'
            : 'bg-[#004e41] shadow-sm border-b border-[#00382f]/40 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#59c99d] rounded-lg"
              aria-label="Ir al inicio de Eequa Consultora"
            >
              <Logo variant="light" fileId="1ZsYFNAhteglVE_woe_dsdyX50I7SLuQb" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegación principal">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'text-[#dfff90] bg-white/15 font-semibold shadow-xs'
                        : 'text-[#e2f0ea] hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Header Right Action */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                id="header-cta-button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#59c99d] text-[#00382f] text-sm font-bold hover:bg-[#dfff90] hover:text-[#004e41] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#00382f]/30 group"
              >
                <span>Trabajemos juntos</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff5204] group-hover:scale-125 transition-transform duration-200"></span>
                <ArrowUpRight className="w-4 h-4 text-[#00382f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#59c99d]"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Slide-over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" id="mobile-navigation-drawer">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between z-50 border-l border-[#004e41]/20 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between p-5 bg-[#004e41] text-white border-b border-[#00382f]">
                <Logo variant="light" fileId="1ZsYFNAhteglVE_woe_dsdyX50I7SLuQb" size="sm" showTagline={false} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 py-3">
                <p className="text-xs uppercase tracking-wider text-[#4b635e] font-semibold px-3 py-2">
                  Navegación
                </p>
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-3 py-2.5 text-base font-medium rounded-lg transition-colors ${
                        activeSection === link.id
                          ? 'text-[#004e41] bg-[#004e41]/10 font-semibold'
                          : 'text-[#2b3d39] hover:bg-[#f0f5f2]'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Mobile drawer footer */}
            <div className="p-6 pt-4 border-t border-[#004e41]/10 space-y-4 bg-[#fbfdfc]">
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, '#contacto')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#004e41] text-white font-medium text-sm hover:bg-[#00382f] shadow-sm"
              >
                <span>Trabajemos juntos</span>
                <ArrowUpRight className="w-4 h-4 text-[#59c99d]" />
              </a>

              <div className="text-xs text-[#526a64] space-y-2 pt-2">
                <p className="font-semibold text-[#004e41]">Contacto directo:</p>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-2 text-[#2b3d39] hover:text-[#004e41]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#59c99d]" />
                  <span>{BRAND_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#59c99d]" />
                  <span>{BRAND_INFO.contacts[0].phone} (Eliana)</span>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={BRAND_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-colors"
                    aria-label="LinkedIn Eequa"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={BRAND_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#e4405f]/10 text-[#e4405f] hover:bg-[#e4405f] hover:text-white transition-colors"
                    aria-label="Instagram @eequa.consultora"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
