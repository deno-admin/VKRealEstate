import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Check } from 'lucide-react';
import { Logo } from './Logo';

export function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        {/* Top Grid */}
        <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          {/* Col 1: Brand & Newsletter */}
          <div className="footer-brand">
            <div style={{ marginBottom: '16px' }}>
              <Logo height={32} color="#ffffff" />
            </div>
            <p style={{ color: '#a1a1aa', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '24px' }}>
              Tamil Nadu's premier property advisory firm specializing in coastal luxury villas, VIP enclaves, and mountain plantation manors.
            </p>

            <div style={{ fontSize: '0.875rem', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
              Subscribe to Private TN Market Reports
            </div>

            <form onSubmit={handleSubscribe} className="newsletter-box">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button 
                type="submit" 
                className="btn-pill btn-pill-inversed" 
                style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={16} color="#059669" /> : <ArrowRight size={16} />}
              </button>
            </form>
            {subscribed && (
              <div style={{ fontSize: '0.8125rem', color: '#10b981', marginTop: '8px' }}>
                ✓ Subscribed! You will receive our exclusive off-market updates.
              </div>
            )}
          </div>

          {/* Col 2: Advisory & Legal */}
          <div className="footer-col">
            <h4>Advisory & Legal</h4>
            <ul className="footer-links">
              <li><Link to="/search">Search All Properties</Link></li>
              <li><Link to="/about">About VK Real Estate</Link></li>
              <li><a href="#calculators" onClick={(e) => { e.preventDefault(); onOpenContact('TN Stamp Duty Inquiry'); }}>TN Stamp Duty (7%)</a></li>
              <li><a href="#calculators" onClick={(e) => { e.preventDefault(); onOpenContact('Home Loan EMI Inquiry'); }}>Home Loan EMI Tool</a></li>
              <li><a href="#nri-desk" onClick={(e) => { e.preventDefault(); onOpenContact('NRI Concierge Inquiry'); }}>NRI Concierge Desk</a></li>
              <li><a href="#for-agents" onClick={(e) => { e.preventDefault(); onOpenContact('Agent Equity Network Application'); }}>Agent Equity Network</a></li>
              <li><Link to="/about">TNRERA Standards</Link></li>
            </ul>
          </div>

          {/* Col 3: Headquarters & Contact (Chennai only) */}
          <div className="footer-col">
            <h4>Headquarters</h4>
            <div style={{ color: '#a1a1aa', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px' }}>
                <MapPin size={16} style={{ marginTop: '3px', flexShrink: 0 }} color="#c5a059" />
                <span>
                  <strong>Chennai HQ:</strong><br />
                  Level 8, Prestige Palladium Bayan,<br />
                  Greams Road, Nungambakkam,<br />
                  Chennai, Tamil Nadu 600006
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Mail size={16} color="#c5a059" />
                <a href="mailto:concierge@vkrealestate.in" style={{ color: '#ffffff' }}>concierge@vkrealestate.in</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#c5a059" />
                <a href="tel:999999999" style={{ color: '#ffffff', fontWeight: '600' }}>999999999</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclosures */}
        <div className="footer-bottom">
          <div>
            VK Real Estate Advisory Pvt. Ltd. | TNRERA Agent Reg: <strong>TN/AGENT/0142/2022</strong>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); onOpenContact('Privacy Policy Inquiry'); }}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); onOpenContact('Terms of Service'); }}>Terms of Service</a>
            <a href="#rera-disclosure" onClick={(e) => { e.preventDefault(); onOpenContact('RERA Disclosures'); }}>TNRERA Disclosures</a>
            <a href="#cmda-guidelines" onClick={(e) => { e.preventDefault(); onOpenContact('CMDA Guidelines'); }}>CMDA Guidelines</a>
          </div>

          <div>
            © 2026 VK Real Estate. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
