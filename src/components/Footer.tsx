import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from './Navbar';
import { LegalModal, LegalTab } from './LegalModal';
import { Phone, Mail, ShieldCheck, Scale, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('privacy');

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLegal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <footer className="bg-[#060D1A] text-white border-t border-blue-950/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Description */}
          <div className="md:col-span-8 space-y-4">
            <div onClick={() => handleNav('home')} className="cursor-pointer inline-block">
              <Logo size="md" variant="dark" showTagline />
              <div className="text-[11px] text-blue-400 font-mono tracking-wider uppercase mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Legal Intake Operations • Jaysphere LLC</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Connecting law firms nationwide with 100% exclusive, pre-screened claimant opportunities through compliant pay-per-qualified-inquiry delivery.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#0052FF]" />
                (650) 460-8438
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#0052FF]" />
                intake@bluejayleads.com
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 flex flex-col md:items-end justify-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 md:text-right">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Regulatory Compliance Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Regulatory & Bar Advertising Disclosure:</strong> Blue Jay Leads is an intake technology and client acquisition service operated by Jaysphere LLC. Jaysphere LLC is a performance-based marketing provider, not a law firm, lawyer referral service, or legal aid society, and does not provide legal representation or legal advice. Inquiries are captured and routed in strict compliance with state bar advertising regulations, the Telephone Consumer Protection Act (47 U.S.C. § 227), FCC 1:1 Prior Express Written Consent orders, FTC Telemarketing Sales Rules, and applicable state privacy standards. All inquiries are distributed 100% exclusively to a single firm and are never shared or resold.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Jaysphere LLC d/b/a Blue Jay Leads. All rights reserved. Exclusively serving verified US law firms.</p>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => openLegal('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openLegal('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => openLegal('tcpa')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              TCPA & FCC Compliance
            </button>
            <button
              onClick={() => openLegal('donotsell')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Do Not Sell My Info (CCPA)
            </button>
          </div>
        </div>
      </div>

      {/* Global Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </footer>
  );
};
