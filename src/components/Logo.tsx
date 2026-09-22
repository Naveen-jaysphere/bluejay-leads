import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (default), 'dark' for dark backgrounds (footer)
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showTagline = false
}) => {
  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex flex-col justify-center select-none whitespace-nowrap shrink-0 ${className}`}>
      <div className="inline-flex items-center tracking-tight font-sans whitespace-nowrap">
        <span className={`font-black tracking-tight whitespace-nowrap ${textSizes[size]}`}>
          <span className={isLight ? 'text-[#0A1938]' : 'text-white'}>Blue Jay</span>
          <span className="text-[#0052FF] ml-1.5">Leads</span>
        </span>
      </div>
      {showTagline && (
        <span
          className={`text-[11px] sm:text-xs tracking-tight font-medium whitespace-nowrap mt-0.5 ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          Exclusive, Pre-Screened Legal Inquiries for Law Firms
        </span>
      )}
    </div>
  );
};
