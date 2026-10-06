import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bed, Bath, Square, ShieldCheck, Heart, MapPin } from 'lucide-react';
import { PROPERTIES } from '../data/properties';

export function FeaturedProperties({ onSelectProperty }) {
  const [favorites, setFavorites] = useState([]);
  // Select 6 prime showcase properties for Home Page
  const featured = PROPERTIES.slice(0, 6);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return (
    <section id="featured-properties" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-badge">Curated Tamil Nadu Portfolio</span>
            <h2 className="section-title">
              Signature Estates & <span className="em">Penthouses</span>
            </h2>
          </div>

          <Link 
            to="/search" 
            className="btn-pill btn-pill-primary btn-icon-slide"
            style={{ padding: '12px 24px', fontSize: '0.9rem' }}
          >
            <span>Search All Properties</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* 3-Column Luxury Property Grid */}
        <div className="properties-grid">
          {featured.map(property => {
            const isFav = favorites.includes(property.id);
            return (
              <div 
                key={property.id} 
                className="property-card"
                onClick={() => onSelectProperty(property)}
              >
                {/* Property Media */}
                <div className="property-media">
                  <img src={property.heroImage} alt={property.title} loading="lazy" />
                  
                  <div className="property-badges-top">
                    {property.tag && (
                      <span className="badge badge-dark">{property.tag}</span>
                    )}
                    {property.reraId && (
                      <span className="badge badge-rera">
                        <ShieldCheck size={12} />
                        TNRERA
                      </span>
                    )}
                  </div>

                  <button 
                    className={`property-fav-btn ${isFav ? 'favorited' : ''}`}
                    onClick={(e) => toggleFavorite(property.id, e)}
                    aria-label="Save Property"
                  >
                    <Heart size={16} fill={isFav ? '#ef4444' : 'none'} color={isFav ? '#ef4444' : 'currentColor'} />
                  </button>
                </div>

                {/* Property Info */}
                <div className="property-info">
                  <div className="property-price">{property.priceFormatted}</div>
                  <h3 className="property-title">{property.title}</h3>
                  <div className="property-location">
                    <MapPin size={14} />
                    <span>{property.locality}, {property.city}</span>
                  </div>

                  {/* Specs Row */}
                  <div className="property-specs">
                    <div className="spec-item">
                      <Bed size={15} />
                      <span>{property.bhk} Beds</span>
                    </div>
                    <div className="spec-item">
                      <Bath size={15} />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="spec-item">
                      <Square size={15} />
                      <span>{property.sqft.toLocaleString()} sq.ft</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout to Full Search Page */}
        <div style={{
          marginTop: '56px',
          textAlign: 'center',
          padding: '40px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '24px',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>
            Looking for something specific across Tamil Nadu?
          </h3>
          <p style={{ color: '#555555', maxWidth: '600px', margin: '0 auto 24px auto', fontSize: '0.95rem' }}>
            Explore verified coastal plots, beachfront villas, central Chennai penthouses, and Nilgiris tea estates on our dedicated search portal.
          </p>
          <Link 
            to="/search" 
            className="btn-pill btn-pill-primary btn-icon-slide"
            style={{ padding: '14px 32px' }}
          >
            <span>Open Property Search Engine</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
