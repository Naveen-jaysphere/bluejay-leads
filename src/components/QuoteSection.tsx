import React, { useState } from 'react';
import { TARGET_REGIONS, BUSINESS_INDUSTRIES } from '../data/blueJayData';
import { QuoteFormData } from '../types';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, Lock } from 'lucide-react';
import { LegalModal, LegalTab } from './LegalModal';

interface QuoteSectionProps {
  preselectedPlan?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ preselectedPlan }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    companyName: '',
    workEmail: '',
    phone: '',
    targetRegion: 'Nationwide (All 50 US States)',
    industry: 'B2B & Professional Services',
    monthlyVolume: '25–75 leads / month',
    notes: preselectedPlan ? `Interested in: ${preselectedPlan}` : ''
  });

  const [tcpaConsent, setTcpaConsent] = useState(true);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('privacy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openLegalModal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tcpaConsent) {
      alert('Please confirm your consent to be contacted under our TCPA compliance protocol.');
      return;
    }
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 850);
  };

  return (
    <section id="quote" className="py-20 bg-[#F4F8FD] text-slate-800 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Value Pitch & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-[#0052FF] text-xs font-semibold mb-3">
                <Clock className="w-3.5 h-3.5" />
                Response Within 1 Business Day
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A1938] leading-tight">
                Tell us your target market and lead goals.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                We will send real numbers: exactly what qualified opportunity volume we can deliver in your sector, at what per-lead rate, and how quickly your pipeline can launch.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1938]">100% Performance-Based Model</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Pay only for prospects that meet your exact pre-set qualification criteria. Zero marketing retainers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1938]">Launch in 24 to 48 Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Define your target territories and monthly volume to activate qualified customer routing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF] shrink-0 mt-0.5">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0A1938]">Exclusive 1:1 FCC & TCPA Certified</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    All inquiries include audit-ready consent timestamps and are delivered exclusively to one buyer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-blue-100/90 rounded-2xl p-6 sm:p-8 shadow-xl shadow-blue-500/5">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A1938]">Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0A1938]">{formData.name}</strong>. We are compiling available capacity and per-lead pricing for <strong className="text-[#0A1938]">{formData.companyName || 'your business'}</strong> in <strong className="text-[#0A1938]">{formData.targetRegion}</strong>.
                  </p>
                  <p className="text-xs text-[#0052FF] font-mono">
                    An account executive will connect at {formData.workEmail} within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-slate-500 hover:text-[#0052FF] underline cursor-pointer"
                  >
                    Submit another campaign request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="user-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Company Name *
                      </label>
                      <input
                        id="company-name"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme Growth Inc."
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="work-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="work-email"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="alex@acmegrowth.com"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="work-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Direct Phone *
                      </label>
                      <input
                        id="work-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 345-6789"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="target-region" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Target Market / Geography
                      </label>
                      <select
                        id="target-region"
                        value={formData.targetRegion}
                        onChange={(e) => setFormData({ ...formData, targetRegion: e.target.value })}
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      >
                        {TARGET_REGIONS.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="monthly-volume" className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Target Monthly Volume
                      </label>
                      <select
                        id="monthly-volume"
                        value={formData.monthlyVolume}
                        onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      >
                        <option value="Under 25 leads / month">Under 25 leads / month</option>
                        <option value="25–75 leads / month">25–75 leads / month</option>
                        <option value="75–200 leads / month">75–200 leads / month</option>
                        <option value="200+ leads / month">200+ leads / month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Business Industry
                    </label>
                    <select
                      id="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                    >
                      {BUSINESS_INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="additional-notes" className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Ideal Customer Profile (ICP) & Qualification Criteria (Optional)
                    </label>
                    <textarea
                      id="additional-notes"
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Decision maker titles, company size, minimum project spend $5,000, specific zip codes..."
                      className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                    />
                  </div>

                  {/* TCPA Express Written Consent Disclosure Block */}
                  <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-[11px] text-slate-600 leading-relaxed space-y-2">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={tcpaConsent}
                        onChange={(e) => setTcpaConsent(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-[#0052FF] focus:ring-[#0052FF] cursor-pointer"
                      />
                      <span className="text-slate-700">
                        <strong>TCPA Prior Express Written Consent:</strong> By clicking "Get Leads & Pricing", I provide my express written consent authorizing <strong>Blue Jay Leads (operated by Jaysphere LLC)</strong> and its designated verification specialists to contact me at the phone number and email provided above via telephone calls, automated dialing technology, SMS/text messages, and artificial/prerecorded voice messages regarding business acquisition opportunities and service quotes. Consent is not a condition of purchasing any services. Message and data rates may apply. Reply STOP to cancel at any time. I also agree to the{' '}
                        <button
                          type="button"
                          onClick={() => openLegalModal('privacy')}
                          className="text-[#0052FF] underline hover:text-[#0038B8] font-semibold"
                        >
                          Privacy Policy
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={() => openLegalModal('terms')}
                          className="text-[#0052FF] underline hover:text-[#0038B8] font-semibold"
                        >
                          Terms of Service
                        </button>.
                      </span>
                    </label>

                    <div className="flex items-center gap-4 pt-1.5 border-t border-blue-200/60 text-[10px] text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-[#0052FF]" />
                        FCC 1:1 Seller Consent Compliant
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-[#0052FF]" />
                        256-Bit Encrypted Data Transit
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !tcpaConsent}
                    className="w-full bg-[#0052FF] hover:bg-[#0043D6] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isSubmitting ? (
                      <span>Calculating Market Availability...</span>
                    ) : (
                      <>
                        <span>Get Leads & Pricing</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    No long-term commitments. You only pay for qualified opportunities delivered by Blue Jay Leads.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Regulatory Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        initialTab={legalModalTab}
        onClose={() => setLegalModalOpen(false)}
      />
    </section>
  );
};
