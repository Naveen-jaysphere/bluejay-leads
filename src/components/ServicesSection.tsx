import React from 'react';
import { LEAD_SERVICES } from '../data/blueJayData';
import { Check, ArrowRight, Scale, PhoneCall, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="services" className="py-24 bg-[#070E1C] text-white border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0052FF] font-bold">
            Tailored Law Firm Intake Models
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Precision Delivery Engineered for Law Firm Intake Desks
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Whether your firm requires instant legal CRM webhook synchronization (Lead Docket, Filevine, Clio Grow), live warm three-way intake phone transfers, or custom multi-state mass tort campaigns, Blue Jay Leads deploys with zero operational friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEAD_SERVICES.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl border p-7 flex flex-col justify-between transition-all relative ${
                tier.id === 'exchange'
                  ? 'bg-[#0E1A33] border-[#0052FF] ring-1 ring-blue-500/40 shadow-2xl shadow-blue-950/60'
                  : 'bg-[#0A1428]/90 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  {tier.turnaround}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  tier.id === 'exchange'
                    ? 'bg-[#0052FF] text-white shadow-xs'
                    : 'bg-white/10 text-slate-300'
                }`}>
                  {tier.badge}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 mb-5 text-[11px] text-slate-400">
                  <strong className="text-slate-300 block mb-0.5">Recommended For:</strong>
                  {tier.recommendedFor}
                </div>

                <button
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.id === 'exchange'
                      ? 'bg-[#0052FF] hover:bg-[#0043D6] text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  <span>Select {tier.name.replace('Blue Jay ', '').replace('™', '')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
