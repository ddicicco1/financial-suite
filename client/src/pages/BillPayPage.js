import React, { useState } from 'react';
import '../styles/pages/BillPayPage.css';

const BillPayPage = () => {
  const [bills, setBills] = useState([
    {
      id: 1,
      vendor: 'Tech Solutions Inc',
      amount: 1499.99,
      dueDate: '2025-04-25',
      status: 'pending',
      invoice: 'INV-2025-001',
      recurring: true
    },
    {
      id: 2,
      vendor: 'Office Supplies Co',
      amount: 458.50,
      dueDate: '2025-04-20',
      status: 'scheduled',
      invoice: 'INV-2025-002',
      recurring: false
    },
    {
      id: 3,
      vendor: 'Marketing Experts LLC',
      amount: 2500.00,
      dueDate: '2025-04-18',
      status: 'overdue',
      invoice: 'INV-2025-003',
      recurring: false
    }
  ]);

  const [selectedBills, setSelectedBills] = useState(new Set());

  const handleBillSelection = (billId) => {
    const newSelection = new Set(selectedBills);
    if (newSelection.has(billId)) {
      newSelection.delete(billId);
    } else {
      newSelection.add(billId);
    }
    setSelectedBills(newSelection);
  };

  const handlePaySelected = () => {
    const updatedBills = bills.map(bill => {
      if (selectedBills.has(bill.id)) {
        return { ...bill, status: 'processing' };
      }
      return bill;
    });
    setBills(updatedBills);
    setSelectedBills(new Set());
  };

  // Calculate totals
  const totalDue = bills.reduce((sum, bill) => sum + bill.amount, 0);
  const selectedTotal = bills
    .filter(bill => selectedBills.has(bill.id))
    .reduce((sum, bill) => sum + bill.amount, 0);

  return (
    <div className="page bill-pay-page">
      <h1>💵 Bill Pay</h1>

      <div className="bill-pay-grid">
        <div className="bill-pay-summary">
          <div className="summary-cards">
            <div className="summary-card">
              <h3>Total Due</h3>
              <div className="amount">${totalDue.toLocaleString()}</div>
              <div className="detail">{bills.length} bills</div>
            </div>
            <div className="summary-card">
              <h3>Selected for Payment</h3>
              <div className="amount">${selectedTotal.toLocaleString()}</div>
              <div className="detail">{selectedBills.size} selected</div>
            </div>
            <div className="summary-card">
              <h3>Quick Actions</h3>
              <button 
                className="pay-selected-btn"
                disabled={selectedBills.size === 0}
                onClick={handlePaySelected}
              >
                Pay Selected Bills
              </button>
            </div>
          </div>
        </div>

        <div className="bills-list">
          <div className="bills-header">
            <h2>Upcoming Bills</h2>
            <div className="bills-filters">
              <select defaultValue="all">
                <option value="all">All Bills</option>
                <option value="pending">Pending</option>
                <option value="scheduled">Scheduled</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>

          <div className="bills-table">
            <div className="table-header">
              <div className="checkbox-cell">
                <input 
                  type="checkbox" 
                  checked={selectedBills.size === bills.length}
                  onChange={() => {
                    if (selectedBills.size === bills.length) {
                      setSelectedBills(new Set());
                    } else {
                      setSelectedBills(new Set(bills.map(b => b.id)));
                    }
                  }}
                />
              </div>
              <div>Vendor</div>
              <div>Amount</div>
              <div>Due Date</div>
              <div>Status</div>
              <div>Actions</div>
            </div>

            {bills.map(bill => (
              <div key={bill.id} className="table-row">
                <div className="checkbox-cell">
                  <input
                    type="checkbox"
                    checked={selectedBills.has(bill.id)}
                    onChange={() => handleBillSelection(bill.id)}
                  />
                </div>
                <div className="vendor-cell">
                  <div className="vendor-name">{bill.vendor}</div>
                  <div className="invoice-number">{bill.invoice}</div>
                  {bill.recurring && <span className="recurring-badge">🔄 Recurring</span>}
                </div>
                <div className="amount-cell">${bill.amount.toLocaleString()}</div>
                <div className="date-cell">
                  <div className="due-date">{bill.dueDate}</div>
                  {bill.status === 'overdue' && <span className="overdue-label">Overdue</span>}
                </div>
                <div className="status-cell">
                  <span className={`status-badge ${bill.status}`}>{bill.status}</span>
                </div>
                <div className="actions-cell">
                  <button className="pay-btn">Pay Now</button>
                  <button className="view-btn">View</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="payment-schedule">
          <h2>Payment Schedule</h2>
          <div className="calendar-view">
            {/* Calendar visualization would go here */}
            <div className="calendar-placeholder">
              📅 Interactive payment calendar coming soon...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPayPage;