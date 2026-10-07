import React from 'react';
import { MapPin, TrendingUp, ArrowUpRight } from 'lucide-react';
import { NEIGHBORHOODS } from '../data/neighborhoods';

export function NeighborhoodGuide({ onSelectLocality }) {
  return (
    <section id="neighborhoods" className="section section-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="reveal-up" style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <span className="section-badge">Tamil Nadu Area Intelligence</span>
          <h2 className="section-title">
            Prime Enclaves & <span className="em">Living Corridors</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#575757', marginTop: '12px' }}>
            Explore price benchmarks, connectivity, and lifestyle nuances across Chennai, Coimbatore, and the Nilgiris.
          </p>
        </div>

        {/* Neighborhoods Grid */}
        <div className="neighborhoods-grid">
          {NEIGHBORHOODS.map((hood, index) => (
            <div 
              key={hood.id} 
              className="neighborhood-card reveal-up"
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => {
                onSelectLocality(hood.name);
                const target = document.getElementById('properties');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src={hood.image} alt={hood.name} loading="lazy" />
              
              <div className="neighborhood-overlay">
                <div className="neighborhood-meta">
                  <MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {hood.city}
                </div>
                <h3 className="neighborhood-name">{hood.name}</h3>
                <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '12px', lineHeight: '1.4' }}>
                  {hood.tagline}
                </p>

                <div className="neighborhood-stats">
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', opacity: 0.7 }}>Avg Price / sq.ft</span>
                    <strong>{hood.avgPriceSqft}</strong>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', display: 'block', opacity: 0.7 }}>Available</span>
                    <strong>{hood.activeListings} Properties</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
