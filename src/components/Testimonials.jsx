import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px auto' }}>
          <h2 className="section-title">
            Don’t Take <span className="em">Our Word for It.</span>
          </h2>
        </div>

        {/* 2-Column Split matching FIND style */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
          {/* Left: Interactive Quote Box */}
          <div className="testimonial-box">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#c5a059" color="#c5a059" />
              ))}
            </div>

            <p className="testimonial-quote">
              "{current.quote}"
            </p>

            <div className="testimonial-author">
              <img src={current.avatar} alt={current.author} className="author-avatar" />
              <div>
                <div className="author-name">{current.author}</div>
                <div className="author-role">{current.role}</div>
                <div style={{ fontSize: '0.75rem', color: '#c5a059', fontWeight: '600', marginTop: '2px' }}>
                  {current.location}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '32px' }}>
              <button 
                onClick={prevTestimonial}
                className="btn-pill btn-pill-secondary"
                style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="btn-pill btn-pill-primary"
                style={{ width: '42px', height: '42px', padding: 0, borderRadius: '50%' }}
                aria-label="Next Testimonial"
              >
                <ChevronRight size={18} />
              </button>
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: '12px', fontSize: '0.875rem', color: '#8e8e93' }}>
                {currentIndex + 1} / {TESTIMONIALS.length}
              </div>
            </div>
          </div>

          {/* Right: Architectural Photo Showcase */}
          <div style={{ borderRadius: '24px', overflow: 'hidden', height: '420px', boxShadow: 'var(--shadow-md)' }}>
            <img 
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80" 
              alt="Satisfied Clients in Tamil Nadu" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
