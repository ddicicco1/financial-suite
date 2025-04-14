import React, { useState, useEffect } from 'react';
import InvoiceUploader from './InvoiceUploader';
import VendorList from './VendorList';
import '../styles/Dashboard.css';

// Demo invoice data to pre-populate the dashboard
const demoInvoices = [
  { id: 1, vendor: 'Vendor A', amount: 150.75, date: '2023-10-01' },
  { id: 2, vendor: 'Vendor B', amount: 230.00, date: '2023-10-02' },
  { id: 3, vendor: 'Vendor C', amount: 99.99, date: '2023-10-03' },
];

const Dashboard = () => {
  const [vendors, setVendors] = useState([]);
  const [invoices, setInvoices] = useState(demoInvoices);

  useEffect(() => {
    fetch('/api/vendors')
      .then((response) => response.json())
      .then(setVendors)
      .catch(err => console.error("Failed to load vendors:", err));
  }, []);

  return (
    <div className="dashboard">
      <h2>Expense Dashboard</h2>
      
      <div className="grid-layout">
        <div className="invoice-section">
          <InvoiceUploader setInvoices={setInvoices} />
        </div>

        <div className="invoice-section">
          <h3>Recent Invoices</h3>
          <ul>
            {invoices.map(inv => (
              <li key={inv.id}>
                <span>{inv.date} - {inv.vendor}</span>
                <span className="amount">${inv.amount.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="invoice-section">
          <VendorList vendors={vendors} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;