import React, { useState } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const navigateTo = (page: PageId, plan?: string) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800 font-sans antialiased selection:bg-[#0052FF] selection:text-white flex flex-col">
      {/* Global Navigation Header with Logo */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => navigateTo(page)}
      />

      {/* Main Page Views */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigateToContact={(plan) => navigateTo('contact', plan)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onContactClick={() => navigateTo('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            preselectedPlan={selectedPlan}
          />
        )}
      </main>

      {/* Global Footer with Logo & Navigation */}
      <Footer
        onNavigate={(page) => navigateTo(page)}
      />
    </div>
  );
}
