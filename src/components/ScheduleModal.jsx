import React, { useState } from 'react';
import { X, Send, MessageSquare, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';

export function ScheduleModal({ isOpen, onClose, initialSubject = 'Private Advisory Consultation' }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Chennai');
  const [budget, setBudget] = useState('₹5 Cr - ₹15 Cr');
  const [notes, setNotes] = useState(initialSubject);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  const directWhatsAppText = encodeURIComponent(
    `Hello VK Real Estate Concierge, My name is ${name || 'Interested Client'}. I would like to enquire about: "${notes}" in ${city}. Budget: ${budget}.`
  );

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-card" 
        style={{ maxWidth: '600px', padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#ecfdf5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.65rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              Consultation Scheduled
            </h3>
            <p style={{ color: '#575757', lineHeight: '1.6' }}>
              Thank you, <strong>{name}</strong>. A dedicated Senior Partner from VK Real Estate will connect with you within 2 hours.
            </p>
          </div>
        ) : (
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#059669', fontSize: '0.8125rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '6px' }}>
              <ShieldCheck size={14} /> Private & Confidential Advisory
            </div>

            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.65rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '8px' }}>
              Book Private Consultation
            </h3>

            <p style={{ fontSize: '0.9375rem', color: '#8e8e93', marginBottom: '24px' }}>
              Speak directly with our senior property partners across Chennai, Coimbatore, and the Nilgiris.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '6px' }}>
                  Full Name *
                </label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Senthil Nathan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e5e5e7',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '6px' }}>
                    Phone Number / WhatsApp *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="+91 98400 00000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #e5e5e7',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #e5e5e7',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '6px' }}>
                    Target Region
                  </label>
                  <select 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #e5e5e7',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="Chennai (ECR / Poes Garden / OMR)">Chennai (ECR / Poes Garden / OMR)</option>
                    <option value="Coimbatore (Race Course / RS Puram)">Coimbatore (Race Course / RS Puram)</option>
                    <option value="Nilgiris / Coonoor Hill Estates">Nilgiris / Coonoor Hill Estates</option>
                    <option value="Madurai & Trichy">Madurai & Trichy</option>
                    <option value="NRI Remote Investment">NRI Remote Investment</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '6px' }}>
                    Investment Range
                  </label>
                  <select 
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid #e5e5e7',
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <option value="₹3 Cr - ₹5 Cr">₹3 Cr - ₹5 Cr</option>
                    <option value="₹5 Cr - ₹15 Cr">₹5 Cr - ₹15 Cr</option>
                    <option value="₹15 Cr - ₹35 Cr">₹15 Cr - ₹35 Cr</option>
                    <option value="₹35+ Cr Trophy Estates">₹35+ Cr Trophy Estates</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: '700', marginBottom: '6px' }}>
                  Requirement Details / Subject
                </label>
                <textarea 
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: '1px solid #e5e5e7',
                    fontSize: '0.9375rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                <button 
                  type="submit"
                  className="btn-pill btn-pill-primary"
                  style={{ flex: 1, padding: '14px 24px' }}
                >
                  <Send size={16} /> Request Confidential Call
                </button>

                <a 
                  href={`https://wa.me/919840122890?text=${directWhatsAppText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill"
                  style={{ backgroundColor: '#25D366', color: '#ffffff', border: '1px solid #25D366', padding: '14px 20px' }}
                >
                  <MessageSquare size={16} /> Instant WhatsApp
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
