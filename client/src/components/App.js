import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="left-nav">
        <ul>
          <li>📊 Dashboard</li>
          <li>📄 Invoices</li>
          <li>🏢 Vendors</li>
          <li>📈 Analytics</li>
          <li>⚙️ Settings</li>
        </ul>
      </nav>
      
      <div className="content-wrapper">
        <div className="top-info">
          🚀 Welcome to Financial Suite MVP | ⚡ Process invoices instantly | 📈 Track vendor data
        </div>
        
        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;