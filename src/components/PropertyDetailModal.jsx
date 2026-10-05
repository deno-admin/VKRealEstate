import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Square, ShieldCheck, Check, Phone, MessageSquare, Calculator, FileCheck, Share2 } from 'lucide-react';
import { AGENTS } from '../data/agents';

export function PropertyDetailModal({ property, onClose, onOpenContact }) {
  const [activeImage, setActiveImage] = useState(property.heroImage);
  const [copied, setCopied] = useState(false);

  if (!property) return null;

  const agent = AGENTS.find(a => a.id === property.agentId) || AGENTS[0];

  // Calculate quick TN Stamp Duty (7%) + Registration (4%)
  const stampDuty = (property.price * 0.07).toFixed(2);
  const regFee = (property.price * 0.04).toFixed(2);
  const totalTax = (parseFloat(stampDuty) + parseFloat(regFee)).toFixed(2);

  // Calculate approximate monthly EMI for 20 years @ 8.5% p.a.
  // P = 80% of price in INR
  const loanPrincipal = property.price * 10000000 * 0.8;
  const monthlyRate = 0.085 / 12;
  const tenureMonths = 240;
  const emi = Math.round(
    (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1)
  );

  const emiFormatted = (emi / 100000).toFixed(2) + " Lakhs/mo";

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello ${agent.name}, I am interested in viewing "${property.title}" (${property.priceFormatted}) in ${property.locality}. Please share more details and arrange a site inspection.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Gallery Section */}
        <div style={{ position: 'relative' }}>
          <div style={{ height: '420px', overflow: 'hidden', backgroundColor: '#000' }}>
            <img 
              src={activeImage} 
              alt={property.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>

          {/* Badges */}
          <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px' }}>
            <span className="badge badge-dark">{property.tag}</span>
            <span className="badge badge-rera">
              <ShieldCheck size={14} /> TNRERA Approved
            </span>
          </div>

          {/* Gallery Thumbnails */}
          {property.gallery && property.gallery.length > 1 && (
            <div style={{
              display: 'flex',
              gap: '10px',
              padding: '12px 24px',
              backgroundColor: '#f8f9fa',
              overflowX: 'auto'
            }}>
              {property.gallery.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    width: '70px',
                    height: '50px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: activeImage === img ? '2px solid #0a0a0a' : '2px solid transparent',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  <img src={img} alt="thumb" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Content */}
        <div style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          {/* Title and Price Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c5a059', marginBottom: '4px' }}>
                {property.type}
              </div>
              <h2 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: '700', letterSpacing: '-0.02em', lineHeight: '1.25' }}>
                {property.title}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#737373', marginTop: '6px', fontSize: '0.95rem' }}>
                <MapPin size={18} color="#0a0a0a" />
                <span>{property.locality}, {property.city}, {property.state}</span>
              </div>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '2rem', fontWeight: '700', color: '#0a0a0a', letterSpacing: '-0.02em' }}>
                {property.priceFormatted}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#737373' }}>
                ₹{Math.round((property.price * 10000000) / property.sqft).toLocaleString('en-IN')} / sq.ft
              </div>
            </div>
          </div>

          {/* Key Specs Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '16px',
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '16px',
            margin: '24px 0'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#8e8e93', textTransform: 'uppercase', fontWeight: '600' }}>Bedrooms</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bed size={18} /> {property.bhk} BHK
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#8e8e93', textTransform: 'uppercase', fontWeight: '600' }}>Bathrooms</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bath size={18} /> {property.baths} Baths
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#8e8e93', textTransform: 'uppercase', fontWeight: '600' }}>Built-up Area</div>
              <div style={{ fontSize: '1.25rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Square size={18} /> {property.sqft} sq.ft
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: '#8e8e93', textTransform: 'uppercase', fontWeight: '600' }}>Plot Size</div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                {property.plotArea}
              </div>
            </div>
          </div>

          {/* Compliance & Approvals Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            padding: '16px 20px',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            borderRadius: '12px',
            marginBottom: '28px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileCheck size={20} color="#059669" />
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#065f46' }}>TNRERA Registered:</strong>
                <span style={{ fontSize: '0.875rem', marginLeft: '6px', fontFamily: 'monospace' }}>{property.reraId}</span>
              </div>
            </div>
            <div style={{ height: '20px', width: '1px', backgroundColor: '#d1fae5' }}></div>
            <div style={{ fontSize: '0.875rem', color: '#065f46' }}>
              <strong>Approvals:</strong> {property.approval}
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '10px' }}>Architectural Overview</h4>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#575757' }}>
              {property.description}
            </p>
          </div>

          {/* Amenities Grid */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '14px' }}>Curated Amenities & Finishes</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {property.amenities.map((amenity, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9375rem', color: '#2b2b2b' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', flexShrink: 0 }}>
                    <Check size={12} />
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tamil Nadu Financial Estimation Breakdown */}
          <div style={{
            padding: '24px',
            backgroundColor: '#f8f9fa',
            borderRadius: '16px',
            marginBottom: '32px'
          }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calculator size={18} /> Tamil Nadu Financial Breakdown
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '0.8125rem', color: '#8e8e93' }}>TN Stamp Duty (7%)</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹{stampDuty} Cr</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', color: '#8e8e93' }}>Registration Fee (4%)</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>₹{regFee} Cr</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', color: '#8e8e93' }}>Total Govt. Outlay</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#2563eb' }}>₹{totalTax} Cr</div>
              </div>
              <div>
                <div style={{ fontSize: '0.8125rem', color: '#8e8e93' }}>Est. Monthly EMI (80% LTV)</div>
                <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#059669' }}>~₹{emiFormatted}</div>
              </div>
            </div>
          </div>

          {/* Assigned Agent Box & Contact Actions */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px',
            border: '1px solid #e5e5e7',
            borderRadius: '20px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <img 
                src={agent.avatar} 
                alt={agent.name} 
                style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} 
              />
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#8e8e93', textTransform: 'uppercase' }}>
                  Listing Advisory Partner
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: '700' }}>{agent.name}</div>
                <div style={{ fontSize: '0.8125rem', color: '#575757' }}>{agent.role}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href={`https://wa.me/${agent.whatsapp}?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-pill"
                style={{ backgroundColor: '#25D366', color: '#ffffff', border: '1px solid #25D366' }}
              >
                <MessageSquare size={16} /> WhatsApp Advisor
              </a>

              <button 
                onClick={() => {
                  onClose();
                  onOpenContact(`Site Visit: ${property.title}`);
                }}
                className="btn-pill btn-pill-primary"
              >
                Schedule Private Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
