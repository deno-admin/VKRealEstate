import React from 'react';

export function VisualNarrative({ onSelectLocality }) {
  const narrativeCards = [
    {
      id: "ecr",
      name: "ECR Oceanfront",
      city: "Chennai",
      tag: "Resort Living",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      localityFilter: "ECR (East Coast Road)"
    },
    {
      id: "poes",
      name: "Poes Garden & Boat Club",
      city: "Chennai",
      tag: "Power & Prestige",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      localityFilter: "Poes Garden"
    },
    {
      id: "cbe",
      name: "Race Course Boulevard",
      city: "Coimbatore",
      tag: "Western TN Elite",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      localityFilter: "Race Course (Coimbatore)"
    },
    {
      id: "nilgiris",
      name: "Nilgiris Tea Retreats",
      city: "Kotagiri & Coonoor",
      tag: "High Altitude",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      localityFilter: "Nilgiris / Coonoor"
    }
  ];

  return (
    <section className="section section-secondary">
      <div className="container">
        {/* Header */}
        <div className="visual-narrative-header">
          <h2 className="visual-narrative-title">
            This isn’t just <span className="em">about real estate.</span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="arrows-grid">
          {narrativeCards.map((card) => (
            <div 
              key={card.id} 
              className="arrow-card"
              onClick={() => {
                onSelectLocality(card.localityFilter);
                const target = document.getElementById('properties');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <img src={card.image} alt={card.name} loading="lazy" />
              <div className="arrow-card-overlay">
                <div className="arrow-card-tag">{card.tag}</div>
                <div className="arrow-card-name">{card.name}</div>
                <div style={{ fontSize: '0.8125rem', opacity: 0.8 }}>{card.city}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="visual-narrative-caption">
          <p>
            It’s about identity. Heritage. Progress. You’re not just looking for a place. <span className="em">You’re looking for alignment. That’s what we help you find across Tamil Nadu.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
