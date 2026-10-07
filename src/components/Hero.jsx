import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import houseHeroImg from '../assets/house-hero.png';
import cloudImg from '../assets/cloud.webp';

const ROTATING_WORDS = [
  "Sanctuary",
  "Coastal Villa",
  "Sky Penthouse",
  "Tea Estate",
  "Legacy"
];

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('fade-out');
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setFadeState('fade-in');
      }, 350);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-root">
      {/* Sky & Lighting Background with Ambient Radiance */}
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
          Find Your <span className={`hero-dynamic-word ${fadeState}`}>{ROTATING_WORDS[wordIndex]}</span>
        </h1>

        <p className="hero-main-subtitle">
          Expert agents. Real guidance. <span className="em">A clear path to Tamil Nadu’s finest estates.</span>
        </p>

        <div className="hero-cta-wrapper">
          <Link 
            to="/search"
            className="btn-pill btn-pill-primary btn-icon-slide hero-find-btn"
          >
            <span>Explore Properties</span>
            <ArrowRight size={16} />
          </Link>
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
