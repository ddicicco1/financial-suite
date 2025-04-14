import React from 'react';
import InvoiceUploader from './InvoiceUploader';
import VendorList from './VendorList';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="dashboard-item">
          <InvoiceUploader />
        </div>
        <div className="dashboard-item">
          <VendorList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;