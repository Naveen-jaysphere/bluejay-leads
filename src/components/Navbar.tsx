import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown, 
  Briefcase, 
  Car, 
  Wrench, 
  ShieldAlert, 
  HeartPulse, 
  Scale, 
  Users, 
  Gavel, 
  CreditCard 
} from 'lucide-react';
import { Logo } from './Logo';

export type PageId = 'home' | 'verticals' | 'about' | 'contact' | string;

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verticalsDropdownOpen, setVerticalsDropdownOpen] = useState(false);
  const [mobileVerticalsOpen, setMobileVerticalsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setVerticalsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setVerticalsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const featuredVerticals = [
    {
      slug: 'workers-comp-leads',
      name: "Workers' Compensation Leads",
      desc: 'Workplace injuries, employer reported',
      icon: Briefcase
    },
    {
      slug: 'employment-law-leads',
      name: 'Employment Law Leads',
      desc: 'Wrongful termination, retaliation, wage theft',
      icon: Users
    },
    {
      slug: 'lemon-law-leads',
      name: 'Lemon Law Leads',
      desc: 'Defective vehicles & warranty claims',
      icon: Wrench
    },
    {
      slug: 'mva-leads',
      name: 'MVA Leads (Auto Accident)',
      desc: 'Clear liability, verified medical care',
      icon: Car
    },
    {
      slug: 'personal-injury-leads',
      name: 'Personal Injury Leads',
      desc: 'Premises liability, slip & falls, dog bites',
      icon: ShieldAlert
    },
    {
      slug: 'mass-tort-leads',
      name: 'Mass Tort Leads',
      desc: 'Defective drugs, devices & toxic torts',
      icon: Scale
    },
    {
      slug: 'ssdi-disability-leads',
      name: 'SSDI & Disability Leads',
      desc: 'Social security appeals, work credits',
      icon: HeartPulse
    },
    {
      slug: 'criminal-defense-leads',
      name: 'Criminal Defense & DUI Leads',
      desc: 'Arrests, pending arraignments, private pay',
      icon: Gavel
    },
    {
      slug: 'bankruptcy-leads',
      name: 'Bankruptcy Leads',
      desc: 'Chapter 7 & 13, $10k+ unsecured debt',
      icon: CreditCard
    }
  ];

  const isVerticalActive = (slug: string) => {
    return currentPage === slug || currentPage === `/${slug}`;
  };

  const isAnyVerticalActive = featuredVerticals.some(v => isVerticalActive(v.slug)) || currentPage === 'verticals';

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
            <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
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

              {/* Verticals Dropdown Menu */}
              <div 
                ref={dropdownRef}
                className="relative py-2"
                onMouseEnter={() => setVerticalsDropdownOpen(true)}
                onMouseLeave={() => setVerticalsDropdownOpen(false)}
              >
                <button 
                  onClick={() => setVerticalsDropdownOpen(!verticalsDropdownOpen)}
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer py-1 relative ${
                    isAnyVerticalActive 
                      ? 'text-[#0052FF] font-bold' 
                      : 'text-slate-600 hover:text-[#0A1938]'
                  }`}
                  aria-expanded={verticalsDropdownOpen}
                >
                  <span>Verticals</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${verticalsDropdownOpen ? 'rotate-180 text-[#0052FF]' : 'text-slate-400'}`} />
                  {isAnyVerticalActive && (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-[#0052FF] rounded-full" />
                  )}
                </button>

                {/* Dropdown Flyout Card */}
                {verticalsDropdownOpen && (
                  <div 
                    className="absolute top-full -left-20 w-[580px] bg-white rounded-2xl border border-blue-100 shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                          Legal Practice Area Verticals
                        </span>
                        <p className="text-xs text-slate-500">
                          100% exclusive, pre-screened claimant inquiries
                        </p>
                      </div>
                      <button
                        onClick={() => handleNav('verticals')}
                        className="text-xs font-bold text-[#0052FF] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View All 50+</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                    {/* 2-Column Grid of Vertical Pages */}
                    <div className="grid grid-cols-2 gap-2">
                      {featuredVerticals.map((item) => {
                        const Icon = item.icon;
                        const active = isVerticalActive(item.slug);
                        return (
                          <div
                            key={item.slug}
                            onClick={() => handleNav(item.slug)}
                            className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 group ${
                              active
                                ? 'bg-blue-50/80 border-blue-200 text-[#0052FF]'
                                : 'bg-transparent border-transparent hover:bg-slate-50 hover:border-slate-200/80 text-slate-800'
                            }`}
                          >
                            <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0052FF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0052FF] group-hover:text-white transition-colors">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <span className="text-xs font-bold truncate block group-hover:text-[#0052FF] transition-colors">
                                {item.name}
                              </span>
                              <span className="text-[11px] text-slate-500 block truncate leading-tight mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Bottom CTA Banner */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-[#F8FAFD] -mx-5 -mb-5 p-4 rounded-b-2xl">
                      <span className="text-slate-600 font-medium">
                        Need custom criteria, multi-state routing, or mass tort dockets?
                      </span>
                      <button
                        onClick={() => handleNav('contact')}
                        className="font-bold text-[#0052FF] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
                      >
                        <span>Talk to Intake</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

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
                className="p-2 rounded-lg text-slate-600 hover:text-[#0A1938] hover:bg-blue-50 transition-colors cursor-pointer"
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
        <div className="md:hidden bg-white border-b border-blue-100 px-5 pt-4 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
          <button 
            onClick={() => handleNav('home')}
            className={`block w-full text-left py-2 text-sm font-semibold ${
              currentPage === 'home' ? 'text-[#0052FF] font-bold' : 'text-slate-700 hover:text-[#0A1938]'
            }`}
          >
            Home
          </button>

          {/* Mobile Verticals Submenu */}
          <div>
            <button
              onClick={() => setMobileVerticalsOpen(!mobileVerticalsOpen)}
              className={`flex items-center justify-between w-full text-left py-2 text-sm font-semibold cursor-pointer ${
                isAnyVerticalActive ? 'text-[#0052FF] font-bold' : 'text-slate-700 hover:text-[#0A1938]'
              }`}
            >
              <span>Practice Area Verticals</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileVerticalsOpen ? 'rotate-180 text-[#0052FF]' : 'text-slate-400'}`} />
            </button>

            {mobileVerticalsOpen && (
              <div className="pl-3 py-2 space-y-1.5 border-l-2 border-blue-200 ml-2">
                {featuredVerticals.map((item) => (
                  <button
                    key={item.slug}
                    onClick={() => handleNav(item.slug)}
                    className={`block w-full text-left py-1.5 px-2 rounded-lg text-xs font-semibold ${
                      isVerticalActive(item.slug)
                        ? 'bg-blue-50 text-[#0052FF] font-bold'
                        : 'text-slate-600 hover:text-[#0A1938] hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => handleNav('verticals')}
                  className="block w-full text-left py-1.5 px-2 rounded-lg text-xs font-bold text-[#0052FF] hover:underline"
                >
                  View All 50+ Verticals →
                </button>
              </div>
            )}
          </div>

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
