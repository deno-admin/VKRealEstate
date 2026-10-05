import React from 'react';
import { Phone, MessageSquare, Award, ArrowUpRight } from 'lucide-react';
import { AGENTS } from '../data/agents';

export function AgentsSection({ onOpenContact }) {
  return (
    <section id="agents" className="section section-secondary">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '48px' }}>
          <span className="section-badge">Direct Access Advisory</span>
          <h2 className="section-title">
            Meet Our Certified <span className="em">Tamil Nadu Partners</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#575757', marginTop: '12px' }}>
            Work directly with equity partners who bring unmatched hyper-local expertise, discrete negotiation, and complete TNRERA compliance.
          </p>
        </div>

        {/* Agents Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
          {AGENTS.map(agent => {
            const waMsg = encodeURIComponent(`Hello ${agent.name}, I would like to schedule a private advisory consultation for luxury real estate in Tamil Nadu.`);
            return (
              <div 
                key={agent.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {/* Agent Photo */}
                <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={agent.avatar} 
                    alt={agent.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    loading="lazy"
                  />
                  <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                    <span className="badge badge-dark">{agent.volume}</span>
                  </div>
                </div>

                {/* Agent Details */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#c5a059', marginBottom: '4px' }}>
                    {agent.experience}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '4px' }}>
                    {agent.name}
                  </h3>
                  <div style={{ fontSize: '0.875rem', color: '#8e8e93', marginBottom: '16px' }}>
                    {agent.role}
                  </div>

                  <p style={{ fontSize: '0.875rem', color: '#575757', lineHeight: '1.5', marginBottom: '20px' }}>
                    <strong>Focus:</strong> {agent.specialty}
                  </p>

                  {/* Direct Contact Buttons */}
                  <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                    <a 
                      href={`https://wa.me/${agent.whatsapp}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill"
                      style={{ flex: 1, backgroundColor: '#25D366', color: '#ffffff', border: '1px solid #25D366', padding: '10px 14px', fontSize: '0.875rem' }}
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>

                    <a 
                      href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                      className="btn-pill btn-pill-secondary"
                      style={{ padding: '10px 14px', fontSize: '0.875rem' }}
                      title="Call directly"
                    >
                      <Phone size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
