import React, { useState } from 'react';
import '../../styles/components/expense/BulkBillPay.css';

const BulkBillPay = () => {
  const [selectedInvoices, setSelectedInvoices] = useState(new Set());
  
  // Demo data
  const unpaidInvoices = [
    {
      id: 1,
      vendor: 'Sysco',
      amount: 1234.56,
      dueDate: '2025-04-20',
      status: 'due-soon'
    },
    {
      id: 2,
      vendor: 'US Foods',
      amount: 987.65,
      dueDate: '2025-04-22',
      status: 'upcoming'
    },
    {
      id: 3,
      vendor: 'PFG',
      amount: 543.21,
      dueDate: '2025-04-18',
      status: 'overdue'
    }
  ];

  const handleSelectInvoice = (invoiceId) => {
    const newSelection = new Set(selectedInvoices);
    if (newSelection.has(invoiceId)) {
      newSelection.delete(invoiceId);
    } else {
      newSelection.add(invoiceId);
    }
    setSelectedInvoices(newSelection);
  };

  const handleSelectAll = () => {
    if (selectedInvoices.size === unpaidInvoices.length) {
      setSelectedInvoices(new Set());
    } else {
      setSelectedInvoices(new Set(unpaidInvoices.map(inv => inv.id)));
    }
  };

  const getTotalSelected = () => {
    return unpaidInvoices
      .filter(inv => selectedInvoices.has(inv.id))
      .reduce((sum, inv) => sum + inv.amount, 0);
  };

  return (
    <div className="bulk-bill-pay">
      <h3>💳 Bulk Bill Pay</h3>

      <div className="payment-summary">
        <div className="summary-row">
          <span>Selected</span>
          <span>{selectedInvoices.size} invoices</span>
        </div>
        <div className="summary-row">
          <span>Total Amount</span>
          <span className="amount">${getTotalSelected().toLocaleString()}</span>
        </div>
      </div>

      <div className="payment-actions">
        <button 
          className="pay-selected-btn"
          disabled={selectedInvoices.size === 0}
        >
          Pay Selected ({selectedInvoices.size})
        </button>
        <button 
          className="schedule-btn"
          disabled={selectedInvoices.size === 0}
        >
          Schedule Payment
        </button>
      </div>

      <div className="invoices-list">
        <div className="list-header">
          <label className="select-all">
            <input
              type="checkbox"
              checked={selectedInvoices.size === unpaidInvoices.length}
              onChange={handleSelectAll}
            />
            <span>Select All</span>
          </label>
          <span className="header-count">
            {unpaidInvoices.length} unpaid
          </span>
        </div>

        {unpaidInvoices.map(invoice => (
          <div key={invoice.id} className="invoice-row">
            <label className="invoice-select">
              <input
                type="checkbox"
                checked={selectedInvoices.has(invoice.id)}
                onChange={() => handleSelectInvoice(invoice.id)}
              />
              <div className="invoice-details">
                <span className="vendor-name">{invoice.vendor}</span>
                <span className="invoice-meta">
                  Due: {invoice.dueDate}
                </span>
              </div>
            </label>
            <div className="invoice-amount">
              <span className="amount">${invoice.amount.toLocaleString()}</span>
              <span className={`status ${invoice.status}`}>
                {invoice.status.replace('-', ' ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BulkBillPay;