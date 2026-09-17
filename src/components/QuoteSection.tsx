import React, { useState } from 'react';
import { US_STATES } from '../data/blueJayData';
import { QuoteFormData } from '../types';
import { CheckCircle2, ArrowRight, ShieldCheck, Lock, AlertCircle } from 'lucide-react';
import { LegalModal, LegalTab } from './LegalModal';

interface QuoteSectionProps {
  preselectedPlan?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ preselectedPlan }) => {
  const [formData, setFormData] = useState<QuoteFormData>(() => ({
    name: '',
    firm: '',
    workEmail: '',
    phone: '',
    primaryState: '',
    monthlyVolume: '',
    caseTypesAndCriteria: preselectedPlan ? (preselectedPlan.includes('tier') ? preselectedPlan : `Target practice area: ${preselectedPlan}`) : ''
  }));

  // Sync if preselectedPlan changes
  React.useEffect(() => {
    if (preselectedPlan) {
      setFormData(prev => ({
        ...prev,
        caseTypesAndCriteria: prev.caseTypesAndCriteria ? prev.caseTypesAndCriteria : `Target practice area: ${preselectedPlan}`
      }));
    }
  }, [preselectedPlan]);

  const [tcpaConsent, setTcpaConsent] = useState(true);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTab>('privacy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const openLegalModal = (tab: LegalTab) => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };

  const volumePresets = ['15-30 / mo', '30-60 / mo', '60-120 / mo', '120+ / mo (Multi-State)'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.primaryState) {
      setFormError('Please select your primary bar jurisdiction/state.');
      return;
    }
    if (!formData.monthlyVolume.trim()) {
      setFormError('Please indicate your target monthly caseload capacity.');
      return;
    }
    if (!tcpaConsent) {
      setFormError('Please confirm TCPA consent to receive your inventory and pricing report.');
      return;
    }
    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  return (
    <section id="quote" className="py-16 bg-[#F8FAFD] text-slate-800 border-b border-blue-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-blue-100 rounded-2xl p-7 sm:p-9 shadow-xl shadow-blue-500/5">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0A1938]">Intake Request Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0A1938]">{formData.name}</strong>. We are compiling available claimant volume and criteria feasibility for <strong className="text-[#0A1938]">{formData.firm || 'your firm'}</strong> in <strong className="text-[#0A1938]">{formData.primaryState || 'your state'}</strong>.
                  </p>
                  <p className="text-xs text-[#0052FF] font-mono">
                    An intake director will connect at {formData.workEmail} within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-slate-500 hover:text-[#0052FF] underline cursor-pointer"
                  >
                    Submit another practice area inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="user-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance, Esq."
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="firm-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Law Firm Name *
                      </label>
                      <input
                        id="firm-name"
                        type="text"
                        required
                        value={formData.firm}
                        onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                        placeholder="Vance & Partners Legal Group"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="work-email" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="work-email"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="marcus@vancelegal.com"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Direct Phone *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(555) 249-8103"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="primary-state" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Bar Jurisdiction / State *
                      </label>
                      <select
                        id="primary-state"
                        required
                        value={formData.primaryState}
                        onChange={(e) => setFormData({ ...formData, primaryState: e.target.value })}
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors cursor-pointer"
                      >
                        <option value="">Select State</option>
                        {US_STATES.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="monthly-volume" className="block text-xs font-bold text-slate-700 mb-1.5">
                        Target Monthly Inquiries *
                      </label>
                      <input
                        id="monthly-volume"
                        type="text"
                        required
                        value={formData.monthlyVolume}
                        onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                        placeholder="e.g. 40 inquiries / month"
                        className="w-full bg-[#F8FAFD] border border-blue-200/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#0052FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Volume Presets Quick Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    <span className="text-[11px] font-medium text-slate-500 mr-1">Quick select:</span>
                    {volumePresets.map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setFormData({ ...formData, monthlyVolume: preset })}
                        className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                          formData.monthlyVolume === preset
                            ? 'bg-blue-50 border-[#0052FF] text-[#0052FF] font-bold'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label htmlFor="case-criteria" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Target Practice Areas & Negative Criteria *
                    </label>
                    <textarea
                      id="case-criteria"
                      required
                      rows={3}
                      value={formData.caseTypesAndCriteria}
                      onChange={(e) => setFormData({ ...formData, caseTypesAndCriteria: e.target.value })}
                      placeholder="e.g. Motor Vehicle Accidents & Commercial Trucking, incident within 90 days, clear liability, unrepresented claimants only."
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
                        <strong>TCPA Prior Express Written Consent:</strong> By clicking "Request Inventory & Pricing Report", I provide my express written consent authorizing <strong>Blue Jay Leads (operated by Jaysphere LLC)</strong> and its designated specialists to contact me at the phone number and email provided above via phone calls, SMS/text messages, and automated systems regarding legal client acquisition inventory and service quotes. Consent is not a condition of purchasing services. Message and data rates may apply. Reply STOP to cancel at any time. I agree to the{' '}
                        <button
                          type="button"
                          onClick={() => openLegalModal('privacy')}
                          className="text-[#0052FF] underline hover:text-[#0038B8] font-semibold cursor-pointer"
                        >
                          Privacy Policy
                        </button>{' '}
                        and{' '}
                        <button
                          type="button"
                          onClick={() => openLegalModal('terms')}
                          className="text-[#0052FF] underline hover:text-[#0038B8] font-semibold cursor-pointer"
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
                      <span>Analyzing Regional Inventory...</span>
                    ) : (
                      <>
                        <span>Request Inventory & Pricing Report</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-center text-slate-500 pt-1">
                    No agency retainers. Your firm only pays for qualified claimant inquiries delivered by Blue Jay Leads.
                  </p>
                </form>
              )}
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
