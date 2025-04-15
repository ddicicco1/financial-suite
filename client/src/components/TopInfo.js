import React from 'react';
import '../styles/components/TopInfo.css';

const TopInfo = () => {
  return (
    <div className="top-info-container">
      <div className="brand-header">
        <h1>
          <span className="square-logo">■</span> 
          Square Financial Suite
        </h1>
        <div className="version-badge">MVP</div>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <span className="feature-icon">🤖</span>
          <div className="feature-text">
            <h3>AI-Powered OCR</h3>
            <p>Instant invoice processing & data extraction</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">💳</span>
          <div className="feature-text">
            <h3>Smart Payments</h3>
            <p>Automated bill pay & payment scheduling</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">📊</span>
          <div className="feature-text">
            <h3>Real-Time Analytics</h3>
            <p>Spending insights & vendor analysis</p>
          </div>
        </div>

        <div className="feature-item">
          <span className="feature-icon">🔄</span>
          <div className="feature-text">
            <h3>QuickBooks Sync</h3>
            <p>Seamless accounting integration</p>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <button className="action-button">
          <span>📥</span> Upload Invoice
        </button>
        <button className="action-button">
          <span>💵</span> Pay Bills
        </button>
        <button className="action-button">
          <span>📋</span> View Reports
        </button>
        <div className="ai-assistant-pill">
          <span>🤖</span> AI Assistant Available
        </div>
      </div>
    </div>
  );
};

export default TopInfo;