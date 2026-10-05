import React, { useState } from 'react';
import { Calculator, Percent, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

export function FinancialTools({ onOpenContact }) {
  // Tab switch
  const [activeTab, setActiveTab] = useState('stampDuty');

  // Stamp Duty state (Property Value in Crores)
  const [propertyVal, setPropertyVal] = useState(5.0);

  // EMI state
  const [loanAmount, setLoanAmount] = useState(4.0); // Crores
  const [interestRate, setInterestRate] = useState(8.5); // % p.a.
  const [tenureYears, setTenureYears] = useState(20);

  // Calculation for TN Stamp Duty
  const stampDutyRate = 0.07; // 7%
  const registrationRate = 0.04; // 4%
  const calculatedStampDuty = propertyVal * stampDutyRate;
  const calculatedRegistration = propertyVal * registrationRate;
  const totalGovtOutlay = calculatedStampDuty + calculatedRegistration;

  // Calculation for EMI
  const principalINR = loanAmount * 10000000;
  const r = (interestRate / 100) / 12;
  const n = tenureYears * 12;
  const emiMonthly = Math.round(
    (principalINR * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  );
  const totalRepayment = emiMonthly * n;
  const totalInterest = totalRepayment - principalINR;

  return (
    <section id="calculators" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <span className="section-badge">Financial Intelligence</span>
          <h2 className="section-title">
            Tamil Nadu Property <span className="em">& Tax Calculators</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#575757', marginTop: '12px' }}>
            Instant transparent estimation of government registration charges and monthly bank financing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'inline-flex', padding: '6px', backgroundColor: '#f5f5f7', borderRadius: '9999px', marginBottom: '32px' }}>
          <button 
            onClick={() => setActiveTab('stampDuty')}
            className={`btn-pill ${activeTab === 'stampDuty' ? 'btn-pill-primary' : ''}`}
            style={{ padding: '10px 24px', fontSize: '0.9375rem' }}
          >
            TN Stamp Duty & Registration
          </button>
          <button 
            onClick={() => setActiveTab('emi')}
            className={`btn-pill ${activeTab === 'emi' ? 'btn-pill-primary' : ''}`}
            style={{ padding: '10px 24px', fontSize: '0.9375rem' }}
          >
            Home Loan & EMI Estimator
          </button>
        </div>

        {/* Main Calculator Card */}
        <div className="calculator-card">
          {activeTab === 'stampDuty' ? (
            <div className="calc-grid">
              {/* Left Controls */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px' }}>
                  Tamil Nadu Sub-Registrar Fee Breakdown
                </h3>
                <p style={{ fontSize: '0.9375rem', color: '#8e8e93', marginBottom: '32px' }}>
                  In Tamil Nadu, residential property conveyance deeds attract <strong>7% Stamp Duty</strong> and <strong>4% Registration Fee</strong> based on higher of market value or Government Guideline Value.
                </p>

                {/* Slider */}
                <div className="calc-control">
                  <div className="calc-label-row">
                    <span>Agreed Property Value</span>
                    <strong style={{ fontSize: '1.25rem', color: '#0a0a0a' }}>₹{propertyVal.toFixed(2)} Crores</strong>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="40.0" 
                    step="0.25"
                    value={propertyVal}
                    onChange={(e) => setPropertyVal(parseFloat(e.target.value))}
                    className="calc-slider"
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#8e8e93', marginTop: '6px' }}>
                    <span>₹50 Lakhs</span>
                    <span>₹20 Cr</span>
                    <span>₹40 Cr</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#575757' }}>
                    <CheckCircle2 size={16} color="#059669" /> Applicable for CMDA & DTCP registered deeds
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#575757' }}>
                    <CheckCircle2 size={16} color="#059669" /> Transparent Sub-Registrar online e-challan filing
                  </div>
                </div>
              </div>

              {/* Right Result Box */}
              <div className="calc-result-box">
                <div>
                  <span style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c5a059', fontWeight: '700' }}>
                    Govt. Fee Summary
                  </span>
                  <div style={{ fontSize: '2.25rem', fontWeight: '700', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', margin: '8px 0 24px 0' }}>
                    ₹{totalGovtOutlay.toFixed(2)} Cr
                  </div>

                  <div className="calc-result-item">
                    <span>Stamp Duty (7%)</span>
                    <strong>₹{calculatedStampDuty.toFixed(2)} Cr</strong>
                  </div>
                  <div className="calc-result-item">
                    <span>Registration Charges (4%)</span>
                    <strong>₹{calculatedRegistration.toFixed(2)} Cr</strong>
                  </div>
                  <div className="calc-result-item">
                    <span>Sub-Registrar Doc Fee</span>
                    <strong>₹2,500 Approx</strong>
                  </div>
                  <div className="calc-result-item total">
                    <span>Total Estimated Investment</span>
                    <strong style={{ color: '#c5a059' }}>₹{(propertyVal + totalGovtOutlay).toFixed(2)} Cr</strong>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenContact(`Guideline Valuation Advisory for ₹${propertyVal} Cr`)}
                  className="btn-pill btn-pill-inversed"
                  style={{ marginTop: '24px', width: '100%' }}
                >
                  Request Legal Title Search
                </button>
              </div>
            </div>
          ) : (
            <div className="calc-grid">
              {/* Left Controls */}
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '8px' }}>
                  Luxury Home Loan EMI Estimator
                </h3>
                <p style={{ fontSize: '0.9375rem', color: '#8e8e93', marginBottom: '28px' }}>
                  Partnered with premier private banking desks (HDFC, ICICI, SBI) with preferential lending rates.
                </p>

                {/* Loan Amount Slider */}
                <div className="calc-control">
                  <div className="calc-label-row">
                    <span>Loan Amount Required</span>
                    <strong style={{ fontSize: '1.2rem' }}>₹{loanAmount.toFixed(2)} Crores</strong>
                  </div>
                  <input 
                    type="range" 
                    min="0.5" 
                    max="30.0" 
                    step="0.25"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                    className="calc-slider"
                  />
                </div>

                {/* Interest Rate Slider */}
                <div className="calc-control">
                  <div className="calc-label-row">
                    <span>Annual Interest Rate</span>
                    <strong style={{ fontSize: '1.2rem' }}>{interestRate.toFixed(2)}%</strong>
                  </div>
                  <input 
                    type="range" 
                    min="7.5" 
                    max="12.0" 
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    className="calc-slider"
                  />
                </div>

                {/* Tenure Slider */}
                <div className="calc-control">
                  <div className="calc-label-row">
                    <span>Tenure Duration</span>
                    <strong style={{ fontSize: '1.2rem' }}>{tenureYears} Years</strong>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(parseInt(e.target.value))}
                    className="calc-slider"
                  />
                </div>
              </div>

              {/* Right Result Box */}
              <div className="calc-result-box">
                <div>
                  <span style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#c5a059', fontWeight: '700' }}>
                    Monthly Outlay (EMI)
                  </span>
                  <div style={{ fontSize: '2.25rem', fontWeight: '700', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em', margin: '8px 0 24px 0' }}>
                    ₹{(emiMonthly / 100000).toFixed(2)} Lakhs
                  </div>

                  <div className="calc-result-item">
                    <span>Principal Amount</span>
                    <strong>₹{loanAmount.toFixed(2)} Cr</strong>
                  </div>
                  <div className="calc-result-item">
                    <span>Total Interest Paid</span>
                    <strong>₹{(totalInterest / 10000000).toFixed(2)} Cr</strong>
                  </div>
                  <div className="calc-result-item total">
                    <span>Total Amount Payable</span>
                    <strong style={{ color: '#c5a059' }}>₹{(totalRepayment / 10000000).toFixed(2)} Cr</strong>
                  </div>
                </div>

                <button 
                  onClick={() => onOpenContact(`Bank Loan Syndication for ₹${loanAmount} Cr`)}
                  className="btn-pill btn-pill-inversed"
                  style={{ marginTop: '24px', width: '100%' }}
                >
                  Get Pre-Approved Loan Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
