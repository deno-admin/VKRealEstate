import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export function Header({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleNav = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrent = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo with Official SVG */}
        <Link 
          to="/"
          onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="brand-logo"
        >
          <Logo height={30} />
        </Link>

        {/* Right Side Navigation & Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 2.5vw, 2rem)' }}>
          {/* Search and About direct URL Links on right */}
          <nav className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <Link 
              to="/search"
              className={`nav-link ${isCurrent('/search') ? 'active' : ''}`}
            >
              Search
            </Link>
            
            <Link 
              to="/about"
              className={`nav-link ${isCurrent('/about') ? 'active' : ''}`}
            >
              About
            </Link>
          </nav>

          {/* Book Consultation button */}
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
            onClick={() => handleNav('/')} 
            style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: isCurrent('/') ? '800' : '600', padding: '12px 0' }}
          >
            Home
          </button>
          <button 
            onClick={() => handleNav('/search')} 
            style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: isCurrent('/search') ? '800' : '600', padding: '12px 0' }}
          >
            Search Properties
          </button>
          <button 
            onClick={() => handleNav('/about')} 
            style={{ textAlign: 'left', fontSize: '1.25rem', fontWeight: isCurrent('/about') ? '800' : '600', padding: '12px 0' }}
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
