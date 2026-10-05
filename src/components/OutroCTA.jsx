import React from 'react';
import { ArrowRight } from 'lucide-react';

export function OutroCTA({ onGetStarted }) {
  return (
    <section className="outro-section">
      <div className="outro-bg">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" 
          alt="Tamil Nadu Luxury Estates" 
          loading="lazy"
        />
      </div>

      <div className="container outro-content">
        <h2 className="outro-title">
          Find You. <span className="em" style={{ color: '#d4d4d8' }}>We’ll Help You Get There.</span>
        </h2>

        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.85)', maxWidth: '650px', margin: '0 auto 36px auto', lineHeight: '1.6' }}>
          Connect with Tamil Nadu's elite property advisors for discrete, off-market opportunities across Chennai, Coimbatore, and the Western Ghats.
        </p>

        <button 
          onClick={onGetStarted}
          className="btn-pill btn-pill-inversed btn-icon-slide"
          style={{ padding: '18px 42px', fontSize: '1.05rem', fontWeight: '700' }}
        >
          <span>Let’s Get Started</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
