import React, { useState } from 'react';
import { FUNNEL_STAGES } from '../data/blueJayData';
import { ShieldCheck, Scale, PhoneCall, AlertCircle, CheckCircle2, ArrowDown, FileCheck, Lock } from 'lucide-react';

export const GauntletFunnel: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(3); // Default to delivered

  return (
    <section id="lead-quality" className="py-24 bg-[#0A1428] text-white border-b border-blue-900/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0052FF]" />
            Rigorous Legal Negative Intake Qualification
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Over 85% of what we generate never reaches your firm.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              That is the entire point.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
            Every inbound claimant inquiry undergoes a strict 4-stage gauntlet. Claimants who wash out due to pre-existing legal representation, expired statutes of limitations, or zero liability are our financial burden to absorb, never yours. Your intake department only speaks with retainable prospects.
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
                          ? 'bg-blue-950/70 border-[#0052FF] ring-2 ring-blue-500/40 shadow-xl shadow-blue-950/60'
                          : 'bg-[#102046] border-blue-400/60 ring-1 ring-blue-400/30'
                        : 'bg-[#0E1A33]/70 border-white/10 hover:border-white/20 hover:bg-[#0E1A33]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <div className="flex items-center gap-3.5">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base font-mono ${
                          isFinal
                            ? 'bg-[#0052FF] text-white shadow-lg shadow-blue-500/40'
                            : 'bg-white/10 text-slate-200'
                        }`}>
                          {stage.count}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            {stage.label}
                            {isFinal && (
                              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-sans font-bold">
                                Delivered (12%)
                              </span>
                            )}
                          </h3>
                          <p className="text-xs text-slate-300">{stage.detail}</p>
                        </div>
                      </div>

                      {stage.dropLabel && (
                        <div className="text-right shrink-0">
                          <span className="text-xs font-semibold text-rose-300 bg-rose-500/15 border border-rose-500/30 px-2.5 py-1 rounded-lg">
                            {stage.dropLabel}
                          </span>
                        </div>
                      )}
                    </div>

                    {stage.dropReason && (
                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                        <span><strong className="text-slate-300">Disqualification Triggers:</strong> {stage.dropReason}</span>
                      </div>
                    )}
                  </div>

                  {/* Down connector arrow */}
                  {idx < FUNNEL_STAGES.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className="w-4 h-4 text-blue-400/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Institutional Safeguards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#0E1A33] border border-blue-500/20 rounded-2xl p-6 sm:p-7 shadow-lg shadow-black/20">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#0052FF]" />
                How We Protect Your Firm's Intake Staff
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white flex items-center gap-2 mb-1.5">
                    <span className="text-[#0052FF] font-mono text-xs">01</span>
                    <span>We Absorb All Disqualified Callers</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Media acquisition costs on inquiries that fail our criteria are 100% ours to absorb. Your firm only pays for claimants who clear every qualification checkpoint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white flex items-center gap-2 mb-1.5">
                    <span className="text-[#0052FF] font-mono text-xs">02</span>
                    <span>Strict Statute & Representation Checks</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Incident date (SOL window), jurisdiction, injury severity, and signed confirmation of no existing attorney are screened before human dispatch.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="font-bold text-white flex items-center gap-2 mb-1.5">
                    <span className="text-[#0052FF] font-mono text-xs">03</span>
                    <span>Live Legal Intake Specialist Confirmation</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Re-verified on the phone by US-based intake specialists with mobile SMS one-time passcode (OTP) verification before CRM webhook routing.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-slate-400">Exclusivity guarantee:</span>
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#0052FF]" />
                  1 Law Firm Per Claimant • Never Resold
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
