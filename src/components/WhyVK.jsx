import React from 'react';

export function WhyVK() {
  return (
    <section id="why-vk" className="section">
      <div className="container">
        <div className="why-vk-grid reveal-up">
          {/* Left Column */}
          <div className="why-vk-label">
            Why VK
          </div>

          {/* Right Column */}
          <div>
            <h2 className="why-vk-headline">
              Your life’s changing. Don’t just find a place — find what’s next. <span className="em">We help you move forward with clarity, confidence, and the right agent by your side across Tamil Nadu.</span>
            </h2>

            {/* Architectural Showcase Banner Placeholder */}
            <div className="why-vk-media-banner reveal-scale">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80" 
                alt="Tamil Nadu Luxury Living" 
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '24px 32px',
                background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)',
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c5a059' }}>
                    Curated Living
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>
                    From Coastal East Coast Road to the Nilgiris Mist
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', fontSize: '0.875rem' }}>
                  <span><strong>100%</strong> Clear Titles</span>
                  <span><strong>₹1,200+ Cr</strong> Portfolio Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
