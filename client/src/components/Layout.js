import React, { useState } from 'react';
import '../styles/Layout.css';
import Dashboard from './Dashboard';

const Layout = ({ children }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', icon: '📊', label: 'Dashboard' },
    { id: 'invoices', icon: '📄', label: 'Invoices' },
    { id: 'vendors', icon: '🏢', label: 'Vendors' },
    { id: 'analytics', icon: '📈', label: 'Analytics' },
    { id: 'settings', icon: '⚙️', label: 'Settings' }
  ];

  return (
    <div className="layout">
      <nav className="sidebar">
        <div className="logo">
          <span role="img" aria-label="finance">💰</span>
          <span>FinSuite</span>
        </div>
        <ul className="nav-items">
          {menuItems.map(item => (
            <li
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon" role="img" aria-label={item.label}>
                {item.icon}
              </span>
              <span className="nav-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        {children}
        <Dashboard />
      </main>
    </div>
  );
};

export default Layout;