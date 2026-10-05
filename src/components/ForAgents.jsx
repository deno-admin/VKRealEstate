import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';

export function ForAgents({ onJoinMovement }) {
  return (
    <section id="for-agents" className="section">
      <div className="container">
        <div className="for-agents-grid">
          {/* Left Images Layout */}
          <div className="for-agents-images">
            <div className="agent-img-box">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="VK Real Estate Partner Advisor" 
                loading="lazy"
              />
            </div>
            <div className="agent-img-box" style={{ marginTop: '30px' }}>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                alt="VK Modern Agency Office" 
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="for-agents-content">
            <span className="section-badge">For Real Estate Leaders & Brokers</span>
            <h2>
              Don’t Rent Your Career. <span className="em">Own It.</span>
            </h2>

            <p className="for-agents-text">
              At VK Real Estate, our advisors don’t just work for the brand — they own a tangible stake in our growth. <span className="em">We provide top performers with real equity, industry-leading AI tools, direct HNWI deal flow, and legal title teams so you can focus entirely on high-impact transactions across Tamil Nadu.</span>
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '36px' }}>
              <div>
                <div style={{ fontSize: '1.65rem', fontWeight: '700', fontFamily: 'var(--font-sans)', color: '#0a0a0a' }}>
                  85% - 92%
                </div>
                <div style={{ fontSize: '0.875rem', color: '#737373' }}>
                  Commission Splits & Equity
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.65rem', fontWeight: '700', fontFamily: 'var(--font-sans)', color: '#0a0a0a' }}>
                  ₹1,200+ Cr
                </div>
                <div style={{ fontSize: '0.875rem', color: '#737373' }}>
                  Annual Transaction Volume
                </div>
              </div>
            </div>

            <button 
              onClick={onJoinMovement}
              className="btn-pill btn-pill-primary btn-icon-slide"
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              <span>Join The Movement</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
