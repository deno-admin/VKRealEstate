import React from 'react';
import { ArrowRight } from 'lucide-react';
import houseHeroImg from '../assets/house-hero.png';
import cloudImg from '../assets/cloud.webp';

export function Hero({ onOpenSearch }) {
  return (
    <section id="hero" className="hero-root">
      {/* Sky & Lighting Background */}
      <div className="hero-sky-backdrop">
        <div className="hero-sun-glow"></div>
        
        {/* Top Sky Floating Clouds */}
        <div className="hero-sky-cloud hero-sky-cloud-left">
          <img src={cloudImg} alt="" aria-hidden="true" />
        </div>
        <div className="hero-sky-cloud hero-sky-cloud-right">
          <img src={cloudImg} alt="" aria-hidden="true" />
        </div>
        <div className="hero-sky-cloud hero-sky-cloud-mid">
          <img src={cloudImg} alt="" aria-hidden="true" />
        </div>
      </div>

      {/* Hero Typography & CTA Content */}
      <div className="hero-text-container">
        <h1 className="hero-main-title">
          Find What Moves You
        </h1>

        <p className="hero-main-subtitle">
          Expert agents. Real guidance. <span className="em">A clear path to find what’s next.</span>
        </p>

        <div className="hero-cta-wrapper">
          <button 
            onClick={onOpenSearch}
            className="btn-pill btn-pill-primary btn-icon-slide hero-find-btn"
          >
            <span>Find Properties</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* House Architectural Render Layer */}
      <div className="hero-house-stage">
        <div className="hero-house-img-wrap">
          <img 
            src={houseHeroImg} 
            alt="VK Real Estate Luxury Architecture" 
            className="hero-house-img"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
