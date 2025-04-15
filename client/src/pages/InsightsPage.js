import React from 'react';
import '../styles/pages/InsightsPage.css';

const InsightsPage = () => {
  const insights = {
    spending: {
      total: 45250.75,
      change: 12.5,
      breakdown: [
        { category: 'Technology', amount: 15420.50 },
        { category: 'Office Supplies', amount: 8750.25 },
        { category: 'Marketing', amount: 21080.00 }
      ]
    },
    trends: {
      monthlyData: [
        { month: 'Jan', amount: 38000 },
        { month: 'Feb', amount: 42000 },
        { month: 'Mar', amount: 45250 }
      ]
    }
  };

  return (
    <div className="page insights-page">
      <h1>📊 Insights</h1>
      
      <div className="page-grid">
        <div className="overview-section">
          <h2>Financial Overview</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <h3>Total Spending</h3>
              <div className="metric-value">${insights.spending.total.toLocaleString()}</div>
              <div className="metric-change positive">↑ {insights.spending.change}%</div>
            </div>
            <div className="metric-card">
              <h3>Active Vendors</h3>
              <div className="metric-value">12</div>
              <div className="metric-change">Last 30 days</div>
            </div>
            <div className="metric-card">
              <h3>Pending Invoices</h3>
              <div className="metric-value">5</div>
              <div className="metric-change">$12,450 total</div>
            </div>
          </div>
        </div>

        <div className="trends-section">
          <h2>Spending Trends</h2>
          <div className="trend-chart">
            {/* Placeholder for trend chart */}
            <div className="chart-placeholder">
              📈 Monthly Spending Trends
              <div className="chart-data">
                {insights.trends.monthlyData.map(data => (
                  <div key={data.month} className="chart-bar">
                    <div className="bar-label">{data.month}</div>
                    <div 
                      className="bar" 
                      style={{ height: `${(data.amount / 50000) * 100}%` }}
                    ></div>
                    <div className="bar-value">${(data.amount / 1000).toFixed(1)}k</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="category-section">
          <h2>Spending by Category</h2>
          <div className="category-chart">
            {/* Placeholder for category chart */}
            <div className="chart-placeholder">
              🎯 Category Distribution
              <div className="category-list">
                {insights.spending.breakdown.map(category => (
                  <div key={category.category} className="category-item">
                    <div className="category-name">{category.category}</div>
                    <div className="category-amount">
                      ${category.amount.toLocaleString()}
                    </div>
                    <div className="category-bar">
                      <div 
                        className="bar-fill"
                        style={{ 
                          width: `${(category.amount / insights.spending.total) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;