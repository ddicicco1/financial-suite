import React, { useState } from 'react';
import '../styles/pages/VendorsPage.css';

const VendorsPage = () => {
  const [vendors, setVendors] = useState([
    { 
      id: 1, 
      name: 'Tech Solutions Inc', 
      email: 'billing@techsolutions.com',
      phone: '(555) 123-4567',
      totalSpent: 15420.50,
      lastInvoice: '2025-04-10',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Office Supplies Co', 
      email: 'accounts@officesupplies.com',
      phone: '(555) 987-6543',
      totalSpent: 8750.25,
      lastInvoice: '2025-04-08',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Marketing Experts LLC', 
      email: 'finance@marketingexp.com',
      phone: '(555) 456-7890',
      totalSpent: 25000.00,
      lastInvoice: '2025-04-05',
      status: 'inactive'
    }
  ]);

  return (
    <div className="page vendors-page">
      <h1>🏢 Vendors</h1>
      
      <div className="page-grid">
        <div className="vendor-management">
          <h2>Vendor Management</h2>
          <button className="add-vendor-btn">+ Add New Vendor</button>
          
          <div className="vendor-cards">
            {vendors.map(vendor => (
              <div key={vendor.id} className="vendor-card">
                <div className="vendor-card-header">
                  <h3>{vendor.name}</h3>
                  <span className={`status ${vendor.status}`}>{vendor.status}</span>
                </div>
                <div className="vendor-card-body">
                  <div className="vendor-info">
                    <div>📧 {vendor.email}</div>
                    <div>📱 {vendor.phone}</div>
                  </div>
                  <div className="vendor-stats">
                    <div className="stat">
                      <span className="label">Total Spent</span>
                      <span className="value">${vendor.totalSpent.toLocaleString()}</span>
                    </div>
                    <div className="stat">
                      <span className="label">Last Invoice</span>
                      <span className="value">{vendor.lastInvoice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="vendor-analytics">
          <h2>Vendor Analytics</h2>
          <div className="analytics-cards">
            <div className="analytics-card">
              <h3>Top Vendors</h3>
              <div className="vendor-chart">
                {/* Placeholder for vendor chart */}
                <div className="chart-placeholder">
                  📊 Vendor Spending Distribution
                </div>
              </div>
            </div>
            <div className="analytics-card">
              <h3>Spending Trends</h3>
              <div className="trend-chart">
                {/* Placeholder for trend chart */}
                <div className="chart-placeholder">
                  📈 Monthly Spending Trends
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorsPage;