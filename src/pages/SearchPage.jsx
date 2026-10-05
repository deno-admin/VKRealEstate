import React, { useState, useMemo } from 'react';
import { Search, MapPin, Bed, Bath, Square, ShieldCheck, Heart, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PROPERTIES, LOCALITIES, PROPERTY_TYPES } from '../data/properties';

export function SearchPage({ onSelectProperty, initialLocality = 'All Tamil Nadu' }) {
  const [selectedLocality, setSelectedLocality] = useState(initialLocality);
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedBHK, setSelectedBHK] = useState('All');
  const [maxPrice, setMaxPrice] = useState(40);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('price-desc');
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const filteredAndSortedProperties = useMemo(() => {
    let result = PROPERTIES.filter(item => {
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
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocality = item.locality.toLowerCase().includes(query);
        const matchesCity = item.city.toLowerCase().includes(query);
        const matchesType = item.type.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocality && !matchesCity && !matchesType) {
          return false;
        }
      }
      return true;
    });

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'sqft-desc') {
      result.sort((a, b) => b.sqft - a.sqft);
    }

    return result;
  }, [selectedLocality, selectedType, selectedBHK, maxPrice, searchQuery, sortBy]);

  return (
    <div className="search-page" style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: '#fafafa' }}>
      {/* Search Page Header */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-light)', padding: '40px 0 30px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', marginBottom: '24px' }}>
            <span className="section-badge">Properties in Tamil Nadu</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', marginBottom: '12px' }}>
              Search Tamil Nadu <span className="em">Luxury Real Estate</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#575757' }}>
              Explore verified beachfront villas, penthouses, gated communities, and hill tea estates.
            </p>
          </div>

          {/* Search Input Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f8f9fa',
            border: '1px solid var(--border-medium)',
            borderRadius: '9999px',
            padding: '10px 20px',
            gap: '12px',
            maxWidth: '850px'
          }}>
            <Search size={20} color="#0a0a0a" />
            <input 
              type="text"
              placeholder="Search by neighborhood, project name, or keyword (e.g. ECR Beachfront, Poes Garden, Nilgiris)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '1rem',
                color: '#0a0a0a'
              }}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ color: '#737373', fontSize: '0.875rem' }}>
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Filter & Results Section */}
      <section className="section" style={{ paddingTop: '32px' }}>
        <div className="container">
          {/* Filter Bar Controls */}
          <div className="filter-bar">
            {/* Locality Chips */}
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

              <select 
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                className="filter-select"
              >
                <option value="All Tamil Nadu">All Locations...</option>
                {LOCALITIES.map(loc => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            {/* Type & BHK & Sort */}
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
                <span style={{ fontSize: '0.8125rem', color: '#737373', whiteSpace: 'nowrap' }}>
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
                  style={{ width: '80px' }}
                />
              </div>

              {/* Sort By */}
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
                style={{ fontWeight: '600' }}
              >
                <option value="price-desc">Price: High to Low</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="sqft-desc">Size: Largest First</option>
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '1rem', color: '#575757' }}>
              Showing <strong>{filteredAndSortedProperties.length}</strong> luxury residences
            </div>

            {(selectedLocality !== 'All Tamil Nadu' || selectedType !== 'All Types' || selectedBHK !== 'All' || maxPrice < 40 || searchQuery) && (
              <button 
                onClick={() => {
                  setSelectedLocality('All Tamil Nadu');
                  setSelectedType('All Types');
                  setSelectedBHK('All');
                  setMaxPrice(40);
                  setSearchQuery('');
                }}
                style={{ fontSize: '0.875rem', color: '#0a0a0a', fontWeight: '600', textDecoration: 'underline' }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Properties Grid */}
          {filteredAndSortedProperties.length > 0 ? (
            <div className="properties-grid">
              {filteredAndSortedProperties.map(property => {
                const isFav = favorites.includes(property.id);
                return (
                  <div 
                    key={property.id} 
                    className="property-card"
                    onClick={() => onSelectProperty(property)}
                  >
                    <div className="property-media">
                      <img src={property.heroImage} alt={property.title} loading="lazy" />
                      
                      <div className="property-badges-top">
                        <span className="badge badge-dark">{property.tag}</span>
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

                    <div className="property-info">
                      <div className="property-price">{property.priceFormatted}</div>
                      <h3 className="property-title">{property.title}</h3>
                      <div className="property-location">
                        <MapPin size={14} />
                        <span>{property.locality}, {property.city}</span>
                      </div>

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
            <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: '#ffffff', borderRadius: '24px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>No matching properties found</h3>
              <p style={{ color: '#737373', marginBottom: '20px' }}>Try broadening your search or resetting the filters.</p>
              <button 
                onClick={() => {
                  setSelectedLocality('All Tamil Nadu');
                  setSelectedType('All Types');
                  setSelectedBHK('All');
                  setMaxPrice(40);
                  setSearchQuery('');
                }}
                className="btn-pill btn-pill-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
