import React from 'react';
import { ShieldCheck, Award, Building, Users, MapPin, ArrowRight } from 'lucide-react';

export function AboutPage({ onOpenContact }) {
  return (
    <div className="about-page" style={{ paddingTop: '100px' }}>
      {/* 1. About Hero */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '850px' }}>
            <span className="section-badge">About VK Real Estate</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', marginBottom: '24px' }}>
              Redefining Luxury Living <span className="em">Across Tamil Nadu.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#4a4a4a', lineHeight: '1.6' }}>
              We are Tamil Nadu's dedicated luxury residential advisory firm — built to guide discerning families, industrialists, and global NRIs through the acquisition of exceptional real estate with absolute discretion and legal clarity.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Editorial Story Section */}
      <section className="section section-secondary">
        <div className="container">
          <div className="why-vk-grid">
            <div className="why-vk-label">
              Our Heritage
            </div>

            <div>
              <h2 className="why-vk-headline">
                Founded on Discretion. <span className="em">Built on Uncompromising Trust.</span>
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', fontSize: '1.05rem', color: '#4a4a4a', lineHeight: '1.7', marginBottom: '48px' }}>
                <div>
                  <p style={{ marginBottom: '16px' }}>
                    Real estate in Tamil Nadu has historically been fragmented and opaque. High-net-worth acquisitions across iconic corridors like Poes Garden, East Coast Road (ECR), and Coimbatore’s Race Course required insider access, intense legal scrutiny, and subtle negotiations.
                  </p>
                  <p>
                    VK Real Estate was established to bring a modern, transparent, and client-centric approach to Tamil Nadu's prime property market. We combine hyper-local market intelligence with world-class institutional standards.
                  </p>
                </div>
                <div>
                  <p style={{ marginBottom: '16px' }}>
                    Every single listing in our portfolio undergoes rigorous 30-year title searches, TNRERA verification, and CMDA/DTCP guideline validation before it is presented to our clients.
                  </p>
                  <p>
                    Whether it is an oceanfront villa along ECR, a sky penthouse in Central Chennai, or an organic tea estate in the misty Nilgiris, our partners represent buyers and sellers with singular dedication.
                  </p>
                </div>
              </div>

              {/* Architectural Image Banner */}
              <div style={{ borderRadius: '24px', overflow: 'hidden', height: '420px', boxShadow: 'var(--shadow-md)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80" 
                  alt="VK Real Estate Architecture" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Four Pillars of Excellence */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '750px', marginBottom: '48px' }}>
            <span className="section-badge">Our Standard of Practice</span>
            <h2 className="section-title">
              Four Pillars of <span className="em">Excellence</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)', backgroundColor: '#ffffff' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f0fdf4', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '10px' }}>100% TNRERA Legal Diligence</h3>
              <p style={{ fontSize: '0.9375rem', color: '#575757', lineHeight: '1.6' }}>
                We work directly with senior real estate attorneys to perform exhaustive 30-year encumbrance (EC) checks, patta verifications, and master plan alignment.
              </p>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)', backgroundColor: '#ffffff' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Building size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '10px' }}>Discrete Off-Market Access</h3>
              <p style={{ fontSize: '0.9375rem', color: '#575757', lineHeight: '1.6' }}>
                Over 40% of our high-value transactions in Poes Garden, Boat Club, and Race Course happen privately off-market without public listings.
              </p>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)', backgroundColor: '#ffffff' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fefce8', color: '#ca8a04', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '10px' }}>NRI Concierge Desk</h3>
              <p style={{ fontSize: '0.9375rem', color: '#575757', lineHeight: '1.6' }}>
                Turnkey virtual tours, Power of Attorney (POA) legal syndication, and post-purchase property management for overseas Tamilians across the US, Singapore, and UAE.
              </p>
            </div>

            <div style={{ padding: '32px', borderRadius: '20px', border: '1px solid var(--border-light)', backgroundColor: '#ffffff' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fdf2f8', color: '#db2777', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '10px' }}>Advisory Equity Model</h3>
              <p style={{ fontSize: '0.9375rem', color: '#575757', lineHeight: '1.6' }}>
                Our senior partners hold real equity in the firm, ensuring their success is directly aligned with delivering five-star outcomes for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Offices & Consultation CTA */}
      <section className="section section-dark">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <span className="section-badge" style={{ color: '#c5a059' }}>Regional Presence</span>
              <h2 className="section-title" style={{ color: '#ffffff', marginBottom: '20px' }}>
                Visit Our Private <span className="em">Offices</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '32px' }}>
                We welcome private consultations at our Chennai headquarters in Nungambakkam and our Coimbatore office on Race Course Road.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#ffffff' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin size={20} color="#c5a059" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <strong>Chennai Headquarters:</strong><br />
                    <span style={{ color: '#a1a1aa', fontSize: '0.9375rem' }}>Level 8, Prestige Palladium Bayan, Greams Road, Nungambakkam, Chennai 600006</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <MapPin size={20} color="#c5a059" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <div>
                    <strong>Coimbatore Branch:</strong><br />
                    <span style={{ color: '#a1a1aa', fontSize: '0.9375rem' }}>Tristar Towers, Race Course Road, Coimbatore 641018</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#141414', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
                Speak With a Senior Partner
              </h3>
              <p style={{ fontSize: '0.9375rem', color: '#a1a1aa', lineHeight: '1.6', marginBottom: '24px' }}>
                Schedule a confidential conversation regarding luxury property acquisitions or bespoke advisory across Tamil Nadu.
              </p>
              <button 
                onClick={() => onOpenContact('Private Advisory with Leadership')}
                className="btn-pill btn-pill-inversed"
                style={{ width: '100%', padding: '16px' }}
              >
                <span>Book Private Advisory</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
