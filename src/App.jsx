import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyVK } from './components/WhyVK';
import { VisualNarrative } from './components/VisualNarrative';
import { RewiredProcess } from './components/RewiredProcess';
import { PropertySearch } from './components/PropertySearch';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { NeighborhoodGuide } from './components/NeighborhoodGuide';
import { ForAgents } from './components/ForAgents';
import { ServicesSection } from './components/ServicesSection';
import { FinancialTools } from './components/FinancialTools';
import { AgentsSection } from './components/AgentsSection';
import { Testimonials } from './components/Testimonials';
import { BlogResources } from './components/BlogResources';
import { OutroCTA } from './components/OutroCTA';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { AboutPage } from './pages/AboutPage';
import { SearchPage } from './pages/SearchPage';

export function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'search' | 'about'
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('Private Advisory Consultation');
  const [activeLocalityFilter, setActiveLocalityFilter] = useState('All Tamil Nadu');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = (subject = 'Private Advisory Consultation') => {
    setContactSubject(subject);
    setContactModalOpen(true);
  };

  const handleSelectLocality = (locality) => {
    setActiveLocalityFilter(locality);
    setCurrentPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickFilter = ({ locality, keyword }) => {
    if (locality) {
      setActiveLocalityFilter(locality);
    }
    setCurrentPage('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-root">
      {/* 1. Navigation Bar with only Search and About */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      <main>
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero 
              onOpenSearch={() => handleNavigate('search')}
              onQuickFilter={handleQuickFilter}
            />

            {/* Why VK Section */}
            <WhyVK />

            {/* 4-Arrow Editorial Visual Grid */}
            <VisualNarrative 
              onSelectLocality={handleSelectLocality}
            />

            {/* Real Estate, Rewired (3 Steps) */}
            <RewiredProcess 
              onStartSearch={() => handleNavigate('search')}
            />

            {/* Curated Properties Portfolio */}
            <PropertySearch 
              onSelectProperty={setSelectedProperty}
              selectedLocalityFilter={activeLocalityFilter}
              onClearFilter={() => setActiveLocalityFilter('All Tamil Nadu')}
            />

            {/* Tamil Nadu Prime Neighborhoods */}
            <NeighborhoodGuide 
              onSelectLocality={handleSelectLocality}
            />

            {/* For Agents Equity & Career */}
            <ForAgents 
              onJoinMovement={() => handleOpenContact('Agent Equity Network Application')}
            />

            {/* Services: Buy, Sell, Lease & Support Beyond */}
            <ServicesSection 
              onOpenContact={handleOpenContact}
            />

            {/* Tamil Nadu Stamp Duty & EMI Calculators */}
            <FinancialTools 
              onOpenContact={handleOpenContact}
            />

            {/* Certified Tamil Nadu Advisors */}
            <AgentsSection 
              onOpenContact={handleOpenContact}
            />

            {/* Client & NRI Testimonials */}
            <Testimonials />

            {/* Market Intelligence & Reports */}
            <BlogResources 
              onOpenContact={handleOpenContact}
            />

            {/* Outro CTA */}
            <OutroCTA 
              onGetStarted={() => handleOpenContact('Get Started With VK Real Estate')}
            />
          </>
        )}

        {currentPage === 'search' && (
          <SearchPage 
            onSelectProperty={setSelectedProperty}
            initialLocality={activeLocalityFilter}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onOpenContact={handleOpenContact}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={handleOpenContact}
        onNavigate={handleNavigate}
      />

      {/* Property Details Inspection Modal */}
      {selectedProperty && (
        <PropertyDetailModal 
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onOpenContact={handleOpenContact}
        />
      )}

      {/* Consultation & Site Visit Booking Modal */}
      <ScheduleModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialSubject={contactSubject}
      />
    </div>
  );
}

export default App;
