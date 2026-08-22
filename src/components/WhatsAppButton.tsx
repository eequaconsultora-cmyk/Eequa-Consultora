import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, ArrowUpRight, Send, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Show a gentle greeting bubble once after a short delay on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const defaultMessage = encodeURIComponent(
    'Hola Eequa Consultora, me comunico desde el sitio web para realizar una consulta.'
  );

  return (
    <div
      ref={menuRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden"
      aria-label="Atención por WhatsApp"
    >
      {/* Floating Popup Card */}
      {isOpen && (
        <div
          className="mb-3 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-[#004e41]/15 overflow-hidden transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-card-title"
        >
          {/* Header */}
          <div className="bg-[#004e41] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 id="whatsapp-card-title" className="text-sm font-bold text-white flex items-center gap-1.5">
                  Eequa Consultora
                  <span className="w-2 h-2 rounded-full bg-[#59c99d] inline-block animate-pulse" />
                </h4>
                <p className="text-[11px] text-[#c8e6dc]">
                  Turismo de bienestar & desarrollo territorial
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Cerrar ventana de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body content */}
          <div className="p-4 bg-[#f8faf9] border-b border-[#004e41]/10">
            <p className="text-xs text-[#2b443f] leading-relaxed mb-3">
              ¡Hola! ¿Tenés un proyecto, destino o desafío para tu organización? Elegí con quién deseas conversar directamente:
            </p>

            {/* Contact options */}
            <div className="space-y-2.5">
              {BRAND_INFO.contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${contact.rawPhone.replace('+', '')}?text=${encodeURIComponent(`Hola ${contact.name}, me pongo en contacto desde la web de Eequa Consultora.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#004e41]/10 hover:border-[#25D366] hover:shadow-sm transition-all group"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#004e41] group-hover:text-[#128C7E] transition-colors">
                        {contact.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#526d66]">
                      {contact.role}
                    </p>
                    <span className="text-[11px] font-medium text-[#25D366]">
                      WhatsApp: {contact.phone}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/15 text-[#128C7E] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2.5 bg-[#ffffff] flex items-center justify-between text-[11px] text-[#6d8a82]">
            <span>Respuesta directa de las titulares</span>
            <span className="text-[#004e41] font-semibold">Eequa</span>
          </div>
        </div>
      )}

      {/* Gentle Prompt Bubble (shown if closed & initial timer triggered) */}
      {!isOpen && hasPrompted && (
        <div className="mb-2 mr-1 hidden sm:flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-[#004e41]/10 text-xs text-[#004e41] font-medium animate-in fade-in slide-in-from-right-4">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>¿Hablamos por WhatsApp?</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setHasPrompted(false);
            }}
            className="text-[#6d8a82] hover:text-[#004e41] ml-1"
            aria-label="Descartar aviso"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Main Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
        aria-label="Abrir opciones de contacto por WhatsApp"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Contactar por WhatsApp</span>
        
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-200" />
        ) : (
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current transition-transform duration-200 group-hover:scale-110" />
        )}

        {/* Pulse indicator ring */}
        {!isOpen && (
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-pulse pointer-events-none" />
        )}
      </button>
    </div>
  );
};
