import React, { useState, useMemo } from 'react';
import { LEGAL_VERTICALS } from '../data/legalVerticals';
import { ArrowRight, Search, Check, Scale, Filter, ShieldCheck } from 'lucide-react';

interface VerticalsPageProps {
  onSelectVertical: (verticalName: string) => void;
}

export const VerticalsPage: React.FC<VerticalsPageProps> = ({ onSelectVertical }) => {
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

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Select your firm’s primary practice areas to review active regional inventory, negative qualification criteria, and real-time per-claimant rates.
          </p>

          {/* Quick Search Bar */}
          <div className="pt-4 max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search practice areas (e.g. MVA, Dog Bite, SSDI, Divorce, Camp Lejeune)..."
                className="w-full bg-white border border-blue-200/90 rounded-xl pl-10 pr-12 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0052FF] shadow-xs transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
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
                    {group.items.map((item, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => onSelectVertical(item)}
                          className="w-full text-left text-xs text-slate-700 hover:text-[#0052FF] hover:bg-blue-50/70 p-2 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#0052FF] shrink-0" />
                            <span className="font-medium">{item}</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#0052FF] transition-opacity shrink-0 ml-1" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100">
                  <button
                    onClick={() => onSelectVertical(group.category)}
                    className="w-full text-center text-xs font-bold text-[#0052FF] hover:text-[#0043D6] py-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Request Inquiries for {group.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global CTA */}
        <div className="mt-16 text-center bg-white border border-blue-100 rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto text-[#0052FF] mb-4">
            <Scale className="w-6 h-6" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#0A1938] mb-2">
            Need Custom Case Underwriting or Multi-State Inventory?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto leading-relaxed">
            We support firm-specific custom qualification checklists including strict liability guidelines, statute of limitations cutoffs, minimum policy limits, and injury severity thresholds.
          </p>
          <button
            onClick={() => onSelectVertical('Custom Law Firm Intake Parameters')}
            className="bg-[#0052FF] hover:bg-[#0043D6] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Configure Your Firm's Intake Criteria</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
