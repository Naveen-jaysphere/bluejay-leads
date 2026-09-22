import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { VerticalsPage } from './pages/VerticalsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { VerticalDetailPage } from './pages/VerticalDetailPage';
import { getVerticalBySlug } from './data/verticalDetails';

function getInitialPage(): PageId {
  if (typeof window === 'undefined') return 'home';
  const rawPath = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  const decodedPath = decodeURIComponent(rawPath).toLowerCase();

  if (!decodedPath || decodedPath === 'home') {
    return 'home';
  }
  if (decodedPath === 'verticals' || decodedPath === 'about' || decodedPath === 'contact') {
    return decodedPath;
  }
  const matched = getVerticalBySlug(decodedPath);
  if (matched) {
    return matched.slug;
  }
  return decodedPath || 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const rawPath = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
      const decodedPath = decodeURIComponent(rawPath).toLowerCase();
      if (!decodedPath || decodedPath === 'home') {
        setCurrentPage('home');
      } else {
        const matched = getVerticalBySlug(decodedPath);
        if (matched) {
          setCurrentPage(matched.slug);
        } else {
          setCurrentPage(decodedPath);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageId, plan?: string) => {
    if (plan) {
      setSelectedPlan(plan);
    }
    const cleanSlug = page.replace(/^\/+/, '');
    const newPath = cleanSlug === 'home' || !cleanSlug ? '/' : `/${cleanSlug}`;

    if (window.location.pathname !== newPath) {
      window.history.pushState({ page: cleanSlug, plan }, '', newPath);
    }

    setCurrentPage(cleanSlug || 'home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if current page is a dedicated vertical page
  const activeVertical = getVerticalBySlug(currentPage);

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-slate-800 font-sans antialiased selection:bg-[#0052FF] selection:text-white flex flex-col">
      {/* Global Navigation Header with Verticals Dropdown */}
      <Navbar
        currentPage={currentPage}
        onNavigate={(page) => navigateTo(page)}
      />

      {/* Main Page Views */}
      <main className="flex-1">
        {/* Dedicated Vertical Pages (e.g. /workers-comp-leads, /employment-law-leads, /lemon-law-leads, /mva-leads) */}
        {activeVertical ? (
          <VerticalDetailPage
            vertical={activeVertical}
            onNavigateToVertical={(slug) => navigateTo(slug)}
            onNavigateHome={() => navigateTo('home')}
            onNavigateToAllVerticals={() => navigateTo('verticals')}
          />
        ) : currentPage === 'home' ? (
          <HomePage
            onNavigateToContact={(plan) => navigateTo('contact', plan)}
            onNavigateToVerticals={() => navigateTo('verticals')}
          />
        ) : currentPage === 'verticals' ? (
          <VerticalsPage
            onSelectVertical={(vertical) => navigateTo('contact', vertical)}
            onNavigateToVerticalSlug={(slug) => navigateTo(slug)}
          />
        ) : currentPage === 'about' ? (
          <AboutPage
            onContactClick={() => navigateTo('contact')}
          />
        ) : currentPage === 'contact' ? (
          <ContactPage
            preselectedPlan={selectedPlan}
          />
        ) : (
          <HomePage
            onNavigateToContact={(plan) => navigateTo('contact', plan)}
            onNavigateToVerticals={() => navigateTo('verticals')}
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
