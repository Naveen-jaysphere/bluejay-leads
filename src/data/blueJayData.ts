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
    label: "Opportunities Generated",
    detail: "High-intent search, social, and display traffic captured directly through our media funnels.",
    dropLabel: "-38 Disqualified at Form",
    dropReason: "Invalid contact info · Out-of-territory · No immediate budget or need"
  },
  {
    count: 62,
    label: "Intake Screened",
    detail: "Automated verification checking for purchase timeline, company size, and authority.",
    dropLabel: "-28 Disqualified on Call",
    dropReason: "Non-decision maker · Already under contract with competitor"
  },
  {
    count: 34,
    label: "Live Specialist Verified",
    detail: "Spoken with by a live verification coordinator; requirements and mobile OTP confirmed.",
    dropLabel: "-22 Filtered for Custom ICP",
    dropReason: "Outside your company's custom geographic radius or deal-size thresholds"
  },
  {
    count: 12,
    label: "Delivered to Your Pipeline",
    detail: "100% exclusive, pre-qualified business opportunity routed directly into your CRM or live sales line."
  }
];

export const LEAD_SERVICES: LeadTier[] = [
  {
    id: "exchange",
    name: "Blue Jay Exchange™",
    badge: "Most Popular",
    description: "On-demand, pre-qualified business opportunities delivered in real-time to your CRM and sales team.",
    features: [
      "100% Exclusive — 1 buyer per opportunity, never resold",
      "Delivered in under 24 hours directly via API / CRM",
      "Verified contact details, budget range, and timeline",
      "Automated replacement credit for non-qualifying leads"
    ],
    recommendedFor: "Growing businesses seeking consistent sales pipeline without agency retainers.",
    turnaround: "Active in 24-48 Hours"
  },
  {
    id: "intake",
    name: "Blue Jay Warm Transfer™",
    badge: "Highest Conversion",
    description: "Live inbound phone calls connected directly to your sales reps while the decision-maker is eager to buy.",
    features: [
      "Specialist dials the prospect within 3 minutes of submission",
      "Key requirements and budget verified prior to transfer",
      "Direct phone bridge to your available account executive",
      "Zero phone tag — speak to active buyers immediately"
    ],
    recommendedFor: "Companies with an inside sales team ready to close deals on the first conversation.",
    turnaround: "Live Call Delivery"
  },
  {
    id: "scale",
    name: "Blue Jay Dedicated™",
    badge: "Enterprise Scale",
    description: "Tailored multi-market lead campaigns built to your exact Ideal Customer Profile (ICP) and volume requirements.",
    features: [
      "Custom geographic radii, revenue size, and role criteria",
      "Native CRM integration (HubSpot, Salesforce, Zoho, Zapier)",
      "Dedicated account strategist and flexible daily volume pacing",
      "Volume-tiered pricing and customized insertion orders"
    ],
    recommendedFor: "Established enterprises targeting 50+ qualified sales opportunities per month.",
    turnaround: "Custom Insertion Order"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "We Buy the Click, Not the Lead",
    desc: "Our own ad spend, targeted landing pages, and search campaigns. Zero aggregators or middleman brokers reselling recycled data."
  },
  {
    step: "02",
    title: "Direct Transfer or CRM Post",
    desc: "Warm-transferred live to your sales rep or posted instantly into HubSpot, Salesforce, Zoho, or your custom webhook."
  },
  {
    step: "03",
    title: "Closed-Loop Conversion Tuning",
    desc: "Your sales feedback loops back into our targeting algorithms, continuously refining opportunity quality week over week."
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "Quality & Exclusivity",
    question: "Are opportunities 100% exclusive?",
    answer: "Yes. Every qualified inquiry is routed to exactly one business. We never resell, recycle, or auction the same prospect to your competitors."
  },
  {
    category: "Quality & Exclusivity",
    question: "What happens if a delivered lead does not meet our agreed criteria?",
    answer: "You have full dispute protection. Simply flag the lead in your client portal with the reason within your 72-hour review window. Approved returns automatically credit your balance for a replacement opportunity."
  },
  {
    category: "Quality & Exclusivity",
    question: "How do you ensure TCPA compliance and consumer consent?",
    answer: "Every lead generated by Jaysphere LLC carries an audit-ready compliance record featuring cryptographic timestamps, IP telemetry, and explicit 1-to-1 prior express written consent in full conformity with the FCC 1:1 Consent Mandate, TCPA (47 U.S.C. § 227), and FTC regulations."
  },
  {
    category: "Delivery & Tech",
    question: "How are leads delivered into our existing workflow?",
    answer: "We support instant webhooks and native integrations with major CRMs including HubSpot, Salesforce, Zoho, Pipedrive, ActiveCampaign, Slack, and Zapier, as well as encrypted email and live warm phone transfers."
  },
  {
    category: "Delivery & Tech",
    question: "How fast can we launch and start receiving opportunities?",
    answer: "Once your targeting criteria and volume caps are locked, campaigns typically go live and deliver initial verified prospects within 24 to 48 hours."
  },
  {
    category: "Billing & Policy",
    question: "How does billing and pricing work?",
    answer: "We operate on a transparent pay-per-qualified-lead model with zero recurring monthly agency management retainers. You fund a drawdown balance or operate on approved credit terms."
  },
  {
    category: "Billing & Policy",
    question: "Are there long-term contracts or cancellation fees?",
    answer: "None. You can adjust your daily volume, pause during holidays, or cancel anytime with zero contractual penalties."
  }
];
