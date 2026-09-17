import React from 'react';
import { ShieldCheck, Filter, FileCheck2, RotateCcw, Webhook, ArrowRight } from 'lucide-react';

interface WhyWorkWithUsProps {
  onNavigateToContact?: () => void;
}

export const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({ onNavigateToContact }) => {
  const features = [
    {
      id: 'exclusive',
      icon: ShieldCheck,
      title: 'Exclusive Leads',
      description: 'Never resold or shared with a competing firm in the same market.'
    },
    {
      id: 'filtered',
      icon: Filter,
      title: 'Pre-Filtered to Your Criteria',
      description: 'Timeframe, geography, representation status, treatment status, and other agreed qualification criteria are screened before delivery.'
    },
    {
      id: 'trustedform',
      icon: FileCheck2,
      title: 'TrustedForm on Every Lead',
      description: 'Each lead includes a TCPA consent record showing the applicable consent text, timestamp, and IP address.'
    },
    {
      id: 'refund',
      icon: RotateCcw,
      title: 'Refund or Replace',
      description: 'If a lead fails an agreed disqualifier, it is refunded or replaced according to the campaign terms.'
    },
    {
      id: 'delivery',
      icon: Webhook,
      title: 'Real-Time Webhook Delivery',
      description: 'Leads can be delivered directly into the firm’s CRM or case-management system as soon as the form is submitted.'
    }
  ];

  return (
    <section id="why-work-with-us" className="py-20 bg-[#070E1C] text-white border-b border-blue-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            Intake Standards & Guarantees
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            Why Firms Work With Us
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Engineered exclusively for law firms demanding predictable intake quality, verified claimant compliance, and transparent delivery SLAs.
          </p>
        </div>

        {/* 5-Item Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-[#0B1528] border border-slate-800/90 rounded-xl p-5 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0052FF]/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concise statement beneath the grid */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base sm:text-lg font-semibold text-slate-200 tracking-tight text-center sm:text-left">
            We build the campaigns, run the traffic, and screen the claimant. <span className="text-blue-400">You sign the case.</span>
          </p>
          {onNavigateToContact && (
            <button
              onClick={onNavigateToContact}
              className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>Explore Campaign Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
