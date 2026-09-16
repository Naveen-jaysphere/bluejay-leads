import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Zap, Check } from 'lucide-react';

interface HeroProps {
  onGetLeadsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetLeadsClick }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white text-slate-800 pt-16 pb-20 border-b border-blue-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A1938] leading-[1.08]">
            Connecting Firms with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#0247FE] to-sky-500">
              Qualified Opportunities.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            You only pay for verified prospects that match your qualification criteria.
          </p>

          <div className="text-xs sm:text-sm text-slate-500 font-medium">
            No long-term agency retainers • Zero ad spend risk • Cancel anytime
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={onGetLeadsClick}
              className="w-full sm:w-auto bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Get Qualified Leads Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-2 text-xs font-medium text-slate-600 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0052FF]" />
              100% Exclusive Opportunities
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#0052FF]" />
              Real-Time CRM Delivery
            </span>
          </div>
        </div>

        {/* The 3 Highlight Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-blue-200/60">
          {/* Card 1 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-[0_10px_30px_-5px_rgba(2,82,255,0.06)] hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#0052FF] font-bold tracking-wider">01</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF]">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
              Access High-Quality Leads On Demand
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Get pre-qualified customer inquiries delivered directly to your sales pipeline in real-time. Fill your calendar without relying on unpredictable marketing cycles.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-[0_10px_30px_-5px_rgba(2,82,255,0.06)] hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#0052FF] font-bold tracking-wider">02</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
              We Pay For Your Marketing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We absorb all advertising and media spend across Search, Meta, and YouTube. You pay strictly for prospects who match your exact target criteria.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-[0_10px_30px_-5px_rgba(2,82,255,0.06)] hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#0052FF] font-bold tracking-wider">03</span>
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF]">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
              Opportunities in Under 24 Hours
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Set your target customer profile, industry, and daily capacity. Start receiving screened prospects ready for conversation within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
