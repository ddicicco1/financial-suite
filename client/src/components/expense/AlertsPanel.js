import React from 'react';
import '../../styles/components/expense/AlertsPanel.css';

const AlertsPanel = ({ alerts }) => {
  const getAlertIcon = (type) => {
    switch (type) {
      case 'due-date':
        return '⏰';
      case 'cost-spike':
        return '📈';
      case 'cash-danger':
        return '💰';
      default:
        return '⚠️';
    }
  };

  return (
    <div className="alerts-panel">
      {alerts.map((alert, index) => (
        <div key={index} className={`alert-card ${alert.severity}`}>
          <span className="alert-icon">
            {getAlertIcon(alert.type)}
          </span>
          <span className="alert-message">
            {alert.message}
          </span>
          <button className="alert-action">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default AlertsPanel;