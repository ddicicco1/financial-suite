import React from 'react';
import Layout from './components/Layout';
import './styles/App.css';

function App() {
  return (
    <Layout>
      <div className="app-container">
        <div className="info-box">
          <span role="img" aria-label="rocket">🚀</span> Welcome to Financial Suite MVP
          <span role="img" aria-label="lightning">⚡</span> Process invoices instantly
          <span role="img" aria-label="chart">📈</span> Track vendor data
        </div>
      </div>
    </Layout>
  );
}

export default App;