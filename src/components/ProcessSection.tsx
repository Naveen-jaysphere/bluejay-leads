import React from 'react';
import { Route, CheckCircle, Scale } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Meta, YouTube & Google Advertising',
      desc: 'We run targeted ads across Meta, YouTube, and Google targeting individuals actively seeking representation in your state and practice area.'
    },
    {
      step: '02',
      title: 'Multi-Point Intake Underwriting',
      desc: 'Claimants complete an extensive screening covering incident date (SOL), county jurisdiction, injury severity/damages, and affirmative confirmation of unrepresented status.'
    },
    {
      step: '03',
      title: 'Real-Time CRM Delivery or Warm Call Bridge',
      desc: 'Qualified records are instantaneously pushed to your firm’s CRM (Lead Docket, Filevine, Clio) via API or transferred live on a three-way phone bridge ready for retainer execution.'
    }
  ];

  return (
    <section id="process" className="py-24 bg-[#F8FAFD] text-slate-800 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052FF] text-xs font-semibold mb-3">
            <Route className="w-3.5 h-3.5" />
            <span>Transparent Intake Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1938]">
            From Initial Inbound Click to Signed Retainer.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Every prospective case follows the same disciplined underwriting track. Here is exactly what occurs before your intake team receives the file or answers the live transfer.
          </p>
        </div>

        {/* 3-step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100/90 rounded-2xl p-7 shadow-[0_6px_25px_-5px_rgba(2,82,255,0.06)] hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-black text-[#0052FF]">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-200 group-hover:bg-[#0052FF] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1938] mb-2.5 group-hover:text-[#0052FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5 text-[#0052FF] font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Audit-Ready Verification
                </span>
                <span className="text-slate-400">Step {step.step} of 03</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
