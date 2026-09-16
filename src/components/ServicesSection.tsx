import React from 'react';
import { LEAD_SERVICES } from '../data/blueJayData';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="services" className="py-20 bg-[#080D1A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
            Tailored Growth Models
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mt-2">
            Flexible Lead Delivery Built for Scalable Sales Teams
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Whether you need automated real-time CRM record delivery, live inbound phone transfers, or a customized multi-market enterprise campaign, Blue Jay Leads plugs directly into your pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEAD_SERVICES.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl border p-7 flex flex-col justify-between transition-all relative ${
                tier.id === 'exchange'
                  ? 'bg-[#0F1C3F] border-blue-500/60 ring-1 ring-blue-500/40 shadow-xl shadow-blue-950/40'
                  : 'bg-[#0B132B]/70 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                  {tier.turnaround}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  tier.id === 'exchange'
                    ? 'bg-blue-500 text-white'
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
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="p-3 rounded-xl bg-black/20 border border-white/5 mb-5 text-[11px] text-slate-400">
                  <strong className="text-slate-300 block mb-0.5">Recommended For:</strong>
                  {tier.recommendedFor}
                </div>

                <button
                  onClick={() => onSelectPlan(tier.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.id === 'exchange'
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30'
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  <span>Select {tier.name.split(' ')[2] || 'Option'}</span>
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
