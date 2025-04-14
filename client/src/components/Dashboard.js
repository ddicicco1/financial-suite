import React, { useState } from 'react';
import InvoiceUploader from './InvoiceUploader';
import VendorList from './VendorList';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Demo data
  const [vendors] = useState([
    {
      id: '1',
      name: 'Tech Solutions Inc.',
      lastUpdated: '2025-04-14T10:30:00Z',
      status: 'active'
    },
    {
      id: '2',
      name: 'Office Supplies Co.',
      lastUpdated: '2025-04-13T15:45:00Z',
      status: 'active'
    },
    {
      id: '3',
      name: 'Digital Services LLC',
      lastUpdated: '2025-04-12T09:20:00Z',
      status: 'pending'
    }
  ]);

  const [recentInvoices] = useState([
    {
      id: '1',
      vendor: 'Tech Solutions Inc.',
      amount: '$1,234.56',
      date: '2025-04-14',
      status: 'processed'
    },
    {
      id: '2',
      vendor: 'Office Supplies Co.',
      amount: '$567.89',
      date: '2025-04-13',
      status: 'pending'
    }
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>
            <span role="img" aria-label="upload">📤</span> Upload Invoice
          </h2>
          <InvoiceUploader />
        </div>
        
        <div className="dashboard-card">
          <h2>
            <span role="img" aria-label="recent">🕒</span> Recent Invoices
          </h2>
          <div className="invoice-list">
            {recentInvoices.map(invoice => (
              <div key={invoice.id} className="invoice-item">
                <div className="invoice-header">
                  <span className="vendor-name">{invoice.vendor}</span>
                  <span className={`status ${invoice.status}`}>{invoice.status}</span>
                </div>
                <div className="invoice-details">
                  <span className="amount">{invoice.amount}</span>
                  <span className="date">{invoice.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-card">
          <h2>
            <span role="img" aria-label="vendors">🏢</span> Active Vendors
          </h2>
          <VendorList vendors={vendors} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;