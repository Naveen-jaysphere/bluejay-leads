import React from 'react';
import { DollarSign, PhoneOff, Compass, ArrowRight, Check } from 'lucide-react';

interface PainPointsProps {
  onGetLeadsClick: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onGetLeadsClick }) => {
  const challenges = [
    {
      num: "01",
      icon: DollarSign,
      title: "Overpaying for Broad Legal Retainer Agencies",
      desc: "Spending $5,000–$15,000+ each month on agency retainers and vague PPC impressions while bearing all the financial risk with zero guaranteed signed retainers.",
      solution: "Pay strictly per qualified claimant inquiry. Zero monthly agency retainers."
    },
    {
      num: "02",
      icon: PhoneOff,
      title: "Shared Inquiries Sold to Multiple Firms",
      desc: "Buying from lead aggregators who blast the same claimant info to 4 competing firms, triggering caller fatigue and wasted intake follow-up.",
      solution: "100% exclusive 1:1 routing. Exactly one law firm per case opportunity."
    },
    {
      num: "03",
      icon: Compass,
      title: "Unscreened Callers Wasting Intake Staff Time",
      desc: "Intake teams buried by inquiries with pre-existing legal counsel, zero liability, or expired statutes of limitations.",
      solution: "Multi-point intake screening for liability, jurisdiction, and unrepresented status."
    }
  ];

  return (
    <section className="py-20 bg-white text-slate-800 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">
            Law Firm Client Acquisition Bottlenecks
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0A1938] mt-2">
            Facing Any of These Legal Intake Challenges?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Traditional agency retainers and recycled shared leads drain your intake budget. Here is how Blue Jay Leads delivers verified, retainable case opportunities directly to your firm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#F8FAFD] border border-blue-100/90 rounded-2xl p-7 hover:bg-white hover:border-blue-300 hover:shadow-xl shadow-[0_6px_25px_-5px_rgba(2,82,255,0.06)] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-bold text-[#0052FF]">{item.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#0A1938] mb-3 group-hover:text-[#0052FF] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-100/80">
                  <div className="text-[11px] font-bold text-[#0052FF] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    Our Solution
                  </div>
                  <p className="text-xs font-medium text-slate-700 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onGetLeadsClick}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0052FF] hover:text-[#0043D6] hover:underline cursor-pointer group"
          >
            <span>Talk to an acquisition specialist about custom volumes</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
