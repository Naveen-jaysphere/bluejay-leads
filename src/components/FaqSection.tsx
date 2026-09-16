import React, { useState } from 'react';
import { FAQS } from '../data/blueJayData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white text-slate-800 border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#0052FF] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A1938]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Everything your firm needs to know about our lead standards, replacement guarantees, and billing terms.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F8FAFD] border border-blue-100/90 rounded-2xl overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-blue-50/50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1938]">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center shrink-0 text-slate-600 shadow-xs">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#0052FF]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100/60 bg-white/70">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
