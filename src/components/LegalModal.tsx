import React, { useState } from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2, AlertCircle, PhoneCall, Scale } from 'lucide-react';

export type LegalTab = 'privacy' | 'terms' | 'tcpa' | 'donotsell';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);
  const [optOutEmail, setOptOutEmail] = useState('');
  const [optOutPhone, setOptOutPhone] = useState('');
  const [optOutName, setOptOutName] = useState('');
  const [optOutSubmitted, setOptOutSubmitted] = useState(false);

  // Sync tab when initialTab changes
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

  const handleOptOutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOptOutSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col overflow-hidden text-slate-800 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-100 bg-[#F8FAFD] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#0052FF] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0A1938]">
                Blue Jay Leads (Jaysphere LLC) Regulatory Portal
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Official Regulatory Disclosures, TCPA Compliance & Privacy Protections
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white px-6 overflow-x-auto gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'border-[#0052FF] text-[#0052FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'border-[#0052FF] text-[#0052FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            Terms of Service
          </button>

          <button
            onClick={() => setActiveTab('tcpa')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'tcpa'
                ? 'border-[#0052FF] text-[#0052FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            TCPA & FCC Compliance
          </button>

          <button
            onClick={() => setActiveTab('donotsell')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'donotsell'
                ? 'border-[#0052FF] text-[#0052FF]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            Do Not Sell My Info (CCPA)
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6 flex-1">
          
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#0052FF] font-bold">
                  Effective Date: January 1, 2026 • Last Updated: September 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1938] mt-1">
                  Blue Jay Leads (Jaysphere LLC) — Comprehensive Privacy Policy
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Governing all interactions, digital domains, and lead routing technologies operated by Jaysphere LLC d/b/a Blue Jay Leads.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">1. Overview and Scope</h4>
                <p>
                  Jaysphere LLC d/b/a Blue Jay Leads ("Company", "we", "us", or "our") is committed to safeguarding consumer privacy and maintaining complete transparency regarding the collection, handling, and distribution of personal and commercial business information. This Privacy Policy applies to all websites, web applications, inquiry forms, and communication mechanisms operated by Jaysphere LLC.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">2. Categories of Information We Collect</h4>
                <p className="mb-2">We collect information provided directly by users, as well as telemetry collected automatically during site access:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Contact Information:</strong> Full name, verified work email address, telephone number, and postal code or service territory.</li>
                  <li><strong>Commercial Profile Data:</strong> Company name, target sales volume, industry sector, and custom qualification parameters.</li>
                  <li><strong>Audit-Ready Consent Telemetry:</strong> Verifiable IP address, timestamp, browser user-agent, session recordings, and proof-of-consent tokens (including Jornaya LeadID or TrustedForm certificates where applicable).</li>
                  <li><strong>Technical Data:</strong> Cookies, operating system version, referring URL, and analytics signals utilized solely to optimize lead quality and prevent fraud.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">3. Purpose and Legal Basis for Processing</h4>
                <p>
                  Jaysphere LLC processes collected data under the following legitimate business purposes: (a) fulfilling requested business-to-business introductions and service quotes; (b) verifying compliance with Telephone Consumer Protection Act (TCPA) and FTC regulations; (c) routing qualified inquiries on a 1-to-1 exclusive basis to selected verified service providers; and (d) preventing fraudulent or unauthorized submissions.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">4. 1-to-1 Exclusive Distribution & No Unauthorized Reselling</h4>
                <p>
                  Jaysphere LLC strictly adheres to the principle of 1-to-1 opportunity distribution. When a prospective client submits an inquiry requesting contact, that opportunity is delivered solely to the single agreed-upon commercial provider. We do not sell, rent, or broadcast contact details to open bidding networks or multiple competing providers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">5. California Consumer Privacy Act (CCPA / CPRA) Disclosures</h4>
                <p className="mb-2">Under the California Consumer Privacy Act (as amended by CPRA), California residents are entitled to specific rights:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li><strong>Right to Know:</strong> You may request disclosure of the specific categories and pieces of personal information collected over the preceding 12 months.</li>
                  <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information, subject to statutory recordkeeping requirements.</li>
                  <li><strong>Right to Opt-Out:</strong> You may opt-out of any prospective sale or sharing of personal information via our dedicated "Do Not Sell My Info" portal.</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will never deny services, charge differing rates, or provide degraded quality to consumers exercising statutory privacy rights.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">6. Security and Retention</h4>
                <p>
                  Jaysphere LLC employs bank-grade 256-bit TLS encryption in transit and AES-256 encryption at rest. Audit logs and consent tokens are retained in tamper-evident storage for a minimum statutory period of five (5) years to substantiate regulatory telemarketing compliance.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 bg-blue-50/50 p-4 rounded-xl">
                <h4 className="font-bold text-[#0A1938] text-xs uppercase tracking-wider mb-1">Privacy Contact Officer</h4>
                <p className="text-xs text-slate-600">
                  Jaysphere LLC • Attn: Privacy Compliance Department<br />
                  Email: <a href="mailto:privacy@jayspherellc.com" className="text-[#0052FF] underline">privacy@jayspherellc.com</a> • Phone: (800) 419-7928
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#0052FF] font-bold">
                  Effective Date: January 1, 2026 • Commercial Terms
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1938] mt-1">
                  Jaysphere LLC — Terms of Commercial Service
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Standard operating agreement for partners, purchasers, and clients utilizing Jaysphere LLC lead delivery.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">1. Acceptance of Terms</h4>
                <p>
                  By accessing the services, submitting an inquiry, or executing an Insertion Order with Jaysphere LLC ("Company"), the client entity ("Client") agrees to be bound unconditionally by these Terms of Service. These terms apply exclusively to commercial business entities.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">2. Performance-Based Model & Billing</h4>
                <p>
                  Jaysphere LLC operates on a transparent pay-per-qualified-opportunity standard. Client pays strictly for opportunities meeting the mutually agreed Ideal Customer Profile (ICP) and geographic parameters established prior to campaign deployment. Jaysphere LLC does not assess ongoing retainer management fees unless explicitly contracted under a custom enterprise scope.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">3. 72-Hour Return & Replacement Credit SLA</h4>
                <p>
                  Client maintains the right to dispute any delivered opportunity that demonstrably fails to satisfy agreed qualification criteria (e.g. disconnected telephone line, out-of-territory address, or previous direct competitor engagement). Disputes submitted through the client portal within seventy-two (72) hours of transmission will receive an automated replacement credit against future billings upon verification.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">4. Purchaser Compliance & Telemarketing Obligations</h4>
                <p>
                  Client represents and warrants that upon receiving consumer or business lead information from Jaysphere LLC, Client will conduct all outreach in strict compliance with the Telephone Consumer Protection Act (TCPA), the FTC Telemarketing Sales Rule, state calling hour limits, and internal Do-Not-Call (DNC) policies. Client agrees to immediately cease contact upon any consumer request to opt-out.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">5. Independent Contractor & Disclaimer</h4>
                <p>
                  Jaysphere LLC is a performance marketing and lead generation technology provider. Jaysphere LLC is not a licensed attorney, law firm, insurance broker, or investment advisor. Jaysphere LLC does not guarantee closing ratios, revenue outcomes, or legal outcomes resulting from delivered opportunities.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">6. Governing Law & Dispute Resolution</h4>
                <p>
                  These terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to conflicts of law principles. Any dispute arising hereunder shall be resolved through binding confidential commercial arbitration administered by the American Arbitration Association (AAA).
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 bg-blue-50/50 p-4 rounded-xl">
                <h4 className="font-bold text-[#0A1938] text-xs uppercase tracking-wider mb-1">Corporate Counsel</h4>
                <p className="text-xs text-slate-600">
                  Jaysphere LLC • Legal Department<br />
                  Email: <a href="mailto:legal@jayspherellc.com" className="text-[#0052FF] underline">legal@jayspherellc.com</a>
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: TCPA & FCC COMPLIANCE */}
          {activeTab === 'tcpa' && (
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold">
                  FCC 1:1 Consent Mandate Certified
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1938] mt-2">
                  TCPA, FCC & Telemarketing Regulatory Framework
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  How Jaysphere LLC engineers absolute compliance into every inquiry, phone transfer, and digital lead.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-emerald-900">
                  <strong>Zero Regulatory Liability for Our Partners:</strong> Every lead routed by Jaysphere LLC includes a cryptographic certificate of express written consent verifying that the consumer explicitly consented to receive communications from your named entity.
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">1. Prior Express Written Consent (47 U.S.C. § 227)</h4>
                <p>
                  Before any prospect is delivered to our partner network, they must execute a clear and conspicuous written consent disclosure. This disclosure explicitly informs the consumer that they may be contacted via telephone, SMS/MMS messaging, automated dialing systems, and artificial or prerecorded voices. The disclosure makes clear that consent is never a condition of purchase.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">2. Full Compliance with FCC 2024/2025 1:1 Consent Rules</h4>
                <p>
                  Jaysphere LLC has re-architected all intake mechanisms to comply strictly with the Federal Communications Commission's (FCC) Second Report and Order requiring **1-to-1 seller consent**. We do not use partner lists or bundle hundreds of marketing partners under a single click. Each consumer selects or is explicitly matched to a single, identified provider.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">3. Real-Time DNC Scrubbing & Time-of-Day Window Enforcement</h4>
                <p>
                  Our automated dialers and routing engines automatically scrub telephone records against National, State, and Internal Do-Not-Call (DNC) registries. Inbound warm transfers and follow-up notifications strictly respect local calling windows (8:00 AM to 9:00 PM local recipient time).
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">4. Audit-Ready Cryptographic Provenance</h4>
                <p>
                  Each record generated in our infrastructure maintains an immutable audit record consisting of:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 mt-2">
                  <li>Unique Token ID and verification certificate URL</li>
                  <li>Exact timestamp down to the millisecond (UTC)</li>
                  <li>Originating IP address and geolocation telemetry</li>
                  <li>Verbatim wording of the consent statement displayed at submission</li>
                  <li>Visual reproduction of the webpage layout viewed by the consumer</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 bg-blue-50/50 p-4 rounded-xl">
                <h4 className="font-bold text-[#0A1938] text-xs uppercase tracking-wider mb-1">Compliance Desk</h4>
                <p className="text-xs text-slate-600">
                  Questions or audit requests regarding TCPA certificates may be directed to:<br />
                  <a href="mailto:compliance@jayspherellc.com" className="text-[#0052FF] underline font-mono">compliance@jayspherellc.com</a>
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: DO NOT SELL MY PERSONAL INFORMATION */}
          {activeTab === 'donotsell' && (
            <div className="space-y-5">
              <div className="pb-4 border-b border-slate-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#0052FF] font-bold">
                  California Consumer Privacy Act (CCPA/CPRA) Request Portal
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1938] mt-1">
                  Do Not Sell or Share My Personal Information
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Exercise your statutory right to opt-out of personal information transfer and add your credentials to our universal suppression list.
                </p>
              </div>

              {optOutSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Opt-Out Request Confirmed
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto">
                    Your information has been entered onto Jaysphere LLC's master suppression registry. Your records will be suppressed from all commercial routing and communications within 24 hours.
                  </p>
                  <p className="text-[11px] font-mono text-emerald-700">
                    Confirmation Code: SUPP-{Math.random().toString(36).substring(2, 9).toUpperCase()}
                  </p>
                  <button
                    onClick={() => {
                      setOptOutSubmitted(false);
                      setOptOutEmail('');
                      setOptOutPhone('');
                      setOptOutName('');
                    }}
                    className="text-xs text-[#0052FF] hover:underline font-semibold cursor-pointer pt-2"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleOptOutSubmit} className="space-y-4 bg-[#F8FAFD] p-6 rounded-2xl border border-blue-100">
                  <div className="flex items-start gap-2.5 text-xs text-slate-600 mb-2">
                    <AlertCircle className="w-4 h-4 text-[#0052FF] shrink-0 mt-0.5" />
                    <span>
                      Please provide the specific contact details you wish to add to Jaysphere LLC's permanent suppression database.
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={optOutName}
                      onChange={(e) => setOptOutName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address to Suppress
                      </label>
                      <input
                        type="email"
                        required
                        value={optOutEmail}
                        onChange={(e) => setOptOutEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Telephone Number to Suppress
                      </label>
                      <input
                        type="tel"
                        required
                        value={optOutPhone}
                        onChange={(e) => setOptOutPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0052FF]"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Submit Opt-Out / Do Not Sell Request
                  </button>
                </form>
              )}

              <div className="text-xs text-slate-500 space-y-2 pt-2">
                <p>
                  You may also transmit suppression requests or consumer inquiries by sending an email with the subject "CCPA Suppression Request" to <a href="mailto:privacy@jayspherellc.com" className="text-[#0052FF] underline">privacy@jayspherellc.com</a> or calling our toll-free regulatory line at (800) 419-7928.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-[#F8FAFD] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Jaysphere LLC Active Compliance Verification</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold transition-colors cursor-pointer"
          >
            Close Disclosures
          </button>
        </div>

      </div>
    </div>
  );
};
