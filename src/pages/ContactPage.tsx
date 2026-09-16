import React from 'react';
import { QuoteSection } from '../components/QuoteSection';
import { Clock, ShieldCheck, HelpCircle } from 'lucide-react';

interface ContactPageProps {
  preselectedPlan?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedPlan }) => {
  return (
    <div className="bg-[#F4F8FD] text-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden py-16 border-b border-blue-100 bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-b from-blue-300/20 via-sky-200/10 to-transparent pointer-events-none blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#0052FF] text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            Direct Campaign Consultation
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A1938]">
            Connect with Blue Jay Leads
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Tell us your target customer profile and volume requirements. We will analyze our inventory and respond within one business day with transparent per-lead pricing and launch timelines.
          </p>
        </div>
      </section>

      {/* Main Quote & Lead Request Section */}
      <QuoteSection preselectedPlan={preselectedPlan} />

      {/* Key Guarantees Row */}
      <section className="py-16 border-b border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1938] mb-2">Fast Deployment SLA</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Once criteria and volume limits are agreed upon, your lead pipeline goes live within 24 to 48 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1938] mb-2">72-Hour Return Policy</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Any lead that fails to meet agreed parameters is credited back directly to your balance with zero pushback.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-blue-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] mb-4">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A1938] mb-2">Dedicated Account Strategist</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Direct access to an account manager who monitors daily lead pacing, CRM deliverability, and conversion metrics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
