import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, CheckCircle, Key } from 'lucide-react';

export function RewiredProcess() {
  const steps = [
    {
      num: "01",
      icon: MessageSquare,
      title: "Talk to a Real Human.",
      desc: "We match you with a certified Tamil Nadu area specialist who understands your specific lifestyle and investment ambitions."
    },
    {
      num: "02",
      icon: CheckCircle,
      title: "Get Absolute Clarity.",
      desc: "We perform rigorous 30-year title searches, verify TNRERA compliance, and establish true guideline valuation before you negotiate."
    },
    {
      num: "03",
      icon: Key,
      title: "Move Forward with Confidence.",
      desc: "From private token negotiations to Sub-Registrar digital registration and turnkey NRI handover — we make it effortless."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="rewired-grid">
          {/* Left Column */}
          <div className="reveal-up">
            <h2 className="rewired-title">
              Real Estate, <span className="em">Rewired.</span>
            </h2>

            <Link 
              to="/search"
              className="btn-pill btn-pill-primary btn-icon-slide"
              style={{ padding: '16px 36px', fontSize: '1rem', display: 'inline-flex' }}
            >
              <span>Start Your Search</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Column Steps */}
          <div className="rewired-steps">
            <div className="reveal-up" style={{ fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#737373', marginBottom: '8px' }}>
              The VK 3-Step Protocol:
            </div>

            {steps.map((step, index) => (
              <div 
                key={step.num} 
                className="step-card reveal-up"
                style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
