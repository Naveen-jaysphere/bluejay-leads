export interface VerticalDetail {
  slug: string;
  aliases?: string[];
  title: string;
  shortTitle: string;
  category: string;
  badge: string;
  tagline: string;
  overview: string;
  keyStats: { label: string; value: string; sub: string }[];
  qualificationChecklist: { title: string; desc: string }[];
  negativeDisqualifiers: string[];
  intakeFields: string[];
  samplePayload: {
    leadId: string;
    timestamp: string;
    claimant: {
      name: string;
      city: string;
      state: string;
      phone: string;
      email: string;
    };
    incidentDetails: Record<string, string>;
    compliance: {
      jornayaLeadId: string;
      trustedFormCertUrl: string;
      consentText: string;
      optInTimestamp: string;
      ipAddress: string;
    };
  };
  deliveryChannels: string[];
  targetAudience: string;
  faqList: { q: string; a: string }[];
}

export const VERTICAL_DETAILS: VerticalDetail[] = [
  {
    slug: 'workers-comp-leads',
    aliases: ['workers-compensation', 'workers-comp', 'workers-compensation-leads'],
    title: "Workers' Compensation Leads for Law Firms",
    shortTitle: "Workers' Compensation",
    category: "Disability / Benefits",
    badge: "100% Exclusive Claimants • No Retainer Fees",
    tagline: "Pre-screened workplace injury claimants actively seeking attorney representation.",
    overview: "Pre-screened claimants injured within the course and scope of employment. Every claimant is verified for on-the-job occurrence, timely reporting to their employer, active medical treatment, and confirmed unrepresented status before real-time delivery to your firm's CRM.",
    keyStats: [
      { label: "Exclusivity", value: "100% Exclusive", sub: "Delivered strictly to 1 law firm" },
      { label: "Delivery Speed", value: "< 60 Seconds", sub: "Real-time CRM webhook or call bridge" },
      { label: "Credit Window", value: "72 Hours", sub: "Automatic replacement for bad criteria" },
      { label: "Compliance", value: "FCC 1:1 Mandate", sub: "Jornaya & TrustedForm certified" }
    ],
    qualificationChecklist: [
      {
        title: "Injury Occurred in Scope of Employment",
        desc: "Claimant suffered an acute physical injury or occupational illness directly while performing job duties for their employer."
      },
      {
        title: "Reported to Employer / Claim Filed",
        desc: "The incident has been reported to supervisor or management within the statutory notification window, or benefits were denied/delayed."
      },
      {
        title: "Active Medical Treatment Sought",
        desc: "Claimant has sought medical evaluation (ER, urgent care, occupational clinic, or specialist) or requires ongoing care."
      },
      {
        title: "Unrepresented by Legal Counsel",
        desc: "Verified that the claimant does not have an active attorney of record on the matter and is seeking independent legal representation."
      },
      {
        title: "Within State Statute of Limitations",
        desc: "The workplace accident date or date of injury manifestation falls well within your target state's statutory filing cutoff."
      }
    ],
    negativeDisqualifiers: [
      "Already signed retainer with an existing attorney",
      "Injury occurred off-the-clock or outside employment scope",
      "Independent contractor without statutory workers' compensation coverage",
      "Accident date past state statute of limitations",
      "Minor first-aid only with no medical bills or missed work time",
      "Outside your firm's licensed state bar jurisdiction"
    ],
    intakeFields: [
      "Employer Name & Industry",
      "Exact Date & Location of Workplace Accident",
      "Specific Body Parts Injured & Diagnosis",
      "Whether Incident Was Reported in Writing",
      "Worker's Compensation Claim Status (Pending, Denied, or Not Filed)",
      "Time Missed from Work & Wage Loss Status",
      "Current Treating Physician or Clinic",
      "Verified Mobile Number (SMS OTP Authenticated)"
    ],
    samplePayload: {
      leadId: "BJ-WC-90412",
      timestamp: "2026-09-21T18:14:02Z",
      claimant: {
        name: "Marcus D. Vance",
        city: "Columbus",
        state: "OH",
        phone: "(614) 555-0184",
        email: "m.vance.workinjury@gmail.com"
      },
      incidentDetails: {
        "Employer / Workplace": "Midwest Distribution Logistics LLC",
        "Accident Date": "August 14, 2026 (Within SOL)",
        "Injury Type": "Lumbar disc herniation & rotator cuff tear from loading dock equipment failure",
        "Reported to Supervisor": "Yes, written accident report filed same day",
        "Medical Treatment": "ER evaluation at OhioHealth + 6 physical therapy sessions, orthopedic referral pending",
        "Claim Status": "Employer insurer delaying MRI authorization and dispute over TTD indemnity benefits",
        "Missed Work": "Off work 4 weeks per doctor's orders",
        "Existing Attorney": "No (Confirmed 100% Unrepresented)"
      },
      compliance: {
        jornayaLeadId: "5F9B8A41-782C-4A33-87D2-16BC24A9E880",
        trustedFormCertUrl: "https://cert.trustedform.com/0a941f3d8bc6110f763e028b",
        consentText: "Prior express written consent granted under TCPA (47 U.S.C. § 227) and FCC 1:1 mandate to be contacted by retained law firm partner.",
        optInTimestamp: "2026-09-21 18:13:58 UTC",
        ipAddress: "74.125.182.44"
      }
    },
    deliveryChannels: [
      "Lead Docket Webhook & Field Mapping",
      "Filevine API / Intake Direct",
      "Clio Grow Webhook",
      "Litify / Salesforce Case Insertion",
      "Warm Live Inbound Transfer (2-minute transfer bridge)"
    ],
    targetAudience: "Plaintiff workers' compensation attorneys and claimant advocacy firms looking to scale retainable claims without paying upfront advertising retainers.",
    faqList: [
      {
        q: "What if a delivered workers' compensation claimant already has a lawyer?",
        a: "Every lead comes with our 72-hour quality guarantee. If the claimant is represented or gives invalid contact information, report it in your dashboard for an instant replacement credit."
      },
      {
        q: "Can we restrict delivery to specific counties or metro areas?",
        a: "Yes. You define your exact state bar footprint, targeted counties, and daily volume cap (e.g. 5 leads per day across specific judicial districts)."
      },
      {
        q: "Are these leads shared with any other law firm?",
        a: "Never. All Blue Jay Leads inquiries are 100% exclusive and routed directly to your firm's CRM or intake team."
      }
    ]
  },
  {
    slug: 'employment-law-leads',
    aliases: ['employment-law', 'workplace-law'],
    title: "Employment Law Leads for Law Firms",
    shortTitle: "Employment Law",
    category: "Employment Law",
    badge: "Wrongful Termination • Wage & Hour • Discrimination",
    tagline: "High-value plaintiff employment law cases screened for liability, evidence, and clear termination dates.",
    overview: "Pre-screened employees who have experienced unlawful termination, workplace retaliation, sexual harassment, protected-class discrimination, or unpaid overtime and meal break violations. Inquiries are filtered for actionable liability, documented employment records, and unrepresented status.",
    keyStats: [
      { label: "Target Claims", value: "Wrongful Term", sub: "Retaliation, discrimination & wage" },
      { label: "Company Size", value: "15+ Employees", sub: "Meeting federal & state statutory minimums" },
      { label: "Exclusive Routing", value: "1:1 Delivery", sub: "Zero co-brokering or auctioning" },
      { label: "Documentation", value: "Verified Intake", sub: "Termination date & documentation status" }
    ],
    qualificationChecklist: [
      {
        title: "Clear Adverse Employment Action",
        desc: "Claimant was wrongfully terminated, demoted, constructively discharged, or subjected to retaliatory hostile work environment."
      },
      {
        title: "Protected Class or Whistleblower Nexus",
        desc: "Action tied to race, sex/gender, pregnancy, age (40+), disability, medical leave (FMLA/CFRA), or reporting illegal conduct."
      },
      {
        title: "Company Threshold Requirements",
        desc: "Employer meets statutory thresholds (Title VII 15+ employees, ADEA 20+ employees, or state-specific minimums)."
      },
      {
        title: "Actionable Timeline / EEOC Window",
        desc: "Termination or adverse incident occurred within statutory filing windows (180/300 days for EEOC or state FEHA/CRD guidelines)."
      },
      {
        title: "No Existing Counsel / Not Yet Signed",
        desc: "Claimant is unrepresented and actively seeking contingency legal representation."
      }
    ],
    negativeDisqualifiers: [
      "Voluntary resignation without constructive discharge grounds",
      "Claimant already hired an employment attorney",
      "Incident past state statute of limitations or EEOC filing window",
      "At-will termination with zero protected class or whistleblowing element",
      "Company has fewer than statutory minimum employees",
      "Claimant already signed a severance release agreement with full waiver"
    ],
    intakeFields: [
      "Employer Name & Estimated Total Headcount",
      "Dates of Employment (Start Date to Separation Date)",
      "Job Title, Hourly/Salary Rate, and Average Weekly Hours",
      "Stated Reason for Termination vs Actual Alleged Reason",
      "Protected Category or Whistleblower Event (FMLA, OSHA, Wage Complaint)",
      "Written Documentation or Witness Availability (Emails, Texts, Performance Reviews)",
      "Whether Severance Was Offered or Signed",
      "EEOC / State Department of Fair Employment Filing Status"
    ],
    samplePayload: {
      leadId: "BJ-EMP-88204",
      timestamp: "2026-09-21T17:42:19Z",
      claimant: {
        name: "Elena Rostova",
        city: "Dallas",
        state: "TX",
        phone: "(214) 555-0193",
        email: "e.rostova.plaintiff@gmail.com"
      },
      incidentDetails: {
        "Employer Name": "Apex Financial Systems Corp (500+ employees)",
        "Job Title / Pay": "Senior Financial Analyst ($95,000/yr salary)",
        "Employment Duration": "4 years (April 2022 - August 2026)",
        "Adverse Action": "Terminated 12 days after filing formal HR complaint regarding sex discrimination and pregnancy leave request",
        "Documentary Evidence": "Written Slack messages, positive annual performance reviews, formal HR ticket receipt",
        "Severance Status": "Offered 4 weeks severance; claimant refused to sign and retained all files",
        "EEOC Status": "Not yet filed; seeking counsel to draft charge of discrimination",
        "Representation": "Unrepresented (Confirmed)"
      },
      compliance: {
        jornayaLeadId: "8A4C2E91-44B1-4E60-BF03-9971D1244C3A",
        trustedFormCertUrl: "https://cert.trustedform.com/7d23a101b54a88bc3e1201aa",
        consentText: "Express consent recorded under FCC 1:1 guidelines authorizing referral to licensed employment litigation counsel.",
        optInTimestamp: "2026-09-21 17:42:15 UTC",
        ipAddress: "108.177.12.82"
      }
    },
    deliveryChannels: [
      "Real-time CRM Webhook (Lead Docket, Filevine, Litify)",
      "Direct Legal Email Notification with Full Intake Brief",
      "Live Warm Call Transfer to Intake Coordinator"
    ],
    targetAudience: "Plaintiff employment litigation law firms seeking actionable individual termination cases and multi-plaintiff wage/hour opportunities.",
    faqList: [
      {
        q: "How do you screen out employees who voluntarily quit?",
        a: "Our intake screening logic specifically checks the separation method. If voluntary, it requires verification of intolerable working conditions (constructive discharge) or unpaid wage issues before qualifying."
      },
      {
        q: "Can we receive wage & hour class action leads as well as single plaintiff?",
        a: "Yes. When employees report company-wide meal break denial or off-the-clock work, those flags are passed directly in your intake payload."
      }
    ]
  },
  {
    slug: 'lemon-law-leads',
    aliases: ['lemon-law', 'auto-warranty-leads'],
    title: "Lemon Law Leads for Law Firms",
    shortTitle: "Lemon Law",
    category: "Other Consumer Legal",
    badge: "Defective Vehicles • Warranty Claims • Prescreened",
    tagline: "High-margin vehicle defect and statutory lemon law claimants ready for immediate representation.",
    overview: "Pre-screened vehicle owners and lessees dealing with persistent defects and unresolved warranty claims. Inquiries are verified for vehicle make/model, purchase or lease status, active warranty coverage, and documented repair history or qualifying time out of service.",
    keyStats: [
      { label: "Repair History", value: "Documented", sub: "Repeat attempts or cumulative days out of service" },
      { label: "Warranty Status", value: "Active Warranty", sub: "Under original factory or certified warranty" },
      { label: "Attorneys' Fees", value: "Fee-Shifting", sub: "Statutory recovery paid by manufacturer" },
      { label: "Delivery", value: "Instant", sub: "Direct CRM delivery with VIN & repair history" }
    ],
    qualificationChecklist: [
      {
        title: "Qualifying Vehicle Year & Mileage",
        desc: "Recent model year passenger vehicle, truck, SUV, or RV with verifiable mileage still under manufacturer warranty."
      },
      {
        title: "Substantial Defect Impairing Use/Safety",
        desc: "Transmission hesitation, engine failure, electrical failure, braking defect, steering lock, or repeated check engine warnings."
      },
      {
        title: "Documented Repair History Available",
        desc: "Claimant took the vehicle to an authorized dealership or certified repair facility for repeat attempts for the same defect (or substantial safety issues)."
      },
      {
        title: "Days Out of Service Verification",
        desc: "Vehicle remained in repair facility custody for substantial cumulative days or statutory qualifying thresholds during the warranty period."
      },
      {
        title: "Purchased or Leased at Retail",
        desc: "Claimant is the registered owner or lessee; vehicle is not salvage or total loss."
      }
    ],
    negativeDisqualifiers: [
      "Vehicle purchased as-is with zero manufacturer or dealer warranty",
      "Defect caused by unauthorized aftermarket modifications or user collision",
      "Vehicle only brought in once with no repeat repair attempts",
      "Claimant already accepted a buyback settlement directly from the automaker",
      "Already represented by an attorney",
      "Commercial heavy fleet vehicles outside state lemon law statute"
    ],
    intakeFields: [
      "Vehicle Year, Make, Model & Current Mileage",
      "Purchase Date & Financing Status (Financed, Leased, or Cash)",
      "Primary Defect Description (Transmission, Engine, Brakes, Infotainment, Electrical)",
      "Total Number of Dealership Repair Visits",
      "Name of Dealerships Performing Service",
      "Total Cumulative Days in the Shop",
      "Whether Repair Orders/Invoices Are Available",
      "VIN (Vehicle Identification Number if available)"
    ],
    samplePayload: {
      leadId: "BJ-LEM-71049",
      timestamp: "2026-09-21T16:29:45Z",
      claimant: {
        name: "Brandon K. Lee",
        city: "Los Angeles",
        state: "CA",
        phone: "(310) 555-0147",
        email: "b.lee.consumerauto@gmail.com"
      },
      incidentDetails: {
        "Vehicle Details": "2024 Hyundai Ioniq 5 (Mileage: 18,400)",
        "Purchase Type": "Leased new from authorized dealership",
        "Primary Defect": "ICCU electrical power loss while driving on freeway, sudden propulsion shutdown",
        "Dealership Repair Visits": "4 separate dealership repair visits at Glendale Hyundai",
        "Total Days in Shop": "42 cumulative calendar days out of service",
        "Repair Orders": "Claimant has all 4 printed repair orders with open/close dates",
        "Manufacturer Communication": "Hyundai corporate opened case number but refused voluntary buyback",
        "Representation": "Unrepresented (Looking for Lemon Law attorney)"
      },
      compliance: {
        jornayaLeadId: "9C1F82B3-7740-410E-AA89-22E409511F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/4a88bc3101aa7d23a101b54a",
        consentText: "Prior express written consent granted under Song-Beverly / Magnuson-Moss consumer warranty referral guidelines.",
        optInTimestamp: "2026-09-21 16:29:40 UTC",
        ipAddress: "172.56.32.18"
      }
    },
    deliveryChannels: [
      "Direct Legal CRM Integration (Filevine, Lead Docket, Clio)",
      "Instant SMS + Email Notification to Lemon Law Intake Coordinator",
      "Live Transfer Available for Qualified Consumers"
    ],
    targetAudience: "Lemon law and consumer protection law firms seeking high-volume, quick-resolving vehicle repurchase and statutory buyback cases.",
    faqList: [
      {
        q: "Do you verify that repair orders exist?",
        a: "Yes. Our intake questions confirm that the consumer retained written dealership service records before routing the lead to your firm."
      },
      {
        q: "What states do you generate Lemon Law leads for?",
        a: "We deliver statewide campaigns across California (Song-Beverly Consumer Warranty Act), Florida, Texas, New York, Pennsylvania, and all 50 states under the federal Magnuson-Moss Warranty Act."
      }
    ]
  },
  {
    slug: 'mva-leads',
    aliases: ['mva', 'MVA-leads', 'auto-accident-leads', 'car-accident-leads'],
    title: "Motor Vehicle Accident (MVA) Leads for Law Firms",
    shortTitle: "MVA & Auto Accident",
    category: "Personal Injury / Mass Tort",
    badge: "Clear Liability • Recent Incident • Zero Ad Waste",
    tagline: "High-retainer auto accident claimant inquiries screened for injury, insurance, and clear adverse liability.",
    overview: "Exclusive motor vehicle accident claimant inquiries screened for recent incident dates within statutory limits, clear adverse liability, prompt medical care, and confirmed unrepresented status.",
    keyStats: [
      { label: "Liability Screener", value: "Clear Adverse", sub: "Rear-ends, t-bones & failure to yield" },
      { label: "Medical Treatment", value: "< 72 Hours", sub: "ER, urgent care, EMS or hospital" },
      { label: "Exclusivity", value: "100% Exclusive", sub: "Never shared with competitors" },
      { label: "Delivery Speed", value: "Real-Time", sub: "Direct CRM webhook or live transfer" }
    ],
    qualificationChecklist: [
      {
        title: "Incident Within State Statute of Limitations",
        desc: "Accident occurred recently (typically within the last 12-24 months) with ample time for filing and discovery."
      },
      {
        title: "Clear Adverse Liability (Not at Fault)",
        desc: "Claimant was the non-fault driver, passenger, pedestrian, or cyclist injured due to another driver's negligence."
      },
      {
        title: "Objective Medical Treatment Documented",
        desc: "Claimant received medical care at emergency room, urgent care facility, or primary clinic within 72 hours of crash."
      },
      {
        title: "Property Damage & Physical Injuries",
        desc: "Documented physical bodily injuries (fractures, concussions, spinal disc damage, whiplash, lacerations) and vehicle damage."
      },
      {
        title: "Unrepresented Status Verified",
        desc: "Confirmed that no attorney has been retained and no insurance release has been executed."
      }
    ],
    negativeDisqualifiers: [
      "Claimant cited at-fault by responding law enforcement",
      "Single-vehicle crash with zero third-party liability",
      "Accident occurred more than 2 years ago (past statute cutoff)",
      "Zero medical treatment or property damage",
      "Claimant already signed a full release with the at-fault insurance carrier",
      "Already represented by another personal injury law firm"
    ],
    intakeFields: [
      "Crash Date, Time & City/State Location",
      "Role in Accident (Driver, Passenger, Pedestrian, Motorcyclist)",
      "Manner of Collision (Rear-end, T-Bone, Head-on, Rollover, Hit & Run)",
      "Police Department & Police Report Number",
      "Medical Facilities Attended (EMS, ER, Urgent Care)",
      "Diagnosis & Injury Summary",
      "At-Fault Driver Insurance Carrier (if known)",
      "Damage Condition of Claimant's Vehicle"
    ],
    samplePayload: {
      leadId: "BJ-MVA-60119",
      timestamp: "2026-09-21T19:08:11Z",
      claimant: {
        name: "Samantha Rodriguez",
        city: "Phoenix",
        state: "AZ",
        phone: "(602) 555-0162",
        email: "s.rodriguez.azinjury@gmail.com"
      },
      incidentDetails: {
        "Accident Date": "September 12, 2026 (9 days ago)",
        "Collision Type": "Rear-ended at red light by commercial delivery van",
        "Fault Status": "Other driver cited for failure to control speed / following too closely",
        "Police Report": "Filed by Phoenix Police Department (Report #26-091882)",
        "Medical Treatment": "Transported by EMS to Banner University Medical Center; treated for concussion and cervical spine strain",
        "Follow-up Care": "Referred to orthopedist; active physical therapy scheduled",
        "Insurance Info": "At-fault commercial insurer contacted claimant offering quick $2,500 release; claimant rejected offer",
        "Representation": "Unrepresented (Confirmed seeking personal injury counsel)"
      },
      compliance: {
        jornayaLeadId: "4D81E290-99AC-48D3-8C21-77218B104F5E",
        trustedFormCertUrl: "https://cert.trustedform.com/8c2177218b104f5e4d81e290",
        consentText: "Prior express written consent granted under TCPA (47 U.S.C. § 227) to be contacted by retained law firm partner.",
        optInTimestamp: "2026-09-21 19:08:05 UTC",
        ipAddress: "68.204.14.99"
      }
    },
    deliveryChannels: [
      "Instant Lead Docket Webhook Integration",
      "Filevine Case Ingestion API",
      "Clio Grow Webhook",
      "Litify Legal Operating System",
      "Warm Live Phone Bridge (Inbound Live Call Transfer)"
    ],
    targetAudience: "Plaintiff personal injury law firms and trial attorneys looking to build consistent, predictable caseloads of retainable auto accident cases.",
    faqList: [
      {
        q: "What collision types do you target for MVA leads?",
        a: "We prioritize rear-end impacts, t-bone collisions, red light runners, distracted driver crashes, and commercial truck collisions where liability is established by police report or physical evidence."
      },
      {
        q: "Do you verify insurance coverage before delivery?",
        a: "Our intake screening captures policy numbers and carrier names when available from the crash exchange or police report, screening out uninsured motorists unless your firm purchases UM/UIM claims."
      }
    ]
  },
  {
    slug: 'personal-injury-leads',
    aliases: ['personal-injury', 'pi-leads', 'premises-liability'],
    title: "Personal Injury Leads for Law Firms",
    shortTitle: "Personal Injury",
    category: "Personal Injury / Mass Tort",
    badge: "Premises Liability • Slip & Fall • Catastrophic Injury",
    tagline: "Vetted premises liability, catastrophic injury, and wrongful death claimants ready to retain counsel.",
    overview: "Screened premises liability, slip and fall, construction accident, and personal injury inquiries. Every claimant is verified for clear third-party notice, documented physical injuries, incident date within statute of limitations, and absence of existing counsel.",
    keyStats: [
      { label: "Target Cases", value: "Premises & PI", sub: "Slip & falls, dog bites & accidents" },
      { label: "Notice Screened", value: "Verified", sub: "Incident reported to property owner" },
      { label: "Exclusivity", value: "100% Exclusive", sub: "Direct to your firm's intake desk" },
      { label: "Turnaround", value: "< 24 Hours", sub: "Active pipeline within 1 business day" }
    ],
    qualificationChecklist: [
      {
        title: "Notice & Incident Reporting",
        desc: "Incident reported to commercial property owner, store manager, landlord, or animal control with written report."
      },
      {
        title: "Verifiable Hazardous Condition",
        desc: "Wet floor without signage, broken staircase, code violation, unrestrained animal, or structural defect."
      },
      {
        title: "Immediate Medical Care Documented",
        desc: "Claimant treated at ER, urgent care, or specialist for documented fractures, tears, head trauma, or soft tissue injuries."
      },
      {
        title: "No Existing Counsel",
        desc: "100% unrepresented claimants actively searching for experienced personal injury representation."
      }
    ],
    negativeDisqualifiers: [
      "Accident occurred on claimant's own residential property",
      "No medical treatment sought within reasonable timeframe",
      "Incident occurred outside applicable state statute of limitations",
      "Claimant already retained representation",
      "Minor scrape or bruise with no ongoing medical care"
    ],
    intakeFields: [
      "Incident Date, Time & Precise Location",
      "Property Type (Retail Store, Apartment Complex, Municipal Sidewalk, Private Commercial)",
      "Hazard Description (Liquid Spill, Broken Handrail, Icy Walkway, Dog Bite)",
      "Incident Report Confirmation & Management Name",
      "Emergency Medical Care & Treating Facility",
      "Injuries Sustained (Fractures, Torn Ligaments, Lacerations, TBI)",
      "Witness Names & Photo/Video Evidence Availability"
    ],
    samplePayload: {
      leadId: "BJ-PI-55102",
      timestamp: "2026-09-21T15:10:44Z",
      claimant: {
        name: "David H. Miller",
        city: "Atlanta",
        state: "GA",
        phone: "(404) 555-0138",
        email: "d.miller.premises@gmail.com"
      },
      incidentDetails: {
        "Accident Date": "September 8, 2026",
        "Location": "Supermarket chain store in Fulton County, GA",
        "Hazard": "Substantial leaking refrigeration unit without warning cone; claimant slipped backwards",
        "Injury": "Fractured radial head (wrist) and L4/L5 lumbar strain",
        "Incident Report": "Manager completed formal store incident report; copy retained",
        "Medical Care": "Piedmont Hospital Emergency Department; cast applied and orthopedic consult",
        "Representation": "Unrepresented (Confirmed)"
      },
      compliance: {
        jornayaLeadId: "2E918A4C-BF03-4E60-44B1-9971D1244C3A",
        trustedFormCertUrl: "https://cert.trustedform.com/101aa7d23a4a88bc3e1201aa",
        consentText: "Express 1:1 consent given under FCC guidelines to connect with qualified premises liability attorney.",
        optInTimestamp: "2026-09-21 15:10:39 UTC",
        ipAddress: "98.118.42.11"
      }
    },
    deliveryChannels: ["Lead Docket", "Filevine", "Clio", "Litify", "Live Call Bridge"],
    targetAudience: "Plaintiff personal injury law firms handling premises liability, slip & falls, dog bites, and general tort claims.",
    faqList: [
      {
        q: "Do you filter for commercial vs residential premises?",
        a: "Yes. You can specify whether your firm only accepts commercial property premises claims or also handles residential landlord-tenant injury claims."
      }
    ]
  },
  {
    slug: 'mass-tort-leads',
    aliases: ['mass-tort', 'mass-torts', 'defective-drugs', 'toxic-torts'],
    title: "Mass Tort Leads for Law Firms",
    shortTitle: "Mass Tort",
    category: "Personal Injury / Mass Tort",
    badge: "Defective Drugs • Medical Devices • Toxic Exposure",
    tagline: "High-volume multi-state mass tort claimants qualified under strict criteria matrices.",
    overview: "Verified mass tort claimants meeting explicit diagnosis dates, product exposure periods, and medical documentation thresholds across active pharmaceutical, medical device, and environmental exposure dockets.",
    keyStats: [
      { label: "Active Dockets", value: "10+ Dockets", sub: "Pharma, devices & toxic exposure" },
      { label: "Verification", value: "Multi-Tier", sub: "Diagnosis & exposure timeline confirmed" },
      { label: "Consent Tokens", value: "100% Audit", sub: "Full Jornaya & TrustedForm telemetry" },
      { label: "Volume Pacing", value: "50-500+/mo", sub: "Flexible caps & customized delivery" }
    ],
    qualificationChecklist: [
      {
        title: "Confirmed Product or Chemical Exposure",
        desc: "Documented usage of targeted prescription drug, medical device implant, or verified geographical toxic exposure."
      },
      {
        title: "Qualifying Medical Diagnosis",
        desc: "Formal medical diagnosis of specified condition (e.g., cancer, organ failure, revision surgery) meeting docket criteria."
      },
      {
        title: "Statutory & Exposure Windows",
        desc: "Exposure and diagnosis occurred within the active multidistrict litigation (MDL) parameters and statute cutoffs."
      },
      {
        title: "No Prior Legal Retainer",
        desc: "Claimant has not signed a retainer with another mass tort steering committee firm or plaintiff lawyer."
      }
    ],
    negativeDisqualifiers: [
      "No documented medical diagnosis matching targeted litigation",
      "Product exposure occurred outside active docket date ranges",
      "Claimant already enrolled with another mass tort firm",
      "Statute of limitations expired prior to filing"
    ],
    intakeFields: [
      "Specific Product / Drug / Toxin Name",
      "Dates of Usage / Exposure Duration",
      "Date of First Diagnosis & Diagnosing Facility",
      "Treating Physicians & Medical Records Authorization Status",
      "Summary of Impairments, Surgeries & Hospitalizations",
      "Claimant Identification & Power of Attorney Status (if filing for deceased relative)"
    ],
    samplePayload: {
      leadId: "BJ-MT-40918",
      timestamp: "2026-09-21T14:15:30Z",
      claimant: {
        name: "Carolyn S. Bennett",
        city: "Charlotte",
        state: "NC",
        phone: "(704) 555-0177",
        email: "c.bennett.litigation@gmail.com"
      },
      incidentDetails: {
        "Target Docket": "Defective Medical Implant / Pharmaceutical",
        "Usage Period": "Prescribed and taken daily from 2021 through 2025",
        "Confirmed Diagnosis": "Diagnosed with acute ischemic organ damage and gastroparesis in March 2026",
        "Hospitalization": "Admitted to Atrium Health Carolinas Medical Center for 9 days; ongoing gastroenterology care",
        "Medical Records": "Claimant is prepared to execute HIPAA authorization for medical record retrieval",
        "Representation": "Unrepresented (Looking to join national litigation)"
      },
      compliance: {
        jornayaLeadId: "7740410E-AA89-9C1F82B3-22E409511F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/3101aa7d23a101b54a4a88bc",
        consentText: "Prior express written consent granted under FCC and TCPA guidelines for mass tort referral.",
        optInTimestamp: "2026-09-21 14:15:25 UTC",
        ipAddress: "65.110.12.9"
      }
    },
    deliveryChannels: ["API Webhook", "Lead Docket", "Salesforce Litify", "Encrypted Batch Export"],
    targetAudience: "National litigation firms, steering committee members, and trial practices building substantial mass tort dockets.",
    faqList: [
      {
        q: "Can Blue Jay Leads provide signed retainers or just qualified inquiries?",
        a: "We provide both: pre-qualified real-time inquiries for your intake team, or turnkey electronic retainers executed via our licensed legal intake partners."
      }
    ]
  },
  {
    slug: 'ssdi-disability-leads',
    aliases: ['ssdi-leads', 'disability-leads', 'social-security-disability'],
    title: "SSDI & Social Security Disability Leads",
    shortTitle: "SSDI & Disability",
    category: "Disability / Benefits",
    badge: "Initial Filings • Hearing Level Appeals • Screened Work Credits",
    tagline: "Pre-screened claimants who can no longer work, seeking legal representation for Social Security Disability claims.",
    overview: "Pre-screened claimants actively pursuing SSDI and SSI benefits. Inquiries are verified to confirm individuals are below retirement age, unable to engage in substantial work due to medical impairment, under active physician care, and unrepresented.",
    keyStats: [
      { label: "Target Age", value: "Age 21-62", sub: "Below full retirement age" },
      { label: "Work History", value: "5 of 10 Years", sub: "Likely SSDI insured work credits" },
      { label: "Medical Care", value: "Active", sub: "Doctor treatment within 6 months" },
      { label: "Exclusivity", value: "1:1 Delivery", sub: "Zero lead recycling" }
    ],
    qualificationChecklist: [
      {
        title: "Medical Condition Preventing Substantial Work",
        desc: "Physical or psychiatric impairment expected to last at least 12 months or result in death."
      },
      {
        title: "Out of Work Status",
        desc: "Claimant has been out of work or earning below Substantial Gainful Activity (SGA) threshold."
      },
      {
        title: "Recent Medical Records Available",
        desc: "Claimant is treating with a medical doctor, psychologist, or hospital clinic documenting functional limitations."
      },
      {
        title: "Unrepresented Claimant",
        desc: "Verified that claimant does not have an attorney or non-attorney representative of record with the SSA."
      }
    ],
    negativeDisqualifiers: [
      "Currently working full-time above SGA limits",
      "Over full retirement age (67+)",
      "Already represented by an attorney or disability advocacy firm",
      "Zero medical treatment for reported conditions"
    ],
    intakeFields: [
      "Age & Date of Birth",
      "Date Last Worked & Former Occupation",
      "Primary Disabling Condition(s)",
      "Treating Physician / Medical Clinic Information",
      "SSA Application Stage (Not yet applied, Initial Denial, Request for Hearing, Appeals Council)",
      "Whether Receiving Workers' Compensation or Other Benefits"
    ],
    samplePayload: {
      leadId: "BJ-SSD-31089",
      timestamp: "2026-09-21T13:40:12Z",
      claimant: {
        name: "Robert M. Taylor",
        city: "Indianapolis",
        state: "IN",
        phone: "(317) 555-0153",
        email: "r.taylor.ssdi@gmail.com"
      },
      incidentDetails: {
        "Age": "54 years old",
        "Disabling Conditions": "Severe degenerative disc disease, peripheral neuropathy, and congestive heart failure",
        "Date Last Worked": "November 2025 (Unable to perform sedentary or light work)",
        "Application Stage": "Denied at Initial Stage 30 days ago; needs to file Request for Reconsideration within 60-day window",
        "Treating Doctor": "Dr. Angela Cooper at IU Health (Regular visits every 6 weeks)",
        "Representation": "Unrepresented (Confirmed looking for legal advocate)"
      },
      compliance: {
        jornayaLeadId: "AA899C1F-82B3-7740-410E-22E409511F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/7d23a101b54a4a88bc3101aa",
        consentText: "Prior express written consent granted under TCPA guidelines to be contacted by licensed Social Security Disability law firm.",
        optInTimestamp: "2026-09-21 13:40:07 UTC",
        ipAddress: "166.137.88.24"
      }
    },
    deliveryChannels: ["CRM Direct Webhook", "Email Intake Alert", "Warm Phone Bridge"],
    targetAudience: "Social security disability attorneys and national legal advocacy organizations.",
    faqList: [
      {
        q: "Do you supply both initial applicants and hearing-level appeals?",
        a: "Yes. You can configure your intake delivery to accept initial claims, reconsideration denials, or hearing requests before an Administrative Law Judge (ALJ)."
      }
    ]
  },
  {
    slug: 'family-law-leads',
    aliases: ['divorce-leads', 'child-custody-leads'],
    title: "Family Law & Divorce Leads",
    shortTitle: "Family Law & Divorce",
    category: "Family Law",
    badge: "Contested Divorce • Custody • Asset Division",
    tagline: "High-intent individuals actively seeking private retainer representation for divorce and family legal matters.",
    overview: "Screened family law inquiries from spouses and parents seeking legal counsel for contested divorce, child custody, and marital property division. Inquiries are filtered for local court jurisdiction, case complexity, and unrepresented status.",
    keyStats: [
      { label: "Target Matters", value: "Divorce & Custody", sub: "Contested & complex assets" },
      { label: "Retainer Intent", value: "Private Pay", sub: "Screened for private counsel ability" },
      { label: "Delivery", value: "Immediate", sub: "Under 1 minute to your intake phone" },
      { label: "Jurisdiction", value: "Local County", sub: "Targeted to your family court circuit" }
    ],
    qualificationChecklist: [
      {
        title: "Active Legal Need in Target Jurisdiction",
        desc: "Divorce pending or imminent, child custody dispute, modification, or protective order need in your target county."
      },
      {
        title: "Contested or Complex Elements",
        desc: "Disagreements over marital assets, real estate, business valuation, child support, or custody schedules."
      },
      {
        title: "Private Retainer Capacity",
        desc: "Screened to ensure claimant is seeking a private attorney and understands retainer deposit expectations."
      },
      {
        title: "No Existing Attorney of Record",
        desc: "Claimant is unrepresented and actively booking consultations."
      }
    ],
    negativeDisqualifiers: [
      "Seeking free pro-bono or legal aid representation only",
      "Both parties already signed an uncontested amicable settlement",
      "Outside your firm's county / court jurisdiction",
      "Already has an active family law attorney representing them"
    ],
    intakeFields: [
      "County & State of Residence",
      "Matter Type (Divorce, Child Custody, Child Support, Separation, Modification)",
      "Marriage Length & Separation Status",
      "Number and Ages of Minor Children",
      "Real Estate & Marital Asset Overview",
      "Urgency / Court Hearing Dates Scheduled"
    ],
    samplePayload: {
      leadId: "BJ-FAM-22091",
      timestamp: "2026-09-21T12:05:19Z",
      claimant: {
        name: "Jennifer L. Hayes",
        city: "Tampa",
        state: "FL",
        phone: "(813) 555-0129",
        email: "j.hayes.familylaw@gmail.com"
      },
      incidentDetails: {
        "Matter Type": "Contested Divorce with Minor Children",
        "Marriage Duration": "11 years",
        "Children": "2 minor children (ages 6 and 9)",
        "Marital Assets": "Marital home with substantial equity + 2 retirement 401(k) accounts and spouse business ownership",
        "Spouse Status": "Spouse recently served divorce petition with counsel; response deadline in 14 days",
        "Private Retainer": "Confirmed ready to retain private counsel immediately",
        "Representation": "Unrepresented (Needs responsive pleading filed)"
      },
      compliance: {
        jornayaLeadId: "82B37740-410E-AA89-9C1F-22E409511F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/b54a4a88bc3101aa7d23a101",
        consentText: "Prior express written consent granted under TCPA guidelines to be contacted by licensed family law firm partner.",
        optInTimestamp: "2026-09-21 12:05:14 UTC",
        ipAddress: "72.188.19.4"
      }
    },
    deliveryChannels: ["Live Phone Transfer", "CRM Webhook", "Encrypted SMS/Email"],
    targetAudience: "Boutique and mid-size family law litigation firms seeking retainable divorce and child custody cases.",
    faqList: [
      {
        q: "How do you screen out individuals who cannot afford a retainer?",
        a: "Our intake screening explicitly inquires whether the prospect is seeking private paid legal representation or legal aid, filtering out non-paying inquiries."
      }
    ]
  },
  {
    slug: 'criminal-defense-leads',
    aliases: ['criminal-defense', 'dui-leads'],
    title: "Criminal Defense & DUI Leads",
    shortTitle: "Criminal Defense & DUI",
    category: "Criminal / DUI / Traffic",
    badge: "DUI / DWI • Misdemeanor & Felony • Rapid Dispatch",
    tagline: "Immediate consultation inquiries from individuals or family members facing recent criminal charges.",
    overview: "Time-sensitive criminal defense inquiries generated following an arrest, citation, or charging decision. Inquiries are screened for upcoming arraignment or hearing dates, private representation intent, and unrepresented status.",
    keyStats: [
      { label: "Lead Response", value: "< 2 Minutes", sub: "Speed to lead for urgent arrests" },
      { label: "Charges", value: "DUI & Felonies", sub: "Traffic, state & federal charges" },
      { label: "Court Dates", value: "Arraignment", sub: "Upcoming hearing within 30 days" },
      { label: "Retainer", value: "Private Pay", sub: "Screened for private defense representation" }
    ],
    qualificationChecklist: [
      {
        title: "Active Criminal Charge or Investigation",
        desc: "Recent arrest, citation, indictment, or target letter from law enforcement."
      },
      {
        title: "Pending Court Date",
        desc: "Arraignment or preliminary hearing scheduled in your target county or district court."
      },
      {
        title: "Private Retainer Intent",
        desc: "Prospective client or family member intends to retain private counsel rather than public defender."
      },
      {
        title: "No Existing Private Attorney",
        desc: "Defendant is unrepresented or seeking to substitute existing ineffective counsel."
      }
    ],
    negativeDisqualifiers: [
      "Solely seeking a court-appointed public defender",
      "Case already concluded or expungement only (unless requested)",
      "Outside your firm's criminal court jurisdictions"
    ],
    intakeFields: [
      "Charge Description & Statute (DUI, Assault, Drug Offense, Theft, Weapons)",
      "Arresting Agency & County of Booking",
      "Next Court Date & Hearing Type (Arraignment, Preliminary)",
      "Bail / Bond Status (In custody or bailed out)",
      "Prior Criminal Record Status"
    ],
    samplePayload: {
      leadId: "BJ-CRIM-10943",
      timestamp: "2026-09-21T11:18:40Z",
      claimant: {
        name: "Tyler J. Brooks",
        city: "Austin",
        state: "TX",
        phone: "(512) 555-0144",
        email: "t.brooks.defense@gmail.com"
      },
      incidentDetails: {
        "Charge": "DUI (Class B Misdemeanor) with Breath Test refusal",
        "Arresting Agency": "Austin Police Department (Travis County)",
        "Bond Status": "Bailed out on personal recognizance",
        "Arraignment Date": "Scheduled in Travis County Court at Law #4 in 18 days",
        "Driver's License Issue": "Needs ALR hearing requested within 15 days of arrest to challenge suspension",
        "Representation": "Unrepresented (Looking for private DUI defense attorney today)"
      },
      compliance: {
        jornayaLeadId: "410EAA89-9C1F-82B3-7740-22E409511F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/4a88bc3101aab54a7d23a101",
        consentText: "Prior express written consent granted under TCPA guidelines to be contacted by licensed criminal defense counsel.",
        optInTimestamp: "2026-09-21 11:18:35 UTC",
        ipAddress: "172.56.21.80"
      }
    },
    deliveryChannels: ["Live Phone Transfer (24/7 Bridge)", "SMS Text Alert", "CRM Webhook"],
    targetAudience: "Criminal defense attorneys and DUI boutique practices where rapid response is vital to signing retainers.",
    faqList: [
      {
        q: "How fast are criminal defense inquiries delivered?",
        a: "Delivered in real time (under 60 seconds) directly to your on-call phone or intake coordinator via live transfer or automated SMS."
      }
    ]
  },
  {
    slug: 'bankruptcy-leads',
    aliases: ['bankruptcy', 'chapter-7-leads', 'chapter-13-leads'],
    title: "Bankruptcy & Consumer Debt Leads",
    shortTitle: "Bankruptcy & Debt",
    category: "Bankruptcy / Consumer Debt",
    badge: "Chapter 7 • Chapter 13 • Wage Garnishment Relief",
    tagline: "Consumers with qualifying unsecured debt or facing foreclosure seeking immediate bankruptcy relief.",
    overview: "Pre-screened consumer debt inquiries for Chapter 7 and Chapter 13 bankruptcy relief. Inquiries are verified for qualifying unsecured debt thresholds, employment indicators, impending garnishments or foreclosure deadlines, and unrepresented status.",
    keyStats: [
      { label: "Qualifying Debt", value: "$10,000+", sub: "Credit cards, personal loans & medical" },
      { label: "Urgency", value: "High", sub: "Garnishments, repos & foreclosure notices" },
      { label: "Chapter Types", value: "Ch. 7 & 13", sub: "Pre-screened based on means test indicators" },
      { label: "Exclusivity", value: "100% Exclusive", sub: "Zero shared leads" }
    ],
    qualificationChecklist: [
      {
        title: "Minimum Qualifying Unsecured Debt",
        desc: "Claimant carries at least $10,000+ in dischargeable credit cards, personal loans, or medical debts."
      },
      {
        title: "Means Test Suitability Indicator",
        desc: "Household income and family size assessed for Chapter 7 liquidation or Chapter 13 reorganization viability."
      },
      {
        title: "No Prior Recent Bankruptcy Discharge",
        desc: "Claimant has not received a Chapter 7 discharge within the last 8 years."
      },
      {
        title: "Unrepresented by Counsel",
        desc: "Claimant has not retained a bankruptcy attorney and needs immediate representation."
      }
    ],
    negativeDisqualifiers: [
      "Total debt below $10,000 minimum threshold",
      "Received Chapter 7 discharge within the statutory 8-year bar",
      "Already retained a bankruptcy lawyer",
      "Solely federal student loans with zero other dischargeable debt"
    ],
    intakeFields: [
      "Estimated Total Unsecured Debt",
      "Current Household Income & Employment Status",
      "Homeownership & Vehicle Equity Status",
      "Active Wage Garnishment, Lawsuit, or Foreclosure Threat",
      "Prior Bankruptcy Filing History"
    ],
    samplePayload: {
      leadId: "BJ-BNK-18042",
      timestamp: "2026-09-21T10:30:15Z",
      claimant: {
        name: "Kenneth R. Wright",
        city: "Philadelphia",
        state: "PA",
        phone: "(215) 555-0182",
        email: "k.wright.debtrelief@gmail.com"
      },
      incidentDetails: {
        "Total Debt": "$38,500 in credit cards and delinquent personal loans",
        "Household Income": "$48,000/yr (Likely passes PA Chapter 7 means test)",
        "Homeownership": "Renting apartment; no real estate equity",
        "Urgent Issue": "Creditor obtained judgment; employer received writ of wage attachment",
        "Prior Bankruptcy": "Never filed bankruptcy before",
        "Representation": "Unrepresented (Needs automatic stay filed to stop garnishment)"
      },
      compliance: {
        jornayaLeadId: "9C1F82B3-410E-AA89-7740-22E409511F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/aa7d23a101b54a4a88bc3101",
        consentText: "Prior express written consent granted under TCPA guidelines to be contacted by consumer bankruptcy attorney.",
        optInTimestamp: "2026-09-21 10:30:10 UTC",
        ipAddress: "68.80.19.112"
      }
    },
    deliveryChannels: ["CRM Webhook", "Email Ingestion", "Live Phone Transfer"],
    targetAudience: "Consumer debtor bankruptcy law firms seeking consistent monthly Chapter 7 and Chapter 13 case volume.",
    faqList: [
      {
        q: "Can we target Chapter 7 specifically versus Chapter 13?",
        a: "Yes. Our intake filters capture household income and family size so you can target candidates who fit your preferred chapter profile."
      }
    ]
  },
  {
    slug: 'medical-malpractice-leads',
    aliases: ['med-mal-leads', 'medical-malpractice'],
    title: "Medical Malpractice Leads for Law Firms",
    shortTitle: "Medical Malpractice",
    category: "Personal Injury / Mass Tort",
    badge: "Surgical Errors • Misdiagnosis • Permanent Harm",
    tagline: "High-value catastrophic medical negligence claims screened for expert affidavit viability.",
    overview: "Pre-screened medical negligence inquiries evaluated for objective standard-of-care deviations, permanent physical injuries, and compliance with statutory filing windows and pre-suit notice requirements.",
    keyStats: [
      { label: "Harm Severity", value: "Catastrophic", sub: "Permanent injury, revision surgery or wrongful death" },
      { label: "Care Deviation", value: "Screened", sub: "Surgical, birth injury, delayed diagnosis" },
      { label: "Statute Check", value: "Verified", sub: "Well within state medical tort window" },
      { label: "Exclusivity", value: "100% Exclusive", sub: "Routed exclusively to 1 litigation firm" }
    ],
    qualificationChecklist: [
      {
        title: "Severe Permanent Injury or Death",
        desc: "Brain damage, birth trauma, organ perforation, paralysis, amputation, or wrongful death directly caused by medical negligence."
      },
      {
        title: "Standard of Care Violation",
        desc: "Surgical instrument left in body, wrong-site surgery, documented failure to diagnose acute condition, or medication overdose."
      },
      {
        title: "Complete Medical Records Accessible",
        desc: "Claimant is prepared to request and provide operative reports, pathology results, and discharge summaries."
      },
      {
        title: "Unrepresented by Counsel",
        desc: "No medical malpractice attorney has been retained or declined the case after record review."
      }
    ],
    negativeDisqualifiers: [
      "Known accepted surgical risk without provider negligence",
      "Minor complication that resolved fully with zero ongoing impairment",
      "Incident past state medical malpractice statute of repose",
      "Case already reviewed and formally declined by other med-mal experts"
    ],
    intakeFields: [
      "Hospital / Clinic Name & Treating Physician",
      "Procedure Date & Underlying Medical Condition",
      "Alleged Act of Negligence (Misdiagnosis, Surgical Error, Medication)",
      "Resulting Permanent Injury or Impairment",
      "Corrective Surgeries or Additional Hospitalizations",
      "Status of Medical Records"
    ],
    samplePayload: {
      leadId: "BJ-MED-92011",
      timestamp: "2026-09-21T09:44:22Z",
      claimant: {
        name: "Theresa M. Campbell",
        city: "Pittsburgh",
        state: "PA",
        phone: "(412) 555-0198",
        email: "t.campbell.medmal@gmail.com"
      },
      incidentDetails: {
        "Facility": "Major University Hospital System",
        "Procedure": "Laparoscopic gallbladder resection (cholecystectomy)",
        "Surgical Error": "Undetected common bile duct transection causing severe sepsis and peritonitis",
        "Subsequent Care": "Required emergency surgical repair (Roux-en-Y hepaticojejunostomy) and 3 weeks ICU stay",
        "Long-term Harm": "Permanent biliary stricture requiring ongoing stent revisions and permanent disability",
        "Records": "Discharge summary and operative reports retrieved",
        "Representation": "Unrepresented (Seeking experienced trial counsel)"
      },
      compliance: {
        jornayaLeadId: "AA899C1F-22E40951-82B3-7740-410E1F1D",
        trustedFormCertUrl: "https://cert.trustedform.com/88bc3101aa7d23a101b54a4a",
        consentText: "Prior express written consent granted under TCPA guidelines to be contacted by licensed medical malpractice trial attorney.",
        optInTimestamp: "2026-09-21 09:44:17 UTC",
        ipAddress: "71.178.22.95"
      }
    },
    deliveryChannels: ["Direct Encrypted CRM Webhook", "Litify Case Ingestion", "Secure Legal Portal"],
    targetAudience: "Established medical malpractice and catastrophic injury trial firms.",
    faqList: [
      {
        q: "Do you filter out known accepted surgical risks?",
        a: "Yes. Our intake screening algorithms specifically ask about documented post-op findings and corrective revision surgeries to filter out standard complications."
      }
    ]
  }
];

export function getVerticalBySlug(slug: string): VerticalDetail | undefined {
  const normalized = slug.toLowerCase().replace(/^\/+/, '').replace(/\/+$/, '');
  return VERTICAL_DETAILS.find(v => {
    if (v.slug.toLowerCase() === normalized) return true;
    if (v.aliases && v.aliases.some(a => a.toLowerCase() === normalized)) return true;
    // Allow matching e.g. "mva" or "mva-leads"
    return false;
  });
}
