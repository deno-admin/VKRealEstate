import React, { useState, useMemo } from 'react';
import { Heart, Bed, Bath, Square, ShieldCheck, MapPin, ArrowUpRight, SlidersHorizontal, Check } from 'lucide-react';
import { PROPERTIES, LOCALITIES, PROPERTY_TYPES } from '../data/properties';

export function PropertySearch({ onSelectProperty, selectedLocalityFilter, onClearFilter }) {
  const [selectedLocality, setSelectedLocality] = useState(selectedLocalityFilter || 'All Tamil Nadu');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBHK, setSelectedBHK] = useState('All');
  const [maxPrice, setMaxPrice] = useState(40); // in Crores
  const [onlyRera, setOnlyRera] = useState(false);
  const [favorites, setFavorites] = useState([]);

  // Sync prop changes if selected from outside
  React.useEffect(() => {
    if (selectedLocalityFilter) {
      setSelectedLocality(selectedLocalityFilter);
    }
  }, [selectedLocalityFilter]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter(item => {
      if (selectedLocality !== 'All Tamil Nadu' && item.locality !== selectedLocality) {
        return false;
      }
      if (selectedType !== 'All Types' && item.type !== selectedType) {
        return false;
      }
      if (selectedBHK !== 'All') {
        if (selectedBHK === '5+' && item.bhk < 5) return false;
        if (selectedBHK !== '5+' && item.bhk !== parseInt(selectedBHK)) return false;
      }
      if (item.price > maxPrice) {
        return false;
      }
      if (onlyRera && !item.reraId) {
        return false;
      }
      return true;
    });
  }, [selectedLocality, selectedType, selectedBHK, maxPrice, onlyRera]);

  return (
    <section id="properties" className="section">
      <div className="container">
        {/* Header */}
        <div className="properties-header">
          <div>
            <span className="section-badge">Curated Tamil Nadu Portfolio</span>
            <h2 className="section-title">
              Signature Estates & <span className="em">Penthouses</span>
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.9375rem', color: '#8e8e93' }}>
              Showing <strong>{filteredProperties.length}</strong> verified properties
            </span>
          </div>
        </div>

        {/* Filter Bar Controls */}
        <div className="filter-bar">
          {/* Locality Quick Chips */}
          <div className="filter-group">
            {LOCALITIES.slice(0, 5).map(loc => (
              <button 
                key={loc}
                className={`filter-chip ${selectedLocality === loc ? 'active' : ''}`}
                onClick={() => setSelectedLocality(loc)}
              >
                {loc}
              </button>
            ))}

            {/* Dropdown for other localities */}
            <select 
              value={selectedLocality}
              onChange={(e) => setSelectedLocality(e.target.value)}
              className="filter-select"
            >
              <option value="All Tamil Nadu">More Localities...</option>
              {LOCALITIES.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          {/* Property Type Dropdown */}
          <div className="filter-group">
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              {PROPERTY_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {/* BHK Tabs */}
            <div style={{ display: 'inline-flex', border: '1px solid #e5e5e7', borderRadius: '9999px', overflow: 'hidden' }}>
              {['All', '3', '4', '5+'].map(bhk => (
                <button
                  key={bhk}
                  onClick={() => setSelectedBHK(bhk)}
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    background: selectedBHK === bhk ? '#0a0a0a' : '#ffffff',
                    color: selectedBHK === bhk ? '#ffffff' : '#575757',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {bhk === 'All' ? 'All BHK' : `${bhk} BHK`}
                </button>
              ))}
            </div>

            {/* Price Max Slider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '160px' }}>
              <span style={{ fontSize: '0.8125rem', color: '#8e8e93', whiteSpace: 'nowrap' }}>
                Max: <strong>₹{maxPrice} Cr</strong>
              </span>
              <input 
                type="range" 
                min="3" 
                max="40" 
                step="1"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(parseFloat(e.target.value))}
                className="calc-slider"
                style={{ width: '90px' }}
              />
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="properties-grid">
            {filteredProperties.map(property => {
              const isFav = favorites.includes(property.id);
              return (
                <div 
                  key={property.id} 
                  className="property-card"
                  onClick={() => onSelectProperty(property)}
                >
                  {/* Property Image & Badges */}
                  <div className="property-media">
                    <img src={property.heroImage} alt={property.title} loading="lazy" />
                    
                    <div className="property-badges-top">
                      <span className="badge badge-dark">
                        {property.tag}
                      </span>
                      <span className="badge badge-rera">
                        <ShieldCheck size={12} /> TNRERA
                      </span>
                    </div>

                    <button 
                      className={`property-fav-btn ${isFav ? 'favorited' : ''}`}
                      onClick={(e) => toggleFavorite(property.id, e)}
                      aria-label="Save Property"
                    >
                      <Heart size={18} fill={isFav ? '#ef4444' : 'none'} />
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
                        <Bed size={16} />
                        <span>{property.bhk} Beds</span>
                      </div>
                      <div className="spec-item">
                        <Bath size={16} />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="spec-item">
                        <Square size={16} />
                        <span>{property.sqft} sq.ft</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#f8f9fa', borderRadius: '24px' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '12px' }}>No properties found matching your current filters.</p>
            <button 
              onClick={() => {
                setSelectedLocality('All Tamil Nadu');
                setSelectedType('All Types');
                setSelectedBHK('All');
                setMaxPrice(40);
              }}
              className="btn-pill btn-pill-primary"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
