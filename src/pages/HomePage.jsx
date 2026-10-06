import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyVK } from '../components/WhyVK';
import { VisualNarrative } from '../components/VisualNarrative';
import { RewiredProcess } from '../components/RewiredProcess';
import { FeaturedProperties } from '../components/FeaturedProperties';
import { NeighborhoodGuide } from '../components/NeighborhoodGuide';
import { ForAgents } from '../components/ForAgents';
import { ServicesSection } from '../components/ServicesSection';
import { FinancialTools } from '../components/FinancialTools';
import { Testimonials } from '../components/Testimonials';
import { OutroCTA } from '../components/OutroCTA';

export function HomePage({ onSelectProperty, onOpenContact }) {
  const navigate = useNavigate();

  const handleSelectLocality = (locality) => {
    navigate(`/search?locality=${encodeURIComponent(locality)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* 1. Hero Section with Top Clouds & Roof Alignment */}
      <Hero />

      {/* 2. Why VK Section */}
      <WhyVK />

      {/* 3. 4-Arrow Editorial Visual Grid */}
      <VisualNarrative onSelectLocality={handleSelectLocality} />

      {/* 4. Real Estate, Rewired (3 Steps) */}
      <RewiredProcess />

      {/* 5. Signature Estates & Residences (Streamlined Home Showcase) */}
      <FeaturedProperties onSelectProperty={onSelectProperty} />

      {/* 6. Tamil Nadu Prime Neighborhoods */}
      <NeighborhoodGuide onSelectLocality={handleSelectLocality} />

      {/* 7. For Agents Equity & Career */}
      <ForAgents onJoinMovement={() => onOpenContact('Agent Equity Network Application')} />

      {/* 8. Services: Buy, Sell, Lease & Support Beyond */}
      <ServicesSection onOpenContact={onOpenContact} />

      {/* 9. Tamil Nadu Stamp Duty & EMI Calculators */}
      <FinancialTools onOpenContact={onOpenContact} />

      {/* 10. Client & NRI Testimonials */}
      <Testimonials />

      {/* 11. Outro CTA */}
      <OutroCTA onGetStarted={() => onOpenContact('Get Started With VK Real Estate')} />
    </div>
  );
}
