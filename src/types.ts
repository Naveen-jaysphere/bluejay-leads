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
  companyName: string;
  workEmail: string;
  phone: string;
  targetRegion: string;
  industry: string;
  monthlyVolume: string;
  notes: string;
}
