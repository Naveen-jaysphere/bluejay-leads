import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export type PageId = 'home' | 'about' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100/90 text-slate-800 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with elevated branding */}
          <div 
            onClick={() => handleNav('home')}
            className="cursor-pointer group"
          >
            <Logo size="md" variant="light" className="group-hover:opacity-95 transition-opacity" />
          </div>

          {/* Clean 3-Page Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-9 text-sm font-medium">
            <button 
              onClick={() => handleNav('home')}
              className={`transition-colors cursor-pointer py-1 relative ${
                currentPage === 'home' 
                  ? 'text-[#0052FF] font-bold' 
                  : 'text-slate-600 hover:text-[#0A1938]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0052FF] rounded-full" />
              )}
            </button>
            <button 
              onClick={() => handleNav('about')}
              className={`transition-colors cursor-pointer py-1 relative ${
                currentPage === 'about' 
                  ? 'text-[#0052FF] font-bold' 
                  : 'text-slate-600 hover:text-[#0A1938]'
              }`}
            >
              About
              {currentPage === 'about' && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0052FF] rounded-full" />
              )}
            </button>
            <button 
              onClick={() => handleNav('contact')}
              className={`transition-colors cursor-pointer py-1 relative ${
                currentPage === 'contact' 
                  ? 'text-[#0052FF] font-bold' 
                  : 'text-slate-600 hover:text-[#0A1938]'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0052FF] rounded-full" />
              )}
            </button>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-md shadow-blue-500/25 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Get Leads</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-[#0A1938] hover:bg-blue-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <button 
            onClick={() => handleNav('home')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'home' ? 'text-[#0052FF] font-bold' : 'text-slate-600 hover:text-[#0A1938]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('about')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'about' ? 'text-[#0052FF] font-bold' : 'text-slate-600 hover:text-[#0A1938]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('contact')}
            className={`block w-full text-left py-2 text-sm font-medium ${
              currentPage === 'contact' ? 'text-[#0052FF] font-bold' : 'text-slate-600 hover:text-[#0A1938]'
            }`}
          >
            Contact
          </button>
          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-semibold py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Leads Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
