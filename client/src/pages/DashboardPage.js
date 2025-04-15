import React from 'react';
import Dashboard from '../components/Dashboard';
import '../styles/pages/DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="page dashboard-page">
      <h1>📊 Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;