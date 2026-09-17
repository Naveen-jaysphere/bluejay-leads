import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export type PageId = 'home' | 'verticals' | 'about' | 'contact';

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
    <header className="sticky top-0 z-50 text-slate-800 shadow-xs">
      {/* Main Navigation Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => handleNav('home')}
              className="cursor-pointer group shrink-0"
            >
              <Logo size="md" variant="light" className="group-hover:opacity-95 transition-opacity" />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
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

            {/* Desktop Contact CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => handleNav('contact')}
                className="bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-blue-100 px-5 pt-4 pb-6 space-y-3 shadow-xl">
          <button 
            onClick={() => handleNav('home')}
            className={`block w-full text-left py-2 text-sm font-semibold ${
              currentPage === 'home' ? 'text-[#0052FF] font-bold' : 'text-slate-700 hover:text-[#0A1938]'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('about')}
            className={`block w-full text-left py-2 text-sm font-semibold ${
              currentPage === 'about' ? 'text-[#0052FF] font-bold' : 'text-slate-700 hover:text-[#0A1938]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('contact')}
            className={`block w-full text-left py-2 text-sm font-semibold ${
              currentPage === 'contact' ? 'text-[#0052FF] font-bold' : 'text-slate-700 hover:text-[#0A1938]'
            }`}
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => handleNav('contact')}
              className="w-full bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-bold py-3 rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
