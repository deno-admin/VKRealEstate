import React, { useState } from 'react';
import { X, Search, MapPin, Building, ChevronRight } from 'lucide-react';
import { PROPERTIES, LOCALITIES, PROPERTY_TYPES } from '../data/properties';

export function SearchModal({ isOpen, onClose, onSelectProperty }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  if (!isOpen) return null;

  const results = PROPERTIES.filter(p => {
    const matchTerm = searchTerm === '' || 
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.locality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.type.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCity = selectedCity === '' || p.city === selectedCity;
    return matchTerm && matchCity;
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-card" 
        style={{ maxWidth: '750px', padding: '32px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close search">
          <X size={20} />
        </button>

        <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.65rem', fontWeight: '700', letterSpacing: '-0.02em', marginBottom: '8px' }}>
          Search Tamil Nadu Properties
        </h3>
        <p style={{ fontSize: '0.9375rem', color: '#8e8e93', marginBottom: '24px' }}>
          Find luxury villas, penthouses, and private estates across Chennai, Coimbatore, and the Nilgiris.
        </p>

        {/* Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: '2px solid #0a0a0a',
          borderRadius: '9999px',
          padding: '12px 20px',
          marginBottom: '24px'
        }}>
          <Search size={20} color="#0a0a0a" />
          <input 
            type="text"
            placeholder="Type locality (e.g. ECR, Poes Garden, Nilgiris, Race Course)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontFamily: 'inherit',
              fontSize: '1rem',
              fontWeight: '500'
            }}
            autoFocus
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ color: '#8e8e93' }}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* City Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
          {['', 'Chennai', 'Coimbatore', 'Nilgiris', 'Madurai'].map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`filter-chip ${selectedCity === city ? 'active' : ''}`}
            >
              {city === '' ? 'All Cities' : city}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {results.length > 0 ? (
            results.map(item => (
              <div 
                key={item.id}
                onClick={() => {
                  onSelectProperty(item);
                  onClose();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px',
                  borderRadius: '16px',
                  border: '1px solid #f0f0f0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
              >
                <img 
                  src={item.heroImage} 
                  alt={item.title} 
                  style={{ width: '80px', height: '60px', borderRadius: '10px', objectFit: 'cover' }} 
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.8125rem', color: '#c5a059', fontWeight: '700' }}>
                    {item.priceFormatted}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: '#0a0a0a' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: '#8e8e93' }}>
                    {item.locality}, {item.city} • {item.bhk} BHK • {item.sqft} sq.ft
                  </div>
                </div>
                <ChevronRight size={18} color="#8e8e93" />
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '30px', color: '#8e8e93' }}>
              No properties matched "{searchTerm}".
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
