import React, { useState } from 'react';
import { ShieldCheck, Target, BarChart3, Users2, ArrowRight, Lock, Scale, Database, Mail, User } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LegalModal, LegalTab } from '../components/LegalModal';

interface AboutPageProps {
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick }) => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('tcpa');
  const [imageError, setImageError] = useState(false);

  const openLegal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="bg-[#F8FAFD] text-slate-800">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-18 sm:py-24 border-b border-blue-100 bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052FF] text-xs font-semibold mb-6">
            <Scale className="w-3.5 h-3.5" />
            <span>About Blue Jay Leads • Operated by Jaysphere LLC</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A1938] max-w-4xl mx-auto leading-tight">
            The Performance-Based Legal Acquisition Model Law Firms Deserve.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Eliminating wasted legal ad spend, vague agency retainers, and recycled shared leads with an audit-ready, pay-per-qualified-opportunity standard.
          </p>
        </div>
      </section>

      {/* Mission & Background Story */}
      <section className="py-20 border-b border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#0052FF] tracking-wider uppercase">Our Thesis</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1938] tracking-tight mt-2 mb-6">
                Why Traditional Legal Marketing Retainers Fail Managing Partners
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Most litigation chairs and managing partners have experienced the same frustrating dilemma: committing $5,000–$25,000+ per month in upfront agency retainers while bearing 100% of the financial risk on volatile legal pay-per-click costs that yield unscreened callers.
                </p>
                <p>
                  At Blue Jay Leads, we invert this equation entirely. We fund 100% of the media acquisition, deploy our own proprietary legal intent funnels, and operate rigorous multi-point intake qualification desks. Your firm only pays when an authentic, unrepresented claimant meets your exact criteria.
                </p>
                <p>
                  By aligning our revenue directly with deliverable, retainable cases, we build multi-year institutional partnerships rather than short-lived agency retainer churn.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-2xl font-black text-[#0052FF]">$0</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Agency Retainers</div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-2xl font-black text-[#0052FF]">1:1</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Exclusive Inquiries</div>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-2xl font-black text-[#0052FF]">100%</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Bar & TCPA Compliant</div>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div id="about-founder-card" className="bg-gradient-to-br from-[#EBF3FC] to-blue-50/80 p-6 sm:p-8 rounded-2xl border border-blue-200/80 shadow-xs">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-4">
                <div className="relative shrink-0">
                  <img
                    id="about-founder-headshot"
                    src={localStorage.getItem('founder_photo') || '/linkedinphotogoodquality.jpg'}
                    alt="Naveen, Founder of Blue Jay Leads"
                    onError={() => setImageError(true)}
                    className="w-24 h-32 sm:w-28 sm:h-36 object-cover object-top rounded-xl shadow-xs border border-slate-200 bg-slate-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-[10px] font-mono font-semibold text-[#0052FF] uppercase tracking-wider">About Us</span>
                  <h3 id="about-founder-name" className="text-base font-bold text-[#0A1938] mt-0.5">Naveen</h3>
                  <p id="about-founder-title" className="text-xs font-medium text-slate-500">Founder of Blue Jay Leads</p>
                  <a
                    href="mailto:Naveen@bluejayleads.io"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-[#0052FF] hover:underline mt-0.5"
                  >
                    <Mail className="w-3 h-3 text-[#0052FF]" />
                    <span>Naveen@bluejayleads.io</span>
                  </a>
                  <p className="text-xs text-slate-700 mt-2 font-medium">
                    "Every lead vendor promises hundreds of cheap form fills. What really matters is your actual cost per case."
                  </p>
                </div>
              </div>
              <div className="space-y-2.5 text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                <p>
                  "At Blue Jay Leads, we care about your cost per case, which is why we measure our performance by what it actually costs your firm to put a signed case on your docket, not vanity metrics or raw lead volume."
                </p>
                <p>
                  "We work closely with your intake team to track which inquiries actually turn into signed cases. When an ad campaign generates signed retainers, we invest more budget behind it. When one falls short, we turn it off immediately. By tying our advertising directly to your firm's real results, we ensure you consistently receive high quality leads at scale."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Commitments */}
      <section className="py-20 border-b border-blue-100 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0052FF] tracking-wider uppercase">Our Commitments</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1938] tracking-tight mt-2">
              The Four Guarantees Behind Every Legal Opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">Zero Recycled Data</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every claimant inquiry is generated fresh in real time. We never buy lead lists from bulk data brokers or recirculate stale inquiries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">100% Exclusivity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a claimant submits their inquiry, they are routed exclusively to one law firm. You never race against 4 other firms for the same caller.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">Pre-Agreed Case Criteria</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear qualification criteria are documented before launch. Inquiries failing parameters are credited back with zero friction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">Legal CRM Synchronization</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Instant delivery via webhook into Lead Docket, Filevine, Clio Grow, Litify, or custom endpoints so your intake desk acts immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1938] mb-3">
            Ready to discuss your firm's claimant intake needs?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            Discuss your target practice areas, state bar jurisdictions, and caseload goals with our team, or email us directly at <a href="mailto:Naveen@bluejayleads.io" className="text-[#0052FF] font-semibold hover:underline">Naveen@bluejayleads.io</a>.
          </p>
          <button
            onClick={onContactClick}
            className="bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md shadow-blue-500/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Legal Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        activeTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
        onTabChange={setLegalModalTab}
      />
    </div>
  );
};
