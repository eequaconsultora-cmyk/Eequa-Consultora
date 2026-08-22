import React, { useState } from 'react';

interface LogoProps {
  variant?: 'dark' | 'light' | 'footer' | 'monochrome';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  fileId?: string;
}

const HEADER_LOGO_ID = '1L1C3mvRKlsLjaXPqGQleeTaWBQdVIJLm';
const FOOTER_LOGO_ID = '1ZsYFNAhteglVE_woe_dsdyX50I7SLuQb';

const getDriveSrcOptions = (id: string) => [
  `https://lh3.googleusercontent.com/d/${id}`,
  `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
  `https://drive.google.com/uc?export=view&id=${id}`,
];

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
  fileId,
}) => {
  const isFooter = variant === 'footer' || variant === 'light';
  const effectiveFileId = fileId || (isFooter ? FOOTER_LOGO_ID : HEADER_LOGO_ID);
  const srcOptions = getDriveSrcOptions(effectiveFileId);

  const [srcIndex, setSrcIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (srcIndex < srcOptions.length - 1) {
      setSrcIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-14 sm:h-16 md:h-20',
  }[size];

  return (
    <div
      className={`inline-flex items-center select-none transition-transform duration-200 ${className}`}
      id="eequa-brand-logo"
    >
      {!hasError ? (
        <div className="flex items-center justify-start bg-transparent">
          <img
            src={srcOptions[srcIndex]}
            alt="Eequa Consultora - Turismo de Bienestar"
            referrerPolicy="no-referrer"
            onError={handleImageError}
            className={`${heightClasses} w-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] object-contain block bg-transparent`}
            loading="eager"
          />
        </div>
      ) : (
        /* Vector Fallback if the external drive image is temporarily unreachable */
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-[#004e41] shadow-sm">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              aria-label="Isotipo Eequa"
            >
              <rect width="44" height="44" rx="10" fill="#004e41" />
              <circle cx="16" cy="22" r="11" stroke="#59c99d" strokeWidth="2.75" opacity="0.95" />
              <circle cx="28" cy="22" r="11" stroke="#dfff90" strokeWidth="2.75" opacity="0.95" />
              <ellipse cx="22" cy="22" rx="4.5" ry="7.5" fill="#59c99d" opacity="0.3" />
              <circle cx="22" cy="22" r="2.5" fill="#ff5204" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 leading-none">
              <span
                className={`text-2xl font-extrabold tracking-tight font-sans ${
                  isFooter ? 'text-white' : 'text-[#004e41]'
                }`}
              >
                EEQUA
              </span>
              <span
                className={`text-[10px] uppercase font-semibold tracking-widest px-1.5 py-0.5 rounded ${
                  isFooter
                    ? 'bg-[#59c99d]/20 text-[#dfff90]'
                    : 'bg-[#004e41]/10 text-[#004e41]'
                }`}
              >
                Consultora
              </span>
            </div>
            <span
              className={`text-[11px] font-normal tracking-normal mt-0.5 ${
                isFooter ? 'text-[#e2f0ea]' : 'text-[#4b635e]'
              }`}
            >
              Turismo de Bienestar & Territorio
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

