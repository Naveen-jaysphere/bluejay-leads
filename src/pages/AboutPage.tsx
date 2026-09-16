import React, { useState } from 'react';
import { ShieldCheck, Target, BarChart3, Users2, ArrowRight, Lock, CheckCircle2, FileText } from 'lucide-react';
import { Logo } from '../components/Logo';
import { LegalModal, LegalTab } from '../components/LegalModal';

interface AboutPageProps {
  onContactClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onContactClick }) => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('tcpa');

  const openLegal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };
  return (
    <div className="bg-[#F4F8FD] text-slate-800">
      {/* Hero Banner */}
      <section className="relative overflow-hidden py-16 sm:py-24 border-b border-blue-100 bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#0052FF] text-xs font-semibold mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            About Blue Jay Leads
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A1938] max-w-4xl mx-auto leading-tight">
            We Built the Acquisition Model We Always Wished Existed.
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mt-6 leading-relaxed">
            Eliminating wasted ad spend, vague retainer agencies, and shared recycled leads with a performance-first, pay-per-qualified-opportunity standard.
          </p>
        </div>
      </section>

      {/* Mission & Background Story */}
      <section className="py-20 border-b border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-[#0052FF] tracking-wider uppercase">Our Thesis</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0A1938] tracking-tight mt-2 mb-6">
                Why the Traditional Marketing Agency Model Fails Growing Firms
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Most B2B and consumer service businesses have suffered through the same frustrating cycle: paying thousands in upfront agency retainers while bearing 100% of the financial risk on unpredictable ad spend.
                </p>
                <p>
                  At Blue Jay Leads, we invert that equation. We fund all media acquisition, deploy our own high-converting funnels, and operate internal qualification desks. You only invest when an authentic prospect matches your explicit criteria.
                </p>
                <p>
                  By aligning our revenue directly with your closed transactions, we build sustainable, multi-year client relationships instead of short-lived 90-day retainer churn.
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-2xl font-black text-[#0052FF]">100%</div>
                  <div className="text-xs text-slate-600 font-medium">Risk-Free Capital</div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-2xl font-black text-[#0052FF]">1-to-1</div>
                  <div className="text-xs text-slate-600 font-medium">Exclusive Delivery</div>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                  <div className="text-2xl font-black text-[#0052FF]">72-Hr</div>
                  <div className="text-xs text-slate-600 font-medium">Quality Guarantee</div>
                </div>
              </div>
            </div>

            {/* Brand Card */}
            <div className="bg-gradient-to-br from-[#EBF3FC] to-blue-50 p-8 sm:p-12 rounded-3xl border border-blue-200/80 shadow-md">
              <div className="mb-6">
                <Logo size="lg" variant="light" showTagline />
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                "Our guiding north star is simple: if an opportunity doesn't represent real pipeline value for our partner, we don't bill for it. Genuine alignment creates enduring growth."
              </p>
              <div className="space-y-2 pt-4 border-t border-blue-200/60 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                  <span>Proprietary Search & Social Intent Funnels</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                  <span>Live 24/7 Human & Automated Verification Protocol</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF]" />
                  <span>Native Webhook & CRM Ecosystem Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars */}
      <section className="py-20 border-b border-blue-100 bg-[#F4F8FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#0052FF] tracking-wider uppercase">Our Standards</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1938] tracking-tight mt-2">
              The Four Guarantees Behind Every Opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">Zero Recycled Data</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every inquiry is generated fresh in real-time. We never buy lead lists from data brokers or re-circulate old contacts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">100% Exclusivity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                When a prospect requests information, they are routed to exactly one firm. You never compete against 4 other reps for the same caller.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">Transparent Verification</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Clear qualification criteria agreed before launch. Leads failing parameters are credited back automatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0052FF] mb-4">
                <Users2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-[#0A1938] text-base mb-2">Direct CRM Integration</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Immediate delivery via webhook into Salesforce, HubSpot, Zoho, or your preferred sales tool so your team moves fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Consumer Protection */}
      <section className="py-20 border-b border-blue-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full font-semibold shadow-xs">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            Rigorous Legal & Consumer Privacy Compliance
          </div>
          <h3 className="text-3xl sm:text-4xl font-black text-[#0A1938] tracking-tight">
            TCPA, FTC, & Jornaya 1:1 Certified Inquiries
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Every inquiry captured by Blue Jay Leads features an audit-ready digital paper trail, verified timestamp, IP address, and express written consent under all modern consumer communication guidelines and FCC 1:1 seller mandates.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openLegal('tcpa')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/80 text-[#0052FF] font-semibold text-xs transition-colors cursor-pointer border border-blue-200"
            >
              <FileText className="w-4 h-4" />
              <span>Review TCPA & Regulatory Policies</span>
            </button>
            <button
              onClick={() => openLegal('privacy')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
            >
              <span>Jaysphere LLC Privacy Disclosures</span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center bg-gradient-to-br from-[#0A1938] to-[#071229] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to explore qualified opportunities?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Speak with our team today to define your target territory, criteria, and volume schedule.
          </p>
          <div className="pt-2">
            <button
              onClick={onContactClick}
              className="bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Build Your Lead Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Embedded Regulatory Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </div>
  );
};
