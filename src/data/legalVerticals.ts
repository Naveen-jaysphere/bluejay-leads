export interface LegalVerticalCategory {
  id: string;
  category: string;
  items: string[];
}

export const LEGAL_VERTICALS: LegalVerticalCategory[] = [
  {
    id: "personal-injury-mass-tort",
    category: "Personal Injury / Mass Tort",
    items: [
      "Motor Vehicle Accidents / Auto Accident Injury",
      "Personal Injury",
      "Medical Malpractice",
      "Nursing Home Abuse",
      "Product Liability",
      "Child Birth Injury",
      "Asbestos & Mesothelioma",
      "Vaccination Injury",
      "Diminished Value"
    ]
  },
  {
    id: "employment-law",
    category: "Employment Law",
    items: [
      "Wrongful Termination",
      "Workplace Discrimination",
      "Sexual Harassment",
      "Workplace Harassment / Retaliation",
      "Non-Workplace Discrimination / Harassment"
    ]
  },
  {
    id: "criminal-dui-traffic",
    category: "Criminal / DUI / Traffic",
    items: [
      "Criminal Defense",
      "DUI",
      "Criminal Appeals",
      "Criminal Expungement",
      "Probation Violation",
      "Suspended License",
      "Traffic Law",
      "Police Brutality / Victim of a Crime"
    ]
  },
  {
    id: "family-law",
    category: "Family Law",
    items: [
      "Divorce",
      "Family Law",
      "Child Custody",
      "Child Support",
      "Adoption"
    ]
  },
  {
    id: "bankruptcy-consumer-debt",
    category: "Bankruptcy / Consumer Debt",
    items: [
      "Bankruptcy",
      "Debt Relief / Consolidation",
      "Debt Collector Harassment",
      "Collections & Debt",
      "Foreclosure Defense",
      "Consumer Law",
      "Debt Relief Program Victim",
      "ID Theft"
    ]
  },
  {
    id: "disability-benefits",
    category: "Disability / Benefits",
    items: [
      "SSDI / Social Security Disability",
      "Workers’ Compensation"
    ]
  },
  {
    id: "estate-planning-probate",
    category: "Estate Planning / Probate",
    items: [
      "Estate Planning",
      "Wills & Trusts",
      "Probate & Estates",
      "Power of Attorney"
    ]
  },
  {
    id: "real-estate-landlord-tenant",
    category: "Real Estate / Landlord-Tenant",
    items: [
      "Eviction / Landlord-Tenant",
      "Non-Eviction Landlord-Tenant",
      "Property Disputes",
      "Real Estate Disputes",
      "Real Estate Transactions"
    ]
  },
  {
    id: "business-intellectual-property",
    category: "Business / Intellectual Property",
    items: [
      "Business Law",
      "Copyrights & Trademarks",
      "Patent Law"
    ]
  },
  {
    id: "immigration",
    category: "Immigration",
    items: [
      "Immigration"
    ]
  },
  {
    id: "tax",
    category: "Tax",
    items: [
      "Tax Law"
    ]
  },
  {
    id: "insurance",
    category: "Insurance",
    items: [
      "Insurance Claims"
    ]
  },
  {
    id: "other-consumer-legal",
    category: "Other Consumer Legal",
    items: [
      "Lemon Law",
      "Timeshare",
      "Civil Lawsuit Defense"
    ]
  }
];
