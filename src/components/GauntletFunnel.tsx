import React, { useState } from 'react';
import { FUNNEL_STAGES } from '../data/blueJayData';
import { ShieldCheck, UserCheck, PhoneCall, AlertCircle, CheckCircle2, ArrowDown } from 'lucide-react';

export const GauntletFunnel: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to delivered

  return (
    <section id="lead-quality" className="py-20 bg-[#080D1A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Rigorous Negative Qualification
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Most of what we generate never reaches you.{' '}
            <span className="text-blue-400">That is the point.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Every inbound prospect runs a gauntlet. The leads that wash out are our financial burden to absorb, not yours. Your sales team only spends time on verified opportunities ready for a real conversation.
          </p>
        </div>

        {/* Funnel Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The 4 Funnel Stages */}
          <div className="lg:col-span-7 space-y-4">
            {FUNNEL_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;
              const isFinal = idx === FUNNEL_STAGES.length - 1;
              return (
                <div key={idx} className="relative">
                  <div
                    onClick={() => setActiveStage(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? isFinal
                          ? 'bg-blue-950/60 border-blue-500 ring-2 ring-blue-500/30 shadow-lg shadow-blue-950/50'
                          : 'bg-[#0F1C3F] border-blue-400/60 ring-1 ring-blue-400/30'
                        : 'bg-[#0B132B]/60 border-white/10 hover:border-white/20 hover:bg-[#0B132B]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base font-mono ${
                          isFinal
                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                            : 'bg-white/10 text-slate-200'
                        }`}>
                          {stage.count}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            {stage.label}
                            {isFinal && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-sans font-bold">
                                Delivered (12%)
                              </span>
                            )}
                          </h3>
                          <p className="text-xs text-slate-400">{stage.detail}</p>
                        </div>
                      </div>

                      {stage.dropLabel && (
                        <div className="text-right shrink-0">
                          <span className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-1 rounded-md">
                            {stage.dropLabel}
                          </span>
                        </div>
                      )}
                    </div>

                    {stage.dropReason && (
                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                        <span><strong className="text-slate-300">Filtered for:</strong> {stage.dropReason}</span>
                      </div>
                    )}
                  </div>

                  {/* Down arrow connector */}
                  {idx < FUNNEL_STAGES.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: The 3 Core Quality Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0B132B] border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                How We Protect Your Sales Team&apos;s Time
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white flex items-center gap-2 mb-1">
                    <span className="text-blue-400 font-mono">01</span> We Pay For the Rejects
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Media spend on inquiries that wash out is 100% ours to absorb. You only see and pay for opportunities that clear every threshold.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white flex items-center gap-2 mb-1">
                    <span className="text-blue-400 font-mono">02</span> Screened Before a Human Calls
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Company size, purchase timeline, budget availability, and geographic territory are validated directly at the initial submission form.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white flex items-center gap-2 mb-1">
                    <span className="text-blue-400 font-mono">03</span> Verified by Live Specialists
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Re-confirmed on the phone against your custom criteria with mobile OTP verification before routing directly to your sales reps.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                <span>Exclusivity standard:</span>
                <span className="font-bold text-white">1 Buyer Per Opportunity • Never Resold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
