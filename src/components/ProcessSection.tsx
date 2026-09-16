import React from 'react';
import { PROCESS_STEPS } from '../data/blueJayData';
import { Route, CheckCircle } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-[#F4F8FD] text-slate-800 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#0052FF] text-xs font-semibold mb-3">
            <Route className="w-3.5 h-3.5" />
            Transparent Operational Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A1938]">
            From Initial Click to Closed Deal.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            Every prospect runs the same disciplined qualification track. Here is exactly what happens before your sales phone rings or CRM notifies you.
          </p>
        </div>

        {/* 3-step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-blue-100/90 rounded-2xl p-6 shadow-[0_6px_25px_-5px_rgba(2,82,255,0.06)] hover:border-blue-300 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#0052FF]">
                    {step.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-200 group-hover:bg-[#0052FF] transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                <CheckCircle className="w-3.5 h-3.5 text-[#0052FF]" />
                <span>Standard SLA Protocol</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
