import React, { useState } from 'react';
import LocationSelector from './expense/LocationSelector';
import ExpenseDashboard from './expense/ExpenseDashboard';
import InvoiceCapture from './expense/InvoiceCapture';
import BulkBillPay from './expense/BulkBillPay';
import AlertsPanel from './expense/AlertsPanel';
import '../styles/pages/ExpenseManagementPage.css';

const ExpenseManagementPage = () => {
  const [selectedLocations, setSelectedLocations] = useState(['all']);
  const [dateRange, setDateRange] = useState('thisMonth');

  // Demo data
  const dashboardData = {
    outstandingAP: 45250.75,
    primeCost: {
      cogs: 28500.50,
      labor: 32750.25
    },
    topVendors: [
      { name: 'Sysco', amount: 15420.50, invoiceCount: 12 },
      { name: 'US Foods', amount: 12350.75, invoiceCount: 8 },
      { name: 'PFG', amount: 8750.25, invoiceCount: 6 }
    ],
    alerts: [
      { type: 'due-date', message: '5 invoices due in next 48 hours', severity: 'high' },
      { type: 'cost-spike', message: 'Unusual increase in food costs', severity: 'medium' },
      { type: 'cash-danger', message: 'Projected negative balance in 5 days', severity: 'high' }
    ]
  };

  return (
    <div className="page expense-management-page">
      <header className="page-header">
        <h1>📊 Expense & Cost Management</h1>
        <div className="header-controls">
          <LocationSelector 
            selectedLocations={selectedLocations}
            onChange={setSelectedLocations}
          />
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="date-range-selector"
          >
            <option value="today">Today</option>
            <option value="thisWeek">This Week</option>
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </header>

      <div className="alerts-section">
        <AlertsPanel alerts={dashboardData.alerts} />
      </div>

      <div className="expense-grid">
        <div className="main-section">
          <ExpenseDashboard data={dashboardData} />
        </div>

        <div className="side-section">
          <InvoiceCapture />
          <BulkBillPay />
        </div>
      </div>
    </div>
  );
};

export default ExpenseManagementPage;