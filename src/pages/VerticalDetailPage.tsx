import React, { useState } from 'react';
import { VerticalDetail, VERTICAL_DETAILS } from '../data/verticalDetails';
import { US_STATES } from '../data/blueJayData';
import { 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Lock, 
  ChevronRight, 
  Clock, 
  Copy, 
  Check, 
  Send,
  HelpCircle,
  AlertCircle
} from 'lucide-react';

interface VerticalDetailPageProps {
  vertical: VerticalDetail;
  onNavigateToVertical: (slug: string) => void;
  onNavigateHome: () => void;
  onNavigateToAllVerticals: () => void;
}

export const VerticalDetailPage: React.FC<VerticalDetailPageProps> = ({
  vertical,
  onNavigateToVertical,
  onNavigateHome,
  onNavigateToAllVerticals
}) => {
  const [payloadView, setPayloadView] = useState<'formatted' | 'json'>('formatted');
  const [copiedJson, setCopiedJson] = useState(false);

  // Inquiry form state
  const [formData, setFormData] = useState({
    name: '',
    firm: '',
    workEmail: '',
    phone: '',
    primaryState: '',
    monthlyVolume: '30-60 / mo',
    customNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(vertical.samplePayload, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.primaryState) {
      setFormError('Please select your target state bar jurisdiction.');
      return;
    }
    if (!formData.workEmail || !formData.name) {
      setFormError('Please provide your name and law firm work email.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  // Other verticals to recommend
  const relatedVerticals = VERTICAL_DETAILS.filter(v => v.slug !== vertical.slug).slice(0, 4);

  return (
    <div className="bg-[#F8FAFD] text-slate-800 pb-24">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-blue-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#0052FF] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button 
              onClick={onNavigateToAllVerticals}
              className="hover:text-[#0052FF] transition-colors cursor-pointer"
            >
              Verticals
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0A1938] font-semibold">{vertical.shortTitle} Leads</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white border-b border-blue-100 pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052FF] text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{vertical.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0A1938] leading-[1.1]">
              {vertical.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#0052FF] font-semibold mt-4">
              {vertical.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              {vertical.overview}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <a
                href="#inventory-quote"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('inventory-quote')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#0052FF] hover:bg-[#0043D6] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#sample-payload"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('sample-payload')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0A1938] border border-slate-200 text-sm font-semibold px-5 py-3 rounded-xl transition-all cursor-pointer"
              >
                View Sample Lead
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sample Lead Payload Section */}
      <section id="sample-payload" className="py-16 bg-[#080E1C] text-slate-100 border-y border-blue-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-mono font-semibold mb-2">
                <span>Sample Live Payload: {vertical.shortTitle}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Inspect a Live {vertical.shortTitle} Intake Delivery
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Every inquiry is transmitted with complete incident facts, verified contact details, and audit-ready consent telemetry.
              </p>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setPayloadView('formatted')}
                className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer ${
                  payloadView === 'formatted' 
                    ? 'bg-[#0052FF] text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Intake Card View
              </button>
              <button
                onClick={() => setPayloadView('json')}
                className={`text-xs px-3 py-1.5 rounded-lg font-mono transition-colors cursor-pointer ${
                  payloadView === 'json' 
                    ? 'bg-[#0052FF] text-white shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Raw JSON Webhook
              </button>
            </div>
          </div>

          {payloadView === 'formatted' ? (
            <div className="bg-[#0D1527] border border-blue-900/50 rounded-2xl p-6 sm:p-8 space-y-6">
              {/* Header with Lead ID and Timestamp */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
                    STATUS: SCREENED & QUALIFIED
                  </span>
                  <span className="text-slate-400">ID: {vertical.samplePayload.leadId}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Delivered in 28 seconds ({vertical.samplePayload.timestamp})</span>
                </div>
              </div>

              {/* Claimant Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 block uppercase font-mono">Claimant</span>
                  <span className="text-white font-bold text-sm">{vertical.samplePayload.claimant.name}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-mono">Jurisdiction</span>
                  <span className="text-white font-semibold">
                    {vertical.samplePayload.claimant.city}, {vertical.samplePayload.claimant.state}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase font-mono">Verified Mobile / Email</span>
                  <span className="text-blue-400 font-mono">
                    {vertical.samplePayload.claimant.phone} • {vertical.samplePayload.claimant.email}
                  </span>
                </div>
              </div>

              {/* Incident Facts Grid */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono mb-3">
                  Verified Case Details & Incident Facts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {Object.entries(vertical.samplePayload.incidentDetails).map(([key, val]) => (
                    <div key={key} className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                      <span className="text-slate-400 font-mono block text-[11px] mb-1">{key}:</span>
                      <span className="text-slate-100 font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Record */}
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-blue-300 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                    Regulatory Compliance & TCPA Certificate
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    IP: {vertical.samplePayload.compliance.ipAddress}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                  <div>
                    <span className="text-slate-500">Jornaya LeadID:</span> {vertical.samplePayload.compliance.jornayaLeadId}
                  </div>
                  <div>
                    <span className="text-slate-500">TrustedForm Cert:</span> {vertical.samplePayload.compliance.trustedFormCertUrl}
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 italic">
                  "{vertical.samplePayload.compliance.consentText}"
                </p>
              </div>
            </div>
          ) : (
            <div className="relative bg-[#050A14] border border-blue-900/60 rounded-2xl p-6 font-mono text-xs text-blue-300">
              <button
                onClick={handleCopyJson}
                className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedJson ? 'Copied' : 'Copy JSON'}</span>
              </button>
              <pre className="overflow-x-auto p-2 text-slate-300 leading-relaxed">
                {JSON.stringify(vertical.samplePayload, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry & Inventory Request Section */}
      <section id="inventory-quote" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-xl shadow-blue-500/5">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0052FF] text-xs font-semibold mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>Response Within 1 Business Day</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1938]">
              Contact Us for {vertical.shortTitle} Leads
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Tell us your target state jurisdictions and monthly intake targets. We will compile real-time claimant volume and per-case rates for your firm. Direct email: <a href="mailto:Naveen@bluejayleads.io" className="text-[#0052FF] font-semibold hover:underline">Naveen@bluejayleads.io</a>
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#0A1938]">Inquiry Received</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-[#0A1938]">{formData.name}</strong>. We are reviewing available {vertical.shortTitle} volume for <strong className="text-[#0A1938]">{formData.firm || 'your firm'}</strong> in <strong className="text-[#0A1938]">{formData.primaryState || 'your state'}</strong>.
              </p>
              <p className="text-xs text-[#0052FF] font-mono">
                An intake strategist will connect at {formData.workEmail} within one business day. Direct contact: <a href="mailto:Naveen@bluejayleads.io" className="underline font-semibold">Naveen@bluejayleads.io</a>.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs text-slate-500 hover:text-[#0052FF] underline cursor-pointer"
              >
                Submit another inquiry
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Attorney Sarah Jenkins"
                    className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Law Firm Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    placeholder="e.g. Jenkins & Associates Law"
                    className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="e.g. sarah@jenkinslawfirm.com"
                    className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Direct Phone / Cell *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. (555) 019-2834"
                    className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary State Jurisdiction *
                  </label>
                  <select
                    required
                    value={formData.primaryState}
                    onChange={(e) => setFormData({ ...formData, primaryState: e.target.value })}
                    className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  >
                    <option value="">Select Target State...</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Monthly Caseload Target
                  </label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                  >
                    <option value="15-30 / mo">15-30 Cases / Month</option>
                    <option value="30-60 / mo">30-60 Cases / Month</option>
                    <option value="60-120 / mo">60-120 Cases / Month</option>
                    <option value="120+ / mo">120+ Cases / Month (Multi-State)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Criteria or County Targeting Preferences (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.customNotes}
                  onChange={(e) => setFormData({ ...formData, customNotes: e.target.value })}
                  placeholder={`e.g. We require ${vertical.shortTitle} claimants with specific injury thresholds or specific county venue requirements...`}
                  className="w-full bg-[#F8FAFD] border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0052FF] hover:bg-[#0043D6] disabled:opacity-50 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                {isSubmitting ? (
                  <span>Submitting Inquiry...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Contact Us for Rates & Capacity</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-500 pt-1">
                Zero agency retainers. Your firm only pays for verified claimants delivered exclusively to your firm. Direct inquiries: <a href="mailto:Naveen@bluejayleads.io" className="text-[#0052FF] font-semibold hover:underline">Naveen@bluejayleads.io</a>
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions for this Vertical */}
      {vertical.faqList && vertical.faqList.length > 0 && (
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#0A1938] mb-6 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-[#0052FF]" />
            <span>Common Questions About {vertical.shortTitle} Leads</span>
          </h3>
          <div className="space-y-4">
            {vertical.faqList.map((faq, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-blue-100 shadow-2xs">
                <h4 className="text-sm font-bold text-[#0A1938] mb-1.5">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Explore Other Practice Areas / Verticals */}
      <section className="py-16 border-t border-blue-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#0A1938]">
                Explore Additional Practice Area Verticals
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Blue Jay Leads generates verified claimants across more than 50 legal practice areas.
              </p>
            </div>
            <button
              onClick={onNavigateToAllVerticals}
              className="text-xs sm:text-sm font-bold text-[#0052FF] hover:underline flex items-center gap-1.5 cursor-pointer"
            >
              <span>View All 50+ Verticals</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedVerticals.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigateToVertical(rel.slug)}
                className="group bg-[#F8FAFD] hover:bg-white p-5 rounded-2xl border border-blue-100/80 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#0052FF] font-semibold uppercase tracking-wider block mb-1">
                    {rel.category}
                  </span>
                  <h4 className="text-base font-bold text-[#0A1938] group-hover:text-[#0052FF] transition-colors">
                    {rel.shortTitle} Leads
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {rel.tagline}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#0052FF]">
                  <span>Explore Vertical</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
