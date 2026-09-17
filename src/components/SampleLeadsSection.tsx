import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Info, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Smartphone, 
  Lock, 
  CheckSquare, 
  SlidersHorizontal,
  LayoutGrid,
  CreditCard,
  Building2,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface SampleLeadsSectionProps {
  onNavigateToVerticals?: () => void;
  onNavigateToContact?: () => void;
}

export const SampleLeadsSection: React.FC<SampleLeadsSectionProps> = ({ 
  onNavigateToVerticals, 
  onNavigateToContact 
}) => {
  // Active tab state for selectable tab view on desktop/mobile
  const [activeTab, setActiveTab] = useState<'mva' | 'slip_fall' | 'workers_comp'>('mva');
  const [viewMode, setViewMode] = useState<'tabs' | 'grid'>('grid');

  // Individual expandable consent details per lead
  const [consentExpanded, setConsentExpanded] = useState<Record<string, boolean>>({
    'lead-mva': true,
    'lead-slip': true,
    'lead-wc': true
  });

  // Modal for TrustedForm Certificate
  const [activeCertificate, setActiveCertificate] = useState<{
    id: string;
    caseType: string;
    timestamp: string;
    ip: string;
  } | null>(null);

  const toggleConsent = (leadId: string) => {
    setConsentExpanded(prev => ({
      ...prev,
      [leadId]: !prev[leadId]
    }));
  };

  return (
    <section id="sample-leads" className="py-24 bg-[#080E1C] text-slate-100 border-b border-blue-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MANDATORY PROMINENT DISCLAIMER AT THE VERY TOP OF THE SECTION */}
        <div className="mb-14 rounded-xl bg-[#0D182E] border border-blue-500/30 p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <strong className="text-white font-semibold">Disclaimer:</strong> All leads shown below are fictional examples created for demonstration purposes only. They are not real consumer submissions and are intended solely to illustrate the type of information that may be delivered.
          </p>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Sample Leads
            </h2>
          </div>

          {/* View Toggle on Desktop (Tabs vs All 3 Grid) */}
          <div className="hidden lg:flex items-center gap-2 bg-[#0B1528] p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-[#0052FF] text-white shadow-xs' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Side-by-Side (3 Records)</span>
            </button>
            <button
              onClick={() => setViewMode('tabs')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                viewMode === 'tabs' 
                  ? 'bg-[#0052FF] text-white shadow-xs' 
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Detailed Inspection Tabs</span>
            </button>
          </div>
        </div>

        {/* Tab Selection Row (Visible in Tab Mode or on Mobile) */}
        {(viewMode === 'tabs' || true) && (
          <div className="lg:hidden flex border-b border-slate-800 mb-8 overflow-x-auto pb-1 gap-2">
            <button
              onClick={() => setActiveTab('mva')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'mva'
                  ? 'bg-[#0052FF] text-white'
                  : 'bg-[#0B1528] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Motor Vehicle Accident
            </button>
            <button
              onClick={() => setActiveTab('slip_fall')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'slip_fall'
                  ? 'bg-[#0052FF] text-white'
                  : 'bg-[#0B1528] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Slip & Fall
            </button>
            <button
              onClick={() => setActiveTab('workers_comp')}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === 'workers_comp'
                  ? 'bg-[#0052FF] text-white'
                  : 'bg-[#0B1528] text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Workers' Compensation
            </button>
          </div>
        )}

        {/* Tab Selection Row (Visible on Desktop if in 'tabs' mode) */}
        {viewMode === 'tabs' && (
          <div className="hidden lg:flex border-b border-slate-800 mb-8 gap-3">
            <button
              onClick={() => setActiveTab('mva')}
              className={`px-5 py-3 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-t border-x ${
                activeTab === 'mva'
                  ? 'bg-[#0E1A33] text-white border-slate-700 border-b-transparent shadow-sm'
                  : 'bg-[#080F1E] text-slate-400 border-transparent hover:text-white'
              }`}
            >
              <span>Example Lead 1 — Motor Vehicle Accident (MVA)</span>
            </button>
            <button
              onClick={() => setActiveTab('slip_fall')}
              className={`px-5 py-3 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-t border-x ${
                activeTab === 'slip_fall'
                  ? 'bg-[#0E1A33] text-white border-slate-700 border-b-transparent shadow-sm'
                  : 'bg-[#080F1E] text-slate-400 border-transparent hover:text-white'
              }`}
            >
              <span>Example Lead 2 — Slip & Fall</span>
            </button>
            <button
              onClick={() => setActiveTab('workers_comp')}
              className={`px-5 py-3 rounded-t-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border-t border-x ${
                activeTab === 'workers_comp'
                  ? 'bg-[#0E1A33] text-white border-slate-700 border-b-transparent shadow-sm'
                  : 'bg-[#080F1E] text-slate-400 border-transparent hover:text-white'
              }`}
            >
              <span>Example Lead 3 — Workers' Compensation</span>
            </button>
          </div>
        )}

        {/* MAIN LEAD CARDS CONTAINER */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-3' : 'grid-cols-1'}`}>
          
          {/* ========================================================================= */}
          {/* EXAMPLE LEAD 1: MOTOR VEHICLE ACCIDENT (MVA) */}
          {/* ========================================================================= */}
          {(viewMode === 'grid' || activeTab === 'mva') && (
            <div className="bg-[#0C162B] border border-slate-700/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
              <div>
                {/* Header Strip with Example Lead Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0052FF]/20 text-blue-300 border border-blue-500/30">
                      Example Lead
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      ID: MVA-GA-30339
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
                    MVA Intake
                  </span>
                </div>

                {/* Sub-header title */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-white">
                    Motor Vehicle Accident (MVA)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time intake webhook payload • 1:1 Exclusive
                  </p>
                </div>

                {/* Contact Information Group */}
                <div className="mb-4 bg-[#081020] rounded-xl p-3.5 border border-slate-800/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Contact Information
                  </span>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">First Name</span>
                      <span className="text-white font-medium">Jennifer</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Last Name</span>
                      <span className="text-white font-medium">T.</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Mobile Number</span>
                      <span className="text-slate-200 font-mono font-medium">(404) 555-0129</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">ZIP Code / State</span>
                      <span className="text-slate-200 font-medium">30339, GA</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[11px]">Email Address</span>
                      <span className="text-slate-300 font-mono text-[11px] break-all">jennifer.t@examplemail.com</span>
                    </div>
                  </div>
                </div>

                {/* Qualification Parameters Group */}
                <div className="mb-4 bg-[#081020] rounded-xl p-3.5 border border-slate-800/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                    Intake Qualification Fields
                  </span>
                  <dl className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Incident Timeframe:</dt>
                      <dd className="text-blue-300 font-semibold text-[11px]">Within 30 days</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Prior Attorney:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">No</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">OTP Verified:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">Yes</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Consent (TCPA):</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">Captured</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Medical Treatment Started:</dt>
                      <dd className="text-white font-medium text-[11px]">Yes</dd>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <dt className="text-slate-400 text-[11px]">Insured at Time of Accident:</dt>
                      <dd className="text-white font-medium text-[11px]">Yes (when applicable)</dd>
                    </div>
                  </dl>
                </div>

                {/* Casual, Conversational Notes on Accident */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                    Notes on Accident (Claimant-Written)
                  </span>
                  <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800/90 text-xs text-slate-200 leading-relaxed italic">
                    “I got rear ended while I was stopped at a red light. My neck and lower back started hurting later that day so I went to urgent care. It’s still bothering me and I’ve gone back a couple times for treatment. My car got pretty messed up too and I wanted to see if I should talk to an attorney.”
                  </div>
                </div>

                {/* Expandable Consent Details Area */}
                <div className="mb-4 bg-[#091326] border border-blue-900/40 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleConsent('lead-mva')}
                    className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-blue-300">
                      <Lock className="w-3.5 h-3.5 text-blue-400" />
                      Consent Details (Audited Record)
                    </span>
                    {consentExpanded['lead-mva'] ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {consentExpanded['lead-mva'] && (
                    <div className="px-3.5 pb-3 pt-1 border-t border-slate-800 text-[11px] font-mono space-y-1.5 bg-[#060D1A]/90">
                      <div className="flex justify-between">
                        <span className="text-slate-400">OTP Verified:</span>
                        <span className="text-emerald-400 font-semibold">Yes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">TCPA Consent:</span>
                        <span className="text-emerald-400 font-semibold">Captured</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timestamp:</span>
                        <span className="text-slate-200">Sep. 16, 2026 — 2:42 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">IP Address:</span>
                        <span className="text-slate-200">192.0.2.24</span>
                      </div>
                      <div className="pt-1.5 flex justify-between items-center border-t border-slate-800/80">
                        <span className="text-slate-400">TrustedForm Certificate:</span>
                        <button
                          type="button"
                          onClick={() => setActiveCertificate({
                            id: 'TF-MVA-8821',
                            caseType: 'Motor Vehicle Accident (MVA)',
                            timestamp: 'Sep. 16, 2026 — 2:42 PM',
                            ip: '192.0.2.24'
                          })}
                          className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 font-medium cursor-pointer"
                        >
                          <span>View Example Certificate</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Campaign Underwriting Notes Callout */}
                <div className="p-3 rounded-lg bg-[#070E1C] border border-slate-800 text-[11px] text-slate-400 leading-normal space-y-1">
                  <span className="text-slate-300 font-semibold block">Configurable Intake Criteria:</span>
                  <p>• Incident timeframe configurable: 30 days / 3 months / 6 months / 1 year / 2 years</p>
                  <p>• California campaigns: Insured at Time of Accident field supports Prop 213 compliance</p>
                </div>
              </div>

              {/* Card Footer Delivery Status */}
              <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Webhook Synced
                </span>
                <span>Delivered: 4 mins ago</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* EXAMPLE LEAD 2: SLIP & FALL */}
          {/* ========================================================================= */}
          {(viewMode === 'grid' || activeTab === 'slip_fall') && (
            <div className="bg-[#0C162B] border border-slate-700/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
              <div>
                {/* Header Strip with Example Lead Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0052FF]/20 text-blue-300 border border-blue-500/30">
                      Example Lead
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      ID: PREM-AZ-85016
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
                    Premises Liability
                  </span>
                </div>

                {/* Sub-header title */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-white">
                    Slip & Fall
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time intake webhook payload • 1:1 Exclusive
                  </p>
                </div>

                {/* Contact Information Group */}
                <div className="mb-4 bg-[#081020] rounded-xl p-3.5 border border-slate-800/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Contact Information
                  </span>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">First Name</span>
                      <span className="text-white font-medium">Marcus</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Last Name</span>
                      <span className="text-white font-medium">B.</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Mobile Number</span>
                      <span className="text-slate-200 font-mono font-medium">(602) 555-0167</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">ZIP Code / State</span>
                      <span className="text-slate-200 font-medium">85016, AZ</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[11px]">Email Address</span>
                      <span className="text-slate-300 font-mono text-[11px] break-all">marcus.b@examplemail.com</span>
                    </div>
                  </div>
                </div>

                {/* Qualification Parameters Group */}
                <div className="mb-4 bg-[#081020] rounded-xl p-3.5 border border-slate-800/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                    Intake Qualification Fields
                  </span>
                  <dl className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Incident Timeframe:</dt>
                      <dd className="text-blue-300 font-semibold text-[11px]">Within 3 months</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Prior Attorney:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">No</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Injury Area:</dt>
                      <dd className="text-white font-medium text-[11px]">Knee / Lower Back</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">OTP Verified:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">Yes</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Consent (TCPA):</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">Captured</dd>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <dt className="text-slate-400 text-[11px]">Medical Treatment Started:</dt>
                      <dd className="text-white font-medium text-[11px]">Yes</dd>
                    </div>
                  </dl>
                </div>

                {/* Casual, Conversational Notes on Accident */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                    Notes on Accident (Claimant-Written)
                  </span>
                  <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800/90 text-xs text-slate-200 leading-relaxed italic">
                    “I slipped on some water near the entrance of a grocery store. I didn’t see any wet floor sign there. I landed pretty hard on my knee and back. My knee swelled up that night and I went to urgent care the next morning. It’s still been bothering me when I walk.”
                  </div>
                </div>

                {/* Expandable Consent Details Area */}
                <div className="mb-4 bg-[#091326] border border-blue-900/40 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleConsent('lead-slip')}
                    className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-blue-300">
                      <Lock className="w-3.5 h-3.5 text-blue-400" />
                      Consent Details (Audited Record)
                    </span>
                    {consentExpanded['lead-slip'] ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {consentExpanded['lead-slip'] && (
                    <div className="px-3.5 pb-3 pt-1 border-t border-slate-800 text-[11px] font-mono space-y-1.5 bg-[#060D1A]/90">
                      <div className="flex justify-between">
                        <span className="text-slate-400">OTP Verified:</span>
                        <span className="text-emerald-400 font-semibold">Yes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">TCPA Consent:</span>
                        <span className="text-emerald-400 font-semibold">Captured</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timestamp:</span>
                        <span className="text-slate-200">Sep. 16, 2026 — 2:42 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">IP Address:</span>
                        <span className="text-slate-200">192.0.2.24</span>
                      </div>
                      <div className="pt-1.5 flex justify-between items-center border-t border-slate-800/80">
                        <span className="text-slate-400">TrustedForm Certificate:</span>
                        <button
                          type="button"
                          onClick={() => setActiveCertificate({
                            id: 'TF-PREM-4019',
                            caseType: 'Slip & Fall (Premises Liability)',
                            timestamp: 'Sep. 16, 2026 — 2:42 PM',
                            ip: '192.0.2.24'
                          })}
                          className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 font-medium cursor-pointer"
                        >
                          <span>View Example Certificate</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Campaign Underwriting Notes Callout */}
                <div className="p-3 rounded-lg bg-[#070E1C] border border-slate-800 text-[11px] text-slate-400 leading-normal space-y-1">
                  <span className="text-slate-300 font-semibold block">Configurable Intake Criteria:</span>
                  <p>• Injury areas customizable: Arm, back, leg, knee, hands/wrist</p>
                  <p>• Incident timeframe configurable up to 24 months based on campaign criteria</p>
                </div>
              </div>

              {/* Card Footer Delivery Status */}
              <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Webhook Synced
                </span>
                <span>Delivered: 18 mins ago</span>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* EXAMPLE LEAD 3: WORKERS' COMPENSATION */}
          {/* ========================================================================= */}
          {(viewMode === 'grid' || activeTab === 'workers_comp') && (
            <div className="bg-[#0C162B] border border-slate-700/80 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl">
              <div>
                {/* Header Strip with Example Lead Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#0052FF]/20 text-blue-300 border border-blue-500/30">
                      Example Lead
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      ID: WC-MN-55011
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded">
                    Workers' Comp
                  </span>
                </div>

                {/* Sub-header title */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-white">
                    Workers' Compensation
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Real-time intake webhook payload • 1:1 Exclusive
                  </p>
                </div>

                {/* Contact Information Group */}
                <div className="mb-4 bg-[#081020] rounded-xl p-3.5 border border-slate-800/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                    Contact Information
                  </span>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">First Name</span>
                      <span className="text-white font-medium">Michael</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Last Name</span>
                      <span className="text-white font-medium">R.</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Mobile Number</span>
                      <span className="text-slate-200 font-mono font-medium">(651) 555-0184</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">ZIP Code / State</span>
                      <span className="text-slate-200 font-medium">55011, MN</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-slate-400 block text-[11px]">Email Address</span>
                      <span className="text-slate-300 font-mono text-[11px] break-all">michael.r@examplemail.com</span>
                    </div>
                  </div>
                </div>

                {/* Qualification Parameters Group */}
                <div className="mb-4 bg-[#081020] rounded-xl p-3.5 border border-slate-800/90">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2.5 font-semibold">
                    Intake Qualification Fields
                  </span>
                  <dl className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Incident Timeframe:</dt>
                      <dd className="text-blue-300 font-semibold text-[11px]">Within 6 months</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Injured While Working:</dt>
                      <dd className="text-white font-medium text-[11px]">Yes</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Federal / USPS / Railroad / Maritime:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">No</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">Prior Attorney:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">No</dd>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                      <dt className="text-slate-400 text-[11px]">OTP Verified:</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">Yes</dd>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <dt className="text-slate-400 text-[11px]">Consent (TCPA):</dt>
                      <dd className="text-emerald-400 font-semibold text-[11px]">Captured</dd>
                    </div>
                  </dl>
                </div>

                {/* Casual, Conversational Notes on Accident */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1.5 font-semibold">
                    Notes on Accident (Claimant-Written)
                  </span>
                  <div className="bg-[#081020] rounded-xl p-3.5 border border-slate-800/90 text-xs text-slate-200 leading-relaxed italic">
                    “I was putting in a window at work and cut my finger pretty bad. It ended up getting infected and I had to have a few surgeries. Part of my finger ended up being amputated and I was out of work for a few months. I’m back working now but I’m trying to see if I have a case.”
                  </div>
                </div>

                {/* Expandable Consent Details Area */}
                <div className="mb-4 bg-[#091326] border border-blue-900/40 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleConsent('lead-wc')}
                    className="w-full px-3.5 py-2.5 flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-blue-300">
                      <Lock className="w-3.5 h-3.5 text-blue-400" />
                      Consent Details (Audited Record)
                    </span>
                    {consentExpanded['lead-wc'] ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {consentExpanded['lead-wc'] && (
                    <div className="px-3.5 pb-3 pt-1 border-t border-slate-800 text-[11px] font-mono space-y-1.5 bg-[#060D1A]/90">
                      <div className="flex justify-between">
                        <span className="text-slate-400">OTP Verified:</span>
                        <span className="text-emerald-400 font-semibold">Yes</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">TCPA Consent:</span>
                        <span className="text-emerald-400 font-semibold">Captured</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Timestamp:</span>
                        <span className="text-slate-200">Sep. 16, 2026 — 2:42 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">IP Address:</span>
                        <span className="text-slate-200">192.0.2.24</span>
                      </div>
                      <div className="pt-1.5 flex justify-between items-center border-t border-slate-800/80">
                        <span className="text-slate-400">TrustedForm Certificate:</span>
                        <button
                          type="button"
                          onClick={() => setActiveCertificate({
                            id: 'TF-WC-9132',
                            caseType: "Workers' Compensation",
                            timestamp: 'Sep. 16, 2026 — 2:42 PM',
                            ip: '192.0.2.24'
                          })}
                          className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 font-medium cursor-pointer"
                        >
                          <span>View Example Certificate</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Specific Qualification Criteria Panel (Workers' Comp) */}
                <div className="p-3.5 rounded-xl bg-[#09152C] border border-blue-500/30 text-xs">
                  <div className="flex items-center gap-1.5 text-blue-300 font-bold mb-2 text-[11px] uppercase tracking-wider font-mono">
                    <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
                    <span>Workers' Comp Qualification Criteria Panel</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mb-2.5">
                    A delivered Workers' Compensation lead must meet all four mandatory qualification standards:
                  </p>
                  <ol className="space-y-2 text-[11px] text-slate-300">
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">1</span>
                      <div>
                        <strong className="text-white block">Employment-Related Injury</strong>
                        <span className="text-slate-400 text-[10px] leading-tight block">The consumer states that the injury occurred in the course and scope of employment.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">2</span>
                      <div>
                        <strong className="text-white block">Injury Within 24 Months</strong>
                        <span className="text-slate-400 text-[10px] leading-tight block">The reported injury date falls within 24 months of lead delivery.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">3</span>
                      <div>
                        <strong className="text-white block">No Excluded Federal/Special Employment Classification</strong>
                        <span className="text-slate-400 text-[10px] leading-tight block">The consumer states that they are not a federal employee, postal employee, railroad worker, or maritime/longshore worker.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 font-mono text-[10px] font-bold mt-0.5">4</span>
                      <div>
                        <strong className="text-white block">Not Currently Represented</strong>
                        <span className="text-slate-400 text-[10px] leading-tight block">The consumer states that they are not currently represented by another attorney for the injury.</span>
                      </div>
                    </li>
                  </ol>
                  <span className="mt-2.5 block text-[10px] text-blue-400/90 font-mono border-t border-blue-900/40 pt-1.5">
                    * Qualification criteria rule applied prior to delivery.
                  </span>
                </div>
              </div>

              {/* Card Footer Delivery Status */}
              <div className="pt-4 mt-5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Webhook Synced
                </span>
                <span>Delivered: 32 mins ago</span>
              </div>
            </div>
          )}

        </div>

        {/* Closing Copy Block as Requested */}
        <div className="mt-16 rounded-2xl bg-[#0B1528] border border-blue-900/40 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
            See the level of detail your intake team receives.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            Each lead can include verified contact information, qualification responses, consent records, and case-specific details based on the criteria established for your campaign.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {onNavigateToVerticals && (
              <button
                onClick={onNavigateToVerticals}
                className="w-full sm:w-auto bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md shadow-blue-500/25 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>See Available Practice Areas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            {onNavigateToContact && (
              <button
                onClick={onNavigateToContact}
                className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Pricing</span>
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Realistic TrustedForm Fictional Certificate Inspector Modal */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="bg-[#0C162B] border border-slate-700 max-w-lg w-full rounded-2xl p-6 sm:p-7 text-white shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">TrustedForm™ Consent Certificate</h4>
                  <span className="text-[10px] font-mono text-slate-400">Independent Third-Party Verification</span>
                </div>
              </div>
              <button
                onClick={() => setActiveCertificate(null)}
                className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs bg-[#070E1C] p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block text-[10px]">Certificate Token:</span>
                <span className="text-blue-300">{activeCertificate.id}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Case Type:</span>
                <span className="text-slate-200">{activeCertificate.caseType}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Timestamp (UTC / Local):</span>
                <span className="text-slate-200">{activeCertificate.timestamp}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Originating IP Address:</span>
                <span className="text-slate-200">{activeCertificate.ip}</span>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">TCPA Consent Disclosure Language Captured:</span>
                <span className="text-slate-300 text-[11px] block mt-0.5 leading-relaxed font-sans bg-slate-900/80 p-2.5 rounded border border-slate-800">
                  "By submitting this form, I provide my express written consent authorizing partner law firms and their intake specialists to contact me at the phone number and email provided regarding my case inquiry..."
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Every lead delivered by Blue Jay Leads includes an authentic, clickable TrustedForm or Jornaya certificate URL stored permanently for TCPA litigation defense.
            </p>

            <button
              onClick={() => setActiveCertificate(null)}
              className="w-full py-3 rounded-xl bg-[#0052FF] hover:bg-[#0043D6] text-xs font-bold text-white transition-colors cursor-pointer"
            >
              Close Certificate Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
