import React, { useState } from 'react';
import { BRAND_INFO } from '../data/siteData';
import { ContactFormData, FormStatus } from '../types';
import { Mail, Phone, Send, CheckCircle2, Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    originType: '',
    projectDescription: '',
    needCategory: initialSubject || 'Diagnóstico y asesoramiento general'
  });

  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const originOptions = [
    'Municipio / gobierno local',
    'Organización privada',
    'Destino turístico',
    'Emprendimiento turístico',
    'Equipo / organización',
    'Otro'
  ];

  const needOptions = [
    'Estrategia y gestión de destinos',
    'Desarrollo organizacional y equipos',
    'Comunicación y marketing estratégico',
    'Capacitación y formación de equipos',
    'Diagnóstico y asesoramiento general'
  ];

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Por favor ingresá tu nombre y apellido.';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Por favor indicá tu organización.';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Por favor ingresá un email válido.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Por favor ingresá un número de teléfono o WhatsApp de contacto.';
    }
    if (!formData.originType) {
      errs.originType = 'Por favor seleccioná el tipo de organización.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('submitting');

    // Simulate async submission with local saving/dispatch preparation
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      // Store in local storage for persistence across reloads
      const existingSubmissions = JSON.parse(localStorage.getItem('eequa_contact_inquiries') || '[]');
      const newInquiry = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: 'inq_' + Date.now()
      };
      localStorage.setItem('eequa_contact_inquiries', JSON.stringify([newInquiry, ...existingSubmissions]));

      setFormStatus('success');
    } catch {
      setFormStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      originType: '',
      projectDescription: '',
      needCategory: 'Diagnóstico y asesoramiento general'
    });
    setFormStatus('idle');
    setErrors({});
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-[#f0f5f2] border-t border-[#004e41]/10 relative"
      aria-label="Contacto y Consultas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pre-Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#004e41] leading-tight mb-4">
            ¿Tenés un proyecto, un desafío o una organización que necesita avanzar?
          </h2>
          <p className="text-lg text-[#324a44] leading-relaxed">
            Conversemos. Podemos ayudarte a ordenar el escenario, definir una estrategia y encontrar el camino para llevarla a la práctica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Context */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-[#004e41]/15 shadow-sm">
              <h3 className="text-xl font-bold text-[#004e41] mb-6 pb-4 border-b border-[#004e41]/10">
                Contacto
              </h3>

              <div className="space-y-4 text-sm text-[#2b443f]">
                
                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#f0f7f4] border border-[#004e41]/10 text-[#004e41] hover:bg-[#59c99d]/15 transition-all group"
                  aria-label={`Enviar email a ${BRAND_INFO.email}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#004e41] text-[#59c99d] flex items-center justify-center shrink-0 group-hover:bg-[#00382f] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-[#004e41] group-hover:underline">
                    {BRAND_INFO.email}
                  </span>
                </a>

                {/* Telephone & WhatsApp */}
                <div className="space-y-2.5">
                  {BRAND_INFO.contacts.map((contact, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#f0f7f4] border border-[#004e41]/10"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#004e41] text-[#59c99d] flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-[#004e41] text-sm sm:text-base">
                            {contact.phone}
                          </p>
                          <p className="text-xs text-[#526d66]">
                            {contact.name}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={`https://wa.me/${contact.rawPhone.replace('+', '')}?text=${encodeURIComponent(`Hola ${contact.name}, me pongo en contacto desde el sitio web de Eequa Consultora.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-lg bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors"
                          title={`WhatsApp ${contact.name}`}
                          aria-label={`Enviar WhatsApp a ${contact.name}`}
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                        <a
                          href={`tel:${contact.rawPhone}`}
                          className="w-9 h-9 rounded-lg bg-[#004e41]/10 text-[#004e41] hover:bg-[#004e41] hover:text-white flex items-center justify-center transition-colors"
                          title={`Llamar a ${contact.name}`}
                          aria-label={`Llamar a ${contact.name}`}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Networks Icons */}
                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={BRAND_INFO.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0077b5]/10 text-[#0077b5] hover:bg-[#0077b5] hover:text-white flex items-center justify-center transition-all"
                    title="LinkedIn Eequa Consultora"
                    aria-label="LinkedIn Eequa Consultora"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={BRAND_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#e4405f]/10 text-[#e4405f] hover:bg-[#e4405f] hover:text-white flex items-center justify-center transition-all"
                    title="Instagram @eequa.consultora"
                    aria-label="Instagram Eequa Consultora"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-10 border border-[#004e41]/15 shadow-md">
              
              {formStatus === 'success' ? (
                <div className="text-center py-10 px-4" role="alert" aria-live="polite">
                  <div className="w-16 h-16 rounded-full bg-[#59c99d]/20 text-[#004e41] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10 text-[#004e41]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#004e41] mb-3">
                    Gracias por escribirnos.
                  </h3>
                  <p className="text-base text-[#2e4741] max-w-md mx-auto leading-relaxed mb-8">
                    Recibimos tu consulta y nos pondremos en contacto con vos a la brevedad para coordinar una primera conversación sobre tu proyecto.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#004e41] text-white text-sm font-semibold hover:bg-[#00382f] transition-colors"
                  >
                    <span>Enviar otra consulta</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Formulario de contacto Eequa">
                  
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#004e41]">
                      Contanos sobre tu proyecto
                    </h3>
                  </div>

                  {/* Field: Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                      Nombre y apellido <span className="text-[#ff5204]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ej: Laura Gómez"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all ${
                        errors.fullName ? 'border-[#ff5204] bg-[#fff8f5]' : 'border-[#004e41]/20'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#ff5204] font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Grid: Organization & Origin Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                        Organización <span className="text-[#ff5204]">*</span>
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Ej: Municipalidad / Complejo / Empresa"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all ${
                          errors.organization ? 'border-[#ff5204] bg-[#fff8f5]' : 'border-[#004e41]/20'
                        }`}
                      />
                      {errors.organization && (
                        <p className="mt-1 text-xs text-[#ff5204] font-medium">{errors.organization}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="originType" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                        ¿Desde dónde nos contactás? <span className="text-[#ff5204]">*</span>
                      </label>
                      <select
                        id="originType"
                        name="originType"
                        value={formData.originType}
                        onChange={(e) => setFormData({ ...formData, originType: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all ${
                          errors.originType ? 'border-[#ff5204] bg-[#fff8f5]' : 'border-[#004e41]/20'
                        }`}
                      >
                        <option value="">Seleccionar tipo...</option>
                        {originOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.originType && (
                        <p className="mt-1 text-xs text-[#ff5204] font-medium">{errors.originType}</p>
                      )}
                    </div>
                  </div>

                  {/* Grid: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                        Email de contacto <span className="text-[#ff5204]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tu-email@organizacion.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all ${
                          errors.email ? 'border-[#ff5204] bg-[#fff8f5]' : 'border-[#004e41]/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#ff5204] font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                        Teléfono / WhatsApp <span className="text-[#ff5204]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej: 3447 123456"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all ${
                          errors.phone ? 'border-[#ff5204] bg-[#fff8f5]' : 'border-[#004e41]/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[#ff5204] font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Field: Category of Need */}
                  <div>
                    <label htmlFor="needCategory" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                      ¿En qué podemos ayudarte?
                    </label>
                    <select
                      id="needCategory"
                      name="needCategory"
                      value={formData.needCategory}
                      onChange={(e) => setFormData({ ...formData, needCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#004e41]/20 text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all"
                    >
                      {needOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field: Project Description */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-xs font-bold uppercase tracking-wider text-[#004e41] mb-1.5">
                      ¿Querés contarnos sobre tu proyecto?
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Describí brevemente el estado de situación, los objetivos que buscan alcanzar o cualquier detalle que quieras compartir (opcional)..."
                      className="w-full px-4 py-3 rounded-xl border border-[#004e41]/20 text-sm text-[#132622] bg-[#fbfdfc] focus:outline-none focus:ring-2 focus:ring-[#004e41] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      id="submit-contact-button"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#004e41] text-white font-bold text-sm hover:bg-[#00382f] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#004e41]/20 disabled:opacity-70 group"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Enviando consulta...</span>
                      ) : (
                        <>
                          <span>Enviar consulta</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#ff5204]"></span>
                          <Send className="w-4 h-4 text-[#59c99d] group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
