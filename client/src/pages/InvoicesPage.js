import React, { useState } from 'react';
import InvoiceUploader from '../components/InvoiceUploader';
import '../styles/pages/InvoicesPage.css';

const InvoicesPage = () => {
  const [invoices, setInvoices] = useState([
    { id: 1, vendor: 'Tech Corp', amount: 1299.99, date: '2025-04-14', status: 'paid' },
    { id: 2, vendor: 'Office Supplies Ltd', amount: 458.50, date: '2025-04-13', status: 'pending' },
    { id: 3, vendor: 'Marketing Agency', amount: 2500.00, date: '2025-04-12', status: 'processing' }
  ]);

  return (
    <div className="page invoices-page">
      <h1>📄 Invoices</h1>
      
      <div className="page-grid">
        <div className="upload-section">
          <InvoiceUploader setInvoices={setInvoices} />
        </div>

        <div className="invoice-list-section">
          <h2>Recent Invoices</h2>
          <div className="invoice-list">
            {invoices.map(invoice => (
              <div key={invoice.id} className="invoice-card">
                <div className="invoice-header">
                  <span className="vendor-name">{invoice.vendor}</span>
                  <span className={`status ${invoice.status}`}>{invoice.status}</span>
                </div>
                <div className="invoice-body">
                  <div className="amount">${invoice.amount.toFixed(2)}</div>
                  <div className="date">{invoice.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="analytics-section">
          <h2>Invoice Analytics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Total Outstanding</div>
              <div className="stat-value">$4,258.49</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Processed This Month</div>
              <div className="stat-value">15</div>
            </div>
            <div className="stat-card">
              <div className="stat-label">Average Processing Time</div>
              <div className="stat-value">2.3 days</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPage;