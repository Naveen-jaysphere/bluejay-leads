import React, { useState, useMemo } from 'react';
import { LEGAL_VERTICALS } from '../data/legalVerticals';
import { VERTICAL_DETAILS, getVerticalBySlug } from '../data/verticalDetails';
import { ArrowRight, Search, Check, Scale, Filter, ShieldCheck, Briefcase, Users, Wrench, Car } from 'lucide-react';

interface VerticalsPageProps {
  onSelectVertical: (verticalName: string) => void;
  onNavigateToVerticalSlug?: (slug: string) => void;
}

export const VerticalsPage: React.FC<VerticalsPageProps> = ({ onSelectVertical, onNavigateToVerticalSlug }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    return ['All', ...LEGAL_VERTICALS.map(g => g.category)];
  }, []);

  const filteredVerticals = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return LEGAL_VERTICALS.map(group => {
      // Category filter check
      if (selectedCategory !== 'All' && group.category !== selectedCategory) {
        return null;
      }

      if (!q) return group;

      const matchesCategory = group.category.toLowerCase().includes(q);
      const matchingItems = group.items.filter(item => item.toLowerCase().includes(q));

      if (matchesCategory) {
        return group;
      }
      if (matchingItems.length > 0) {
        return {
          ...group,
          items: matchingItems
        };
      }
      return null;
    }).filter(Boolean) as typeof LEGAL_VERTICALS;
  }, [searchQuery, selectedCategory]);

  const totalItemCount = useMemo(() => {
    return LEGAL_VERTICALS.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // Quick slug mapping for items
  const findSlugForItem = (itemName: string): string | null => {
    const lower = itemName.toLowerCase();
    if (lower.includes("worker") || lower.includes("compensation")) return 'workers-comp-leads';
    if (lower.includes("employment") || lower.includes("wrongful") || lower.includes("wage")) return 'employment-law-leads';
    if (lower.includes("lemon") || lower.includes("warranty")) return 'lemon-law-leads';
    if (lower.includes("auto") || lower.includes("mva") || lower.includes("car accident") || lower.includes("vehicle")) return 'mva-leads';
    if (lower.includes("slip") || lower.includes("premises") || lower.includes("personal injury")) return 'personal-injury-leads';
    if (lower.includes("mass tort") || lower.includes("defective drug")) return 'mass-tort-leads';
    if (lower.includes("ssdi") || lower.includes("disability")) return 'ssdi-disability-leads';
    if (lower.includes("divorce") || lower.includes("custody") || lower.includes("family")) return 'family-law-leads';
    if (lower.includes("criminal") || lower.includes("dui")) return 'criminal-defense-leads';
    if (lower.includes("bankruptcy") || lower.includes("debt")) return 'bankruptcy-leads';
    if (lower.includes("malpractice")) return 'medical-malpractice-leads';
    return null;
  };

  const handleItemClick = (itemName: string) => {
    const slug = findSlugForItem(itemName);
    if (slug && onNavigateToVerticalSlug) {
      onNavigateToVerticalSlug(slug);
    } else {
      onSelectVertical(itemName);
    }
  };

  const featuredVerticalCards = [
    {
      slug: 'workers-comp-leads',
      title: "Workers' Compensation Leads",
      desc: "Injuries in scope of employment, employer reported, active medical treatment.",
      badge: "Popular",
      icon: Briefcase
    },
    {
      slug: 'employment-law-leads',
      title: "Employment Law Leads",
      desc: "Wrongful termination, retaliation, discrimination & wage/hour claims.",
      badge: "High Retainer",
      icon: Users
    },
    {
      slug: 'lemon-law-leads',
      title: "Lemon Law Leads",
      desc: "Persistent vehicle defects, warranty breaches & statutory buyback claims.",
      badge: "Prescreened",
      icon: Wrench
    },
    {
      slug: 'mva-leads',
      title: "MVA & Auto Accident Leads",
      desc: "Clear adverse fault, recent crash date, verified medical treatment.",
      badge: "Highest Volume",
      icon: Car
    }
  ];

  return (
    <div className="bg-[#F8FAFD] text-slate-800 pb-24">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#EBF3FC] via-[#F4F8FD] to-white border-b border-blue-100 pt-16 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052FF] text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>50+ Legal Practice Areas • 100% Exclusive Claimants</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A1938]">
            Connecting Law Firms with Qualified Opportunities
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Select a dedicated practice area page below or search across our comprehensive catalog of {totalItemCount}+ verified practice area dockets.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search practice areas (e.g. workers compensation, lemon law, MVA, wrongful term)..."
                className="w-full bg-white border border-blue-200 rounded-2xl pl-11 pr-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:border-[#0052FF]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3 max-w-4xl mx-auto">
            {categories.slice(0, 8).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSearchQuery('');
                }}
                className={`text-xs px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0052FF] border-[#0052FF] text-white font-bold shadow-xs'
                    : 'bg-white border-slate-200/80 text-slate-600 hover:bg-blue-50/60 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
            {categories.length > 8 && selectedCategory !== 'All' && !categories.slice(0, 8).includes(selectedCategory) && (
              <button
                onClick={() => setSelectedCategory(selectedCategory)}
                className="text-xs px-3 py-1.5 rounded-xl border bg-[#0052FF] border-[#0052FF] text-white font-bold shadow-xs"
              >
                {selectedCategory}
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Dedicated Vertical Pages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-4">
          <span className="text-xs font-mono font-bold text-[#0052FF] uppercase tracking-wider block">
            Dedicated Practice Area Pages
          </span>
          <h2 className="text-xl font-black text-[#0A1938]">
            Popular Law Firm Verticals
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredVerticalCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.slug}
                onClick={() => onNavigateToVerticalSlug?.(card.slug)}
                className="bg-white rounded-2xl p-5 border border-blue-100 shadow-2xs hover:border-[#0052FF] hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0052FF] group-hover:bg-[#0052FF] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-[#0052FF] border border-blue-100">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A1938] group-hover:text-[#0052FF] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0052FF]">
                  <span>Explore Vertical Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Verticals Grid - Clean, Architectural, and Organized */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="flex items-center justify-between pb-6 mb-2 border-b border-slate-200/60 text-xs text-slate-500 font-medium">
          <span>Showing {filteredVerticals.reduce((acc, g) => acc + g.items.length, 0)} practice areas across {filteredVerticals.length} categories</span>
          <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            100% Unrepresented & Retainer-Ready
          </span>
        </div>

        {filteredVerticals.length === 0 ? (
          <div className="text-center py-16 bg-white border border-blue-100 rounded-2xl max-w-md mx-auto p-8 shadow-xs">
            <p className="text-slate-700 text-sm font-semibold">No practice areas match "{searchQuery}".</p>
            <p className="text-slate-500 text-xs mt-1">Try searching for a broader term or reset the filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 text-xs text-[#0052FF] font-bold hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVerticals.map((group) => (
              <div
                key={group.id}
                className="bg-white border border-blue-100/90 rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(2,82,255,0.05)] hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                    <h2 className="text-base font-bold text-[#0A1938]">
                      {group.category}
                    </h2>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-blue-50 text-[#0052FF] border border-blue-100">
                      {group.items.length} {group.items.length === 1 ? 'sub-vertical' : 'sub-verticals'}
                    </span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {group.items.map((item, idx) => {
                      const slug = findSlugForItem(item);
                      return (
                        <li key={idx}>
                          <button
                            onClick={() => handleItemClick(item)}
                            className="w-full text-left text-xs text-slate-700 hover:text-[#0052FF] hover:bg-blue-50/70 p-2 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                          >
                            <span className="flex items-center gap-2">
                              <Check className="w-3.5 h-3.5 text-[#0052FF] shrink-0" />
                              <span className="font-medium">{item}</span>
                            </span>
                            <div className="flex items-center gap-1">
                              {slug && (
                                <span className="text-[9px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                  Page
                                </span>
                              )}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#0052FF] transition-opacity shrink-0 ml-1" />
                            </div>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100">
                  <button
                    onClick={() => handleItemClick(group.category)}
                    className="w-full text-center text-xs font-bold text-[#0052FF] hover:text-[#0043D6] py-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Contact Us for {group.category}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Compliance & Intake Standard Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-[#0A1938] rounded-3xl p-8 sm:p-10 text-white border border-blue-900 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-1">
                Standard 01
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                100% Exclusive To Your Firm
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Zero shared inquiries. Every claimant is routed only to your firm's intake desk or CRM via real-time webhook.
              </p>
            </div>

            <div>
              <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-1">
                Standard 02
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                72-Hour Quality Guarantee
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If any claimant fails verified criteria, has existing counsel, or provides invalid contact details, you receive an automatic replacement credit.
              </p>
            </div>

            <div>
              <div className="text-blue-400 font-mono text-xs font-bold uppercase mb-1">
                Standard 03
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Audit-Ready Consent
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Each inquiry includes Jornaya and TrustedForm certificates meeting FCC 1:1 prior express written consent standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
