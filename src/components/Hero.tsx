import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Clock, Zap, Check, FileCheck, PhoneCall, Scale, Database, Lock } from 'lucide-react';

interface HeroProps {
  onGetLeadsClick: () => void;
  onViewVerticals?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetLeadsClick, onViewVerticals }) => {
  const [activeSampleTab, setActiveSampleTab] = useState<'mva' | 'workers' | 'employment'>('mva');

  const sampleCases = {
    mva: {
      id: 'BJL-9842-PI',
      vertical: 'Motor Vehicle Accident (Rear-End Collision)',
      jurisdiction: 'Cook County, IL',
      dateOfIncident: '38 Days Ago (Within SOL)',
      injury: 'Cervical Whiplash, Lumbar Disc Herniation (MRI confirmed)',
      policeReport: 'Report #26-4410 Filed at Scene',
      counselStatus: 'No Existing Legal Representation (Confirmed)',
      compliance: 'TCPA 1:1 Prior Express Consent • Jornaya #JF-99214'
    },
    workers: {
      id: 'BJL-4120-WC',
      vertical: 'Workers’ Compensation (Construction Site)',
      jurisdiction: 'Harris County, TX',
      dateOfIncident: '19 Days Ago (Timely Notice Filed)',
      injury: 'Rotator Cuff Tear & Knee Injury on Active Shift',
      policeReport: 'OSHA & Employer First Report of Injury Submitted',
      counselStatus: 'Unrepresented Claimant Seeking Retainer',
      compliance: 'TCPA 1:1 Consent Recorded • TrustedForm Cert #TF-7019'
    },
    employment: {
      id: 'BJL-7751-EMP',
      vertical: 'Employment Law (Retaliatory Termination)',
      jurisdiction: 'Los Angeles County, CA',
      dateOfIncident: '45 Days Ago (Post-Whistleblower Filing)',
      injury: 'Lost Wages, Severe Economic & Emotional Distress',
      policeReport: 'Written HR Notice & Termination Letter Documented',
      counselStatus: 'No Current Legal Representation (Verified)',
      compliance: 'FCC 1:1 Prior Express Consent • Verified Mobile OTP'
    }
  };

  const currentCase = sampleCases[activeSampleTab];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white text-slate-800 pt-16 pb-24 border-b border-blue-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Container */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          
          {/* Executive Sub-badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0052FF] text-xs font-semibold shadow-xs">
            <Scale className="w-3.5 h-3.5" />
            <span>Legal Intake Infrastructure • Exclusively for US Law Firms</span>
          </div>

          {/* Exact Primary Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0A1938] leading-[1.08]">
            Connecting Law Firms with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#0043D6] to-sky-600">
              Qualified Opportunities.
            </span>
          </h1>



          <div className="text-xs sm:text-sm text-slate-500 font-medium flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
              <Check className="w-4 h-4 text-[#0052FF]" /> Zero Agency Retainers
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
              <Check className="w-4 h-4 text-[#0052FF]" /> 100% Exclusive 1:1 Routing
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-700 font-semibold">
              <Check className="w-4 h-4 text-[#0052FF]" /> FCC & TCPA Compliant
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onGetLeadsClick}
              className="w-full sm:w-auto bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {onViewVerticals && (
              <button
                onClick={onViewVerticals}
                className="w-full sm:w-auto bg-white hover:bg-blue-50/70 border border-blue-200 text-[#0A1938] font-bold text-base px-7 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Browse Practice Areas (50+)</span>
              </button>
            )}
          </div>
        </div>

        {/* Interactive Verified Claimant Intake Dossier (Live Preview) */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-white border border-blue-200/90 rounded-2xl shadow-[0_12px_40px_-8px_rgba(0,82,255,0.08)] overflow-hidden">
            {/* Dossier Header Bar */}
            <div className="bg-[#0A1938] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-blue-900/40">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold tracking-wide text-blue-200 uppercase">
                  Live Intake Delivery Console
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-xs font-mono text-slate-300 font-semibold">
                  Sample Case Packet {currentCase.id}
                </span>
              </div>

              {/* Sample Tab Selector */}
              <div className="flex items-center gap-1.5 bg-white/10 p-0.5 rounded-lg text-[11px] font-medium">
                <button
                  onClick={() => setActiveSampleTab('mva')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeSampleTab === 'mva' ? 'bg-[#0052FF] text-white font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Auto Accident
                </button>
                <button
                  onClick={() => setActiveSampleTab('workers')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeSampleTab === 'workers' ? 'bg-[#0052FF] text-white font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Workers' Compensation
                </button>
                <button
                  onClick={() => setActiveSampleTab('employment')}
                  className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                    activeSampleTab === 'employment' ? 'bg-[#0052FF] text-white font-bold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Employment
                </button>
              </div>
            </div>

            {/* Dossier Content Body */}
            <div className="p-6 sm:p-7 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-0.5">
                    Target Practice Area
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0A1938]">
                    {currentCase.vertical}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> 100% Exclusive • Dispatched to 1 Firm
                  </span>
                </div>
              </div>

              {/* Verified Criteria Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-[#F8FAFD] border border-blue-100/80 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    Jurisdiction / Venue
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0A1938] flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5 text-[#0052FF] shrink-0" />
                    {currentCase.jurisdiction}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] border border-blue-100/80 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    Statute of Limitations
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#0A1938] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {currentCase.dateOfIncident}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] border border-blue-100/80 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    Representation Status
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-emerald-700 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    {currentCase.counselStatus}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] border border-blue-100/80 rounded-xl p-3.5 sm:col-span-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    Injury / Claim Details
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800">
                    {currentCase.injury}
                  </p>
                </div>

                <div className="bg-[#F8FAFD] border border-blue-100/80 rounded-xl p-3.5">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide block mb-1">
                    Official Documentation
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-1">
                    <FileCheck className="w-3.5 h-3.5 text-[#0052FF] shrink-0" />
                    {currentCase.policeReport}
                  </p>
                </div>
              </div>

              {/* Delivery Strip */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-600">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="font-mono text-[11px]">{currentCase.compliance}</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-[#0052FF]">
                  <Database className="w-3.5 h-3.5" />
                  <span>Direct Delivery to Your CRM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal CRM Integration Compatibility Ribbon */}
        <div className="mt-14 pt-8 border-t border-blue-200/50 text-center">
          <p className="text-xs font-medium text-slate-500 mb-3">
            Integrates with your CRM via API & Webhooks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-slate-600">
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Lead Docket</span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Filevine</span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Clio</span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Litify</span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Lawmatics</span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Salesforce</span>
            <span className="px-3 py-1 rounded-md bg-white border border-slate-200 shadow-2xs">Email & Webhook</span>
          </div>
        </div>

        {/* The 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-[0_8px_25px_-5px_rgba(2,82,255,0.05)] hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#0052FF] font-bold tracking-wider">01</span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF]">
                <Zap className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
              Retainable Cases On Demand
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Receive pre-screened claimant inquiries with verified injury timelines, clear liability indication, and confirmed unrepresented status directly into your intake queue.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-[0_8px_25px_-5px_rgba(2,82,255,0.05)] hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#0052FF] font-bold tracking-wider">02</span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF]">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
              We Fund 100% of Media Spend
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We absorb all high-CPC legal ad expenses across Google Search, Meta, and YouTube. Your firm only pays for claimants who meet your explicit criteria checklist.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-blue-100 rounded-2xl p-7 shadow-[0_8px_25px_-5px_rgba(2,82,255,0.05)] hover:border-blue-300 hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#0052FF] font-bold tracking-wider">03</span>
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0052FF]">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-[#0A1938] mb-2 group-hover:text-[#0052FF] transition-colors">
              Intake Delivery Under 24 Hours
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Define your practice areas, state bar jurisdictions, and daily caseload capacity. Start receiving screened claimants and signing retainers within 24 to 48 hours.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
