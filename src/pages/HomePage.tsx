import React from 'react';
import { Hero } from '../components/Hero';
import { WhyWorkWithUs } from '../components/WhyWorkWithUs';
import { PainPoints } from '../components/PainPoints';
import { ProcessSection } from '../components/ProcessSection';
import { SampleLeadsSection } from '../components/SampleLeadsSection';
import { IntakeOperationsSection } from '../components/IntakeOperationsSection';
import { FaqSection } from '../components/FaqSection';
import { ArrowRight, Zap, Check } from 'lucide-react';

interface HomePageProps {
  onNavigateToContact: (plan?: string) => void;
  onNavigateToVerticals?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToContact, onNavigateToVerticals }) => {
  return (
    <div className="space-y-0">
      {/* Hero Section with Light Crystal Theme & Brand Banner */}
      <Hero
        onGetLeadsClick={() => onNavigateToContact()}
        onViewVerticals={onNavigateToVerticals}
      />

      {/* Why Firms Work With Us - 5-Item Feature Grid */}
      <WhyWorkWithUs onNavigateToContact={() => onNavigateToContact()} />

      {/* Pain Points & Challenges */}
      <PainPoints onGetLeadsClick={() => onNavigateToContact()} />

      {/* Operational 4-Step Intake Process */}
      <ProcessSection />

      {/* Sample Leads & Intake Dashboard Preview */}
      <SampleLeadsSection 
        onNavigateToVerticals={onNavigateToVerticals}
        onNavigateToContact={() => onNavigateToContact()} 
      />

      {/* Disposition Reporting, Refund & Replacement Policy, Compliance, and Next Step Pilot */}
      <IntakeOperationsSection onStartPilot={() => onNavigateToContact('pilot')} />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Bottom Conversion Banner - Premium Prismatic Deep Navy & Azure */}
      <section className="relative py-24 bg-gradient-to-br from-[#0A1938] via-[#0D214F] to-[#060E21] text-white overflow-hidden border-t border-blue-900/40">
        {/* Prismatic Sheens matching the brand image corners */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#0052FF]/20 via-sky-400/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold">
            <Zap className="w-3.5 h-3.5 text-[#0052FF]" />
            Ready for Predictable Caseload Growth?
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Stop gambling on agency retainers.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
              Start signing qualified retainers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us your target jurisdictions, practice areas, and monthly caseload capacity. We will confirm available claimant volume and launch your intake pipeline in 24 to 48 hours.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigateToContact()}
              className="bg-[#0052FF] hover:bg-[#0043D6] text-white font-bold text-base px-9 py-4 rounded-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all inline-flex items-center gap-2.5 cursor-pointer group"
            >
              <span>Request Case Inventory & Pricing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-400 flex items-center justify-center gap-4">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400" />
              100% Exclusive Claimants
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-400" />
              Direct Legal CRM Integration
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
