import { FunnelStage, FaqItem, LeadTier } from '../types';

export const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming", "District of Columbia", "Nationwide (All States)"
];

export const TARGET_REGIONS = [
  "Nationwide (All 50 US States)",
  "Northeast Region",
  "Southeast Region",
  "Midwest Region",
  "Southwest Region",
  "West Coast & Pacific",
  "California",
  "Texas",
  "Florida",
  "New York",
  "Illinois",
  "Pennsylvania",
  "Custom State Package"
];

export const BUSINESS_INDUSTRIES = [
  "B2B & Professional Services",
  "Financial & Insurance Solutions",
  "Commercial & Residential Contracting",
  "SaaS, Cloud & IT Services",
  "Healthcare, Dental & Wellness Clinics",
  "Solar & Clean Energy Installations",
  "Logistics, Fleet & Supply Chain",
  "Custom Enterprise Inquiries"
];

export const FUNNEL_STAGES: FunnelStage[] = [
  {
    count: 100,
    label: "Claimant Inquiries Generated",
    detail: "High-intent search, social, and display traffic captured directly through our compliant legal intake funnels.",
    dropLabel: "-38 Disqualified at Intake Form",
    dropReason: "Out of state jurisdiction · Incident past statute of limitations · Invalid contact info"
  },
  {
    count: 62,
    label: "Liability & Coverage Screened",
    detail: "Automated verification assessing incident date, injury severity, liability indication, and representation status.",
    dropLabel: "-28 Disqualified on Intake Verification",
    dropReason: "Already represented by counsel · Disputed or zero liability · Minor or unverified injury"
  },
  {
    count: 34,
    label: "Live Legal Intake Specialist Verified",
    detail: "Spoken with by a live US-based intake coordinator; incident details, injury timeline, and mobile OTP confirmed.",
    dropLabel: "-22 Filtered for Firm-Specific Criteria",
    dropReason: "Outside your firm's targeted counties or case-specific minimum claim thresholds"
  },
  {
    count: 12,
    label: "Delivered to Your Law Firm",
    detail: "100% exclusive, pre-qualified legal claimant routed directly into your legal CRM or live intake desk."
  }
];

export const LEAD_SERVICES: LeadTier[] = [
  {
    id: "exchange",
    name: "Blue Jay Legal Exchange™",
    badge: "Most Popular for Firms",
    description: "Real-time, pre-screened legal claimant inquiries delivered directly into your firm's CRM or intake queue.",
    features: [
      "100% Exclusive — 1 firm per claimant, never shared or co-brokered",
      "Real-time delivery under 24 hours directly via legal CRM webhooks",
      "Screened for clear liability, incident date, and no existing counsel",
      "Automatic replacement credit for disqualified claimants within 72 hours"
    ],
    recommendedFor: "Law firms and boutique practices seeking a steady stream of retainable cases without monthly agency fees.",
    turnaround: "Active in 24-48 Hours"
  },
  {
    id: "intake",
    name: "Blue Jay Live Legal Transfer™",
    badge: "Highest Retainer Conversion",
    description: "Live inbound claimant transfers connected directly to your intake staff while the prospective client is on the phone.",
    features: [
      "Intake coordinator dials the claimant within 2 minutes of inquiry",
      "Injury details, incident date, and representation status confirmed",
      "Direct three-way phone bridge to your firm's intake department",
      "Eliminate phone tag — sign retainers on the initial call"
    ],
    recommendedFor: "Plaintiff, personal injury, and employment firms with dedicated intake teams ready to sign retainers immediately.",
    turnaround: "Live Call Delivery"
  },
  {
    id: "scale",
    name: "Blue Jay Dedicated Mass Tort™",
    badge: "Multi-Jurisdiction & Mass Tort",
    description: "Tailored multi-state claimant campaigns engineered to your firm's exact qualification criteria and volume pacing.",
    features: [
      "Custom state/county footprints, statute cutoff dates, and diagnosis criteria",
      "Direct legal CRM integration (Lead Docket, Filevine, Clio, Litify, Salesforce)",
      "Dedicated legal account strategist and flexible daily intake caps",
      "Volume-tiered pricing and customized firm insertion orders"
    ],
    recommendedFor: "Established litigation firms and mass tort practices requiring 50+ screened claimants per month.",
    turnaround: "Custom Insertion Order"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Direct Search & Claimant Intent Funnels",
    desc: "We fund 100% of the media acquisition across high-intent legal search and compliant landing pages. Zero recycled leads or aggregators."
  },
  {
    step: "02",
    title: "Live Warm Transfer or Legal CRM Post",
    desc: "Warm-transferred live to your intake department or posted instantly into Lead Docket, Filevine, Clio Grow, Litify, or custom webhook."
  },
  {
    step: "03",
    title: "Continuous Retainer Feedback Tuning",
    desc: "Your signed retainer outcomes loop back into our intake screening algorithms, continuously refining claimant quality and case value."
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Quality & Exclusivity",
    question: "Are claimant inquiries 100% exclusive to our law firm?",
    answer: "Yes. Every qualified inquiry is routed to exactly one law firm. We strictly reject the aggregator model and never resell, recycle, or auction the same claimant to your competitors."
  },
  {
    category: "Quality & Exclusivity",
    question: "What happens if a delivered claimant does not meet our firm's criteria?",
    answer: "You are fully protected. If a delivered claimant already has existing counsel, is past the statute of limitations, or gave inaccurate incident details, simply flag the lead within your 72-hour review window for an automatic replacement credit."
  },
  {
    category: "Quality & Exclusivity",
    question: "How do you ensure ethical compliance, bar advertising rules, and TCPA consent?",
    answer: "Every lead generated by Jaysphere LLC carries an audit-ready compliance record featuring cryptographic timestamps, IP telemetry, Jornaya / TrustedForm certificates, and explicit 1-to-1 prior express written consent in full compliance with the FCC 1:1 Consent Mandate, TCPA (47 U.S.C. § 227), and applicable state bar advertising guidelines."
  },
  {
    category: "Delivery & Tech",
    question: "Which legal CRMs and intake software do you integrate with?",
    answer: "We support instant webhooks and integrations with major legal CRMs including Lead Docket, Filevine, Clio Grow, Litify, Lawmatics, Salesforce, HubSpot, and Zapier, as well as live warm phone transfers and secure encrypted email delivery."
  },
  {
    category: "Delivery & Tech",
    question: "How fast can our firm launch and begin receiving claimant inquiries?",
    answer: "Once your target practice areas, jurisdictions, and qualification criteria are confirmed, campaigns go live and begin delivering initial screened claimants within 24 to 48 hours."
  },
  {
    category: "Billing & Policy",
    question: "How does billing and pricing work for law firms?",
    answer: "We operate on a transparent pay-per-qualified-claimant model with zero upfront monthly agency retainers or management fees. You only pay for claimants who meet your firm's explicit qualification checklist."
  },
  {
    category: "Billing & Policy",
    question: "Are there long-term contracts or cancellation penalties?",
    answer: "None. You can adjust your daily intake volume, pause intake when your calendar or trial schedule is full, or cancel anytime with zero contractual penalties."
  }
];
