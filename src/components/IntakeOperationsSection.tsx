import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  RotateCcw, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2, 
  ArrowRight, 
  PhoneOff, 
  UserCheck, 
  PhoneCall, 
  Voicemail, 
  FileCheck, 
  Layers, 
  FileText,
  BadgeAlert,
  Clock,
  Sparkles
} from 'lucide-react';

interface IntakeOperationsSectionProps {
  onStartPilot?: () => void;
}

export const IntakeOperationsSection: React.FC<IntakeOperationsSectionProps> = ({ onStartPilot }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'positive' | 'negative' | 'contact'>('all');

  const dispositions = [
    {
      name: 'Reached – Eligible & Working',
      category: 'positive',
      badgeColor: 'text-blue-300 bg-blue-500/10 border-blue-500/30',
      description: 'Lead in progress, valid case potential'
    },
    {
      name: 'Signed Case',
      category: 'positive',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30 font-bold',
      description: 'Client retained'
    },
    {
      name: 'Reached – Not a Case',
      category: 'negative',
      badgeColor: 'text-slate-300 bg-slate-800/80 border-slate-700',
      description: 'At fault, no injury, Prop 213, or other disqualifier'
    },
    {
      name: 'Already Represented',
      category: 'negative',
      badgeColor: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
      description: 'Lead already has an attorney'
    },
    {
      name: 'Wrong / Disconnected Number',
      category: 'negative',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      description: 'Invalid phone'
    },
    {
      name: 'Unable to Reach – Voicemail',
      category: 'contact',
      badgeColor: 'text-slate-300 bg-slate-800/80 border-slate-700',
      description: 'Message left'
    },
    {
      name: 'Unable to Reach – No Answer',
      category: 'contact',
      badgeColor: 'text-slate-300 bg-slate-800/80 border-slate-700',
      description: 'No response after contact attempts'
    },
    {
      name: 'Notes',
      category: 'all',
      badgeColor: 'text-slate-400 bg-slate-900 border-slate-800 font-mono',
      description: 'Free-form remarks from intake'
    }
  ];

  const refundPolicies = [
    {
      disqualifier: 'Wrong or disconnected number',
      outcome: 'Replacement or refund'
    },
    {
      disqualifier: 'Duplicate, spam, or non-human entry',
      outcome: 'Replacement or refund'
    },
    {
      disqualifier: 'Accident outside the agreed timeframe',
      outcome: 'Replacement or refund'
    },
    {
      disqualifier: 'Outside approved geography',
      outcome: 'Replacement or refund'
    }
  ];

  const complianceSafeguards = [
    {
      safeguard: 'TrustedForm certificate',
      covers: 'Issued on every lead, documenting the consent event'
    },
    {
      safeguard: 'TCPA consent language',
      covers: 'Captured with exact text, timestamp, and IP address'
    },
    {
      safeguard: 'OTP phone verification',
      covers: 'Applied to every submission before delivery'
    },
    {
      safeguard: 'Retained consent trail',
      covers: 'Available on request for any lead you receive'
    }
  ];

  return (
    <section id="intake-operations" className="py-24 bg-[#070E1C] text-slate-100 border-b border-blue-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* 1. DISPOSITION REPORTING */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-mono font-semibold mb-3">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>Feedback Loop & Algorithmic Tuning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Disposition Reporting
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
              You report back on each lead using the dispositions below. This is how we tune the campaign to your close rate instead of guessing at it.
            </p>
          </div>

          {/* Structured Clean Table Layout */}
          <div className="bg-[#0B1528] border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#0E1A33] text-slate-300 text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/3">Disposition</th>
                    <th className="py-4 px-6 font-semibold w-2/3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                  {dispositions.map((item, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-[#0E1B36]/60 transition-colors"
                    >
                      <td className="py-3.5 px-6 font-medium text-white">
                        <span className={`inline-block px-2.5 py-1 rounded-md border text-xs ${item.badgeColor}`}>
                          {item.name}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-slate-300 font-normal leading-relaxed">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 2. REFUND & REPLACEMENT POLICY */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-mono font-semibold mb-3">
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Strict Financial Assurance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Refund & Replacement Policy
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
              If a delivered lead meets any of the disqualifiers below, it is replaced or refunded. No argument, no invoice dispute.
            </p>
          </div>

          <div className="bg-[#0B1528] border border-slate-800 rounded-2xl overflow-hidden shadow-lg mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#0E1A33] text-slate-300 text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/2">Disqualifier</th>
                    <th className="py-4 px-6 font-semibold w-1/2">Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                  {refundPolicies.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#0E1B36]/60 transition-colors">
                      <td className="py-3.5 px-6 font-medium text-slate-200">
                        {row.disqualifier}
                      </td>
                      <td className="py-3.5 px-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {row.outcome}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Duplicate Suppression note */}
          <div className="p-4 rounded-xl bg-[#0B1528] border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0"></span>
            <p className="leading-relaxed">
              <strong className="text-white">Optional:</strong> duplicate suppression against your existing phone and email list, on whatever lookback window you specify.
            </p>
          </div>
        </div>

        {/* 3. COMPLIANCE */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-mono font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Audit-Ready Legal Standards</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Compliance
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2.5 leading-relaxed">
              Every inquiry captured across our network is engineered to withstand regulatory scrutiny and protect your firm's bar license.
            </p>
          </div>

          <div className="bg-[#0B1528] border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#0E1A33] text-slate-300 text-xs font-mono uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold w-1/3">Safeguard</th>
                    <th className="py-4 px-6 font-semibold w-2/3">What It Covers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                  {complianceSafeguards.map((item, idx) => (
                    <tr key={idx} className="hover:bg-[#0E1B36]/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-white flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#0052FF] shrink-0" />
                        <span>{item.safeguard}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-300 leading-relaxed">
                        {item.covers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4. NEXT STEP */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0C172E] to-[#070E1C] border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold font-mono uppercase tracking-wider">
              <Rocket className="w-3.5 h-3.5 text-[#0052FF]" />
              <span>Next Step</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Start with a Controlled Pilot on Your Own Terms.
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We start with a small pilot so you can measure contact rate, sign rate, and cost per signed case on your own numbers instead of ours. Tell us your target states, your intake window, and the volume your team can work per week, and we’ll have the campaign live and delivering.
            </p>

            <div className="pt-2">
              <button
                onClick={onStartPilot}
                className="bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Launch Your Firm's Pilot Campaign</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs font-mono text-slate-400 text-center">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>No Long-Term Retainers</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>24-48h Live Setup</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>1:1 Market Exclusivity</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
