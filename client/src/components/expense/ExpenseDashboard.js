import React from 'react';
import '../../styles/components/expense/ExpenseDashboard.css';

const ExpenseDashboard = ({ data }) => {
  const { outstandingAP, primeCost, topVendors } = data;

  return (
    <div className="expense-dashboard">
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Outstanding AP</h3>
          <div className="metric-value">${outstandingAP.toLocaleString()}</div>
          <div className="metric-trend positive">↓ 8.5% vs. last month</div>
        </div>

        <div className="metric-card">
          <h3>Prime Cost</h3>
          <div className="metric-value">
            ${(primeCost.cogs + primeCost.labor).toLocaleString()}
          </div>
          <div className="metric-breakdown">
            <div>COGS: ${primeCost.cogs.toLocaleString()}</div>
            <div>Labor: ${primeCost.labor.toLocaleString()}</div>
          </div>
        </div>

        <div className="metric-card">
          <h3>COGS %</h3>
          <div className="metric-value">32.5%</div>
          <div className="metric-trend negative">↑ 2.1% vs. target</div>
        </div>
      </div>

      <div className="vendors-section">
        <h3>Top Vendors</h3>
        <div className="vendors-grid">
          {topVendors.map((vendor, index) => (
            <div key={index} className="vendor-card">
              <div className="vendor-header">
                <h4>{vendor.name}</h4>
                <span className="invoice-count">{vendor.invoiceCount} invoices</span>
              </div>
              <div className="vendor-amount">
                ${vendor.amount.toLocaleString()}
              </div>
              <div className="vendor-chart">
                {/* Placeholder for vendor spending chart */}
                <div className="chart-bar" style={{ width: `${(vendor.amount / 20000) * 100}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="expense-charts">
        <div className="chart-card">
          <h3>Expense Trends</h3>
          <div className="chart-container">
            {/* Placeholder for expense trend chart */}
            <div className="chart-placeholder">
              📈 Monthly expense trends visualization
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Category Breakdown</h3>
          <div className="chart-container">
            {/* Placeholder for category breakdown chart */}
            <div className="chart-placeholder">
              🎯 Expense category distribution
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDashboard;