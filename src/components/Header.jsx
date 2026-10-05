import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export function Header({ currentPage, onNavigate, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page) => {
    setMobileMenuOpen(false);
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo with Official SVG */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); handleNav('home'); }}
          className="brand-logo"
        >
          <Logo height={30} />
        </a>

        {/* Right Side Navigation & Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2.5vw, 2rem)' }}>
          {/* Search and About Links moved to right */}
          <nav className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <button 
              onClick={() => handleNav('search')} 
              className={`nav-link ${currentPage === 'search' ? 'active' : ''}`}
            >
              Search
            </button>
            
            <button 
              onClick={() => handleNav('about')} 
              className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
            >
              About
            </button>
          </nav>

          {/* Slightly reduced size for Book Consultation button */}
          <button 
            onClick={() => onOpenContact('General Advisory Consultation')} 
            className="btn-pill btn-pill-primary btn-icon-slide"
            style={{ 
              padding: '10px 20px', 
              fontSize: '0.875rem',
              fontWeight: '600'
            }}
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="btn-pill btn-pill-secondary" 
            style={{ padding: '8px 10px', display: 'none' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            id="mobile-toggle-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '72px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff',
          zIndex: 999,
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          overflowY: 'auto'
        }}>
          <button 
            onClick={() => handleNav('home')} 
            style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: currentPage === 'home' ? '800' : '600', padding: '12px 0' }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('search')} 
            style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: currentPage === 'search' ? '800' : '600', padding: '12px 0' }}
          >
            Search Properties
          </button>
          <button 
            onClick={() => handleNav('about')} 
            style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: currentPage === 'about' ? '800' : '600', padding: '12px 0' }}
          >
            About VK
          </button>
          
          <div style={{ marginTop: 'auto', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact('Consultation Request'); }} 
              className="btn-pill btn-pill-primary" 
              style={{ width: '100%', padding: '12px 20px', fontSize: '0.9rem' }}
            >
              Book Private Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
