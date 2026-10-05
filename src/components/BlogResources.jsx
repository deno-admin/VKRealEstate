import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';

export function BlogResources({ onOpenContact }) {
  return (
    <section id="resources" className="section section-secondary">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 52px auto' }}>
          <div className="section-label" style={{ justifyContent: 'center', marginBottom: '12px' }}>
            <BookOpen size={14} />
            <span>Market Intelligence & Insights</span>
          </div>
          <h2 className="section-title">
            Tamil Nadu Real Estate. <span className="em">Unfiltered Market Intelligence.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '14px auto 0 auto' }}>
            In-depth analysis, legal regulatory updates, and emerging luxury corridors across Chennai, Coimbatore, and the Nilgiris.
          </p>
        </div>

        {/* 3-Column Blog Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="service-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '24px',
                overflow: 'hidden',
                padding: '0',
                backgroundColor: '#ffffff',
                border: '1px solid rgba(0, 0, 0, 0.07)',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => onOpenContact && onOpenContact(`Request Full Report: ${post.title}`)}
            >
              {/* Image with Tag */}
              <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  loading="lazy"
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(26, 26, 26, 0.85)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase'
                }}>
                  {post.tag}
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '0.8125rem',
                  color: '#8e8e93',
                  marginBottom: '12px'
                }}>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  lineHeight: '1.35',
                  color: '#0a0a0a',
                  marginBottom: '12px',
                  letterSpacing: '-0.02em'
                }}>
                  {post.title}
                </h3>

                <p style={{
                  fontSize: '0.9375rem',
                  color: '#555555',
                  lineHeight: '1.55',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  {post.summary}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  marginTop: 'auto'
                }}>
                  <span>Read Full Analysis</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
