import React from 'react';
import { QuoteSection } from '../components/QuoteSection';
import { Clock, ShieldCheck, HelpCircle, Scale, CheckCircle2, Mail, Phone } from 'lucide-react';

interface ContactPageProps {
  preselectedPlan?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedPlan }) => {
  return (
    <div className="bg-[#F8FAFD] text-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden py-18 border-b border-blue-100 bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052FF] text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Law Firm Practice Area Inquiry</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A1938]">
            Connecting Law Firms with Qualified Opportunities
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Specify your firm's target practice areas, state bar jurisdictions, and monthly caseload goals. We will analyze active inventory and provide exact per-claimant rates and launch schedules within one business day.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-700">
            <a 
              href="mailto:Naveen@bluejayleads.io" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 shadow-2xs hover:border-[#0052FF] hover:text-[#0052FF] font-semibold transition-all group"
            >
              <Mail className="w-4 h-4 text-[#0052FF] group-hover:scale-110 transition-transform" />
              <span>Naveen@bluejayleads.io</span>
            </a>
            <a 
              href="tel:6504608438" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-blue-200 shadow-2xs hover:border-[#0052FF] hover:text-[#0052FF] font-semibold transition-all group"
            >
              <Phone className="w-4 h-4 text-[#0052FF] group-hover:scale-110 transition-transform" />
              <span>(650) 460-8438</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Quote & Intake Request Section */}
      <QuoteSection preselectedPlan={preselectedPlan} />

      {/* Key Guarantees Row */}
      <section className="py-16 border-b border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1938] mb-2">Fast Intake Launch (24-48h)</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once criteria parameters and state routing are confirmed, your firm's intake pipeline goes live within 24 to 48 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1938] mb-2">Pre-Screened Quality Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Any inquiry that fails pre-agreed criteria (e.g. existing counsel, wrong jurisdiction) is credited back promptly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1938] mb-2">Dedicated Intake Strategist</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct access to a senior account manager who monitors daily lead pacing, CRM deliverability, and retainer conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
