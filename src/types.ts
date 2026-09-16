export interface LeadTier {
  id: string;
  name: string;
  badge: string;
  description: string;
  features: string[];
  recommendedFor: string;
  turnaround: string;
}

export interface FunnelStage {
  count: number;
  label: string;
  dropLabel?: string;
  dropReason?: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Quality & Exclusivity' | 'Delivery & Tech' | 'Billing & Policy';
}

export interface QuoteFormData {
  name: string;
  firm: string;
  workEmail: string;
  phone: string;
  primaryState: string;
  monthlyVolume: string;
  caseTypesAndCriteria: string;
}
