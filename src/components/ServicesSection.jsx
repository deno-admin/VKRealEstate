import React from 'react';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { SERVICES, SUPPORT_SERVICES } from '../data/services';

export function ServicesSection({ onOpenContact }) {
  return (
    <section id="services" className="section section-dark">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <span className="section-badge" style={{ color: '#c5a059' }}>Full Spectrum Advisory</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            How VK Real Estate <span className="em">Can Help You</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#a1a1aa', marginTop: '12px' }}>
            Backed by in-house legal, valuation, and architectural experts dialed in to get you the best outcome.
          </p>
        </div>

        {/* 3 Interactive Service Cards */}
        <div className="services-container" style={{ marginBottom: '80px' }}>
          {SERVICES.map(service => (
            <div 
              key={service.id} 
              className="service-card"
              onClick={() => onOpenContact(`Service Inquiry: ${service.action}`)}
            >
              {/* Background Image on Hover */}
              <div className="service-card-bg">
                <img src={service.bgImage} alt={service.title} loading="lazy" />
              </div>

              {/* Number */}
              <div className="service-num">{service.num}</div>

              {/* Title & Stats */}
              <div className="service-info">
                <h3>{service.title}</h3>
                <div style={{ fontSize: '0.8125rem', color: '#c5a059', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {service.stats}
                </div>
              </div>

              {/* Description */}
              <div className="service-desc">
                {service.desc}
              </div>

              {/* Action Pill */}
              <div className="service-action">
                <button className="btn-pill btn-pill-inversed btn-icon-slide">
                  <span>{service.action}</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Support Beyond Buying & Selling */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <span className="section-badge" style={{ color: '#c5a059' }}>End-to-End Ecosystem</span>
              <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: '700', letterSpacing: '-0.02em' }}>
                Support Beyond <span className="em">Buying & Selling</span>
              </h3>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {SUPPORT_SERVICES.map(sup => (
              <div 
                key={sup.id}
                style={{
                  backgroundColor: '#161616',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img src={sup.image} alt={sup.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '10px', color: '#ffffff' }}>
                    {sup.title}
                  </h4>
                  <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '20px' }}>
                    {sup.desc}
                  </p>
                  <button 
                    onClick={() => onOpenContact(`Inquiry: ${sup.title}`)}
                    className="btn-pill btn-pill-outline-light"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.875rem' }}
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
