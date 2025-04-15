import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LeftNav from './LeftNav';
import TopInfo from './TopInfo';
import DashboardPage from '../pages/DashboardPage';
import InvoicesPage from '../pages/InvoicesPage';
import VendorsPage from '../pages/VendorsPage';
import InsightsPage from '../pages/InsightsPage';
import SettingsPage from '../pages/SettingsPage';
import BillPayPage from '../pages/BillPayPage';
import AiChat from './AiChat';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <Router>
      <div className="app-container">
        <LeftNav />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TopInfo />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/invoices" element={<InvoicesPage />} />
              <Route path="/vendors" element={<VendorsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/bill-pay" element={<BillPayPage />} />
            </Routes>
          </main>
        </div>
        <AiChat />
      </div>
    </Router>
  );
};

export default Layout;