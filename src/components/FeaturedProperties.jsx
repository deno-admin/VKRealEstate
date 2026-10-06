import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bed, Bath, Square, ShieldCheck, Heart, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROPERTIES } from '../data/properties';

export function FeaturedProperties({ onSelectProperty }) {
  const [favorites, setFavorites] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const trackRef = useRef(null);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const updateScrollButtons = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      updateScrollButtons();
      return () => {
        track.removeEventListener('scroll', updateScrollButtons);
        window.removeEventListener('resize', updateScrollButtons);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 408; // card width (380) + gap (28)
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="featured-properties" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-badge">Curated Tamil Nadu Portfolio</span>
            <h2 className="section-title">
              Signature Estates & <span className="em">Penthouses</span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons + Direct Search Link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="btn-pill btn-pill-secondary"
                style={{
                  width: '44px',
                  height: '44px',
                  padding: 0,
                  borderRadius: '50%',
                  opacity: canScrollLeft ? 1 : 0.4,
                  cursor: canScrollLeft ? 'pointer' : 'not-allowed'
                }}
                aria-label="Previous Properties"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="btn-pill btn-pill-secondary"
                style={{
                  width: '44px',
                  height: '44px',
                  padding: 0,
                  borderRadius: '50%',
                  opacity: canScrollRight ? 1 : 0.4,
                  cursor: canScrollRight ? 'pointer' : 'not-allowed'
                }}
                aria-label="Next Properties"
              >
                <ChevronRight size={20} />
              </button>
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
        </div>

        {/* Horizontal Properties Carousel */}
        <div 
          ref={trackRef}
          className="properties-carousel-track"
        >
          {PROPERTIES.map(property => {
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
      </div>
    </section>
  );
}
