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
    <div className={`flex flex-col justify-center select-none ${className}`}>
      <div className="flex items-baseline tracking-tight font-sans">
        <span
          className={`font-black tracking-tight ${textSizes[size]} ${
            isLight ? 'text-[#0A1938]' : 'text-white'
          }`}
        >
          Blue Jay
        </span>
        <span className={`font-black tracking-tight ${textSizes[size]} text-[#0052FF] ml-1.5`}>
          Leads
        </span>
      </div>
      {showTagline && (
        <span
          className={`text-[11px] sm:text-xs tracking-tight font-medium ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}
        >
          Generating Exclusive Qualified Opportunities to Scale Your Firm
        </span>
      )}
    </div>
  );
};
