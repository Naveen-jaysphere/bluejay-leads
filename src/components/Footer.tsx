import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageId } from './Navbar';
import { LegalModal, LegalTab } from './LegalModal';

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
    <footer className="bg-[#071021] text-white border-t border-blue-950/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-white/10">
          {/* Brand & Description */}
          <div className="space-y-4 max-w-md">
            <div onClick={() => handleNav('home')} className="cursor-pointer inline-block">
              <Logo size="md" variant="dark" showTagline />
              <div className="text-[11px] text-blue-400/90 font-mono tracking-wider uppercase mt-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>Operated by Jaysphere LLC</span>
              </div>
            </div>
          </div>

          {/* Site Pages Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Pricing
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Regulatory Compliance Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-300">Regulatory & Operational Disclosure:</strong> Blue Jay Leads is a commercial client acquisition service operated by Jaysphere LLC, a performance-based marketing and lead qualification enterprise. Jaysphere LLC is not a law firm, broker, lender, or financial advisory institution. All opportunities are captured and routed in strict compliance with the Telephone Consumer Protection Act (47 U.S.C. § 227), the FCC 1:1 Consent Order, FTC Telemarketing Sales Rule (16 C.F.R. Part 310), and applicable state privacy statutes. Leads are distributed exclusively on a 1-to-1 basis and are never shared or resold.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Jaysphere LLC d/b/a Blue Jay Leads. All rights reserved. Exclusively serving verified commercial clients.</p>
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
