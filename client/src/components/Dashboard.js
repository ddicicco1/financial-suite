import React, { useState, useEffect } from 'react';
import InvoiceUploader from './InvoiceUploader';
import VendorList from './VendorList';

const Dashboard = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    fetch('/api/vendors')
      .then((response) => response.json())
      .then(setVendors)
      .catch(err => console.error("Failed to load vendors:", err));
  }, []);

  return (
    <div>
      <h2>Expense Dashboard</h2>
      <InvoiceUploader />
      <VendorList vendors={vendors} />
    </div>
  );
};

export default Dashboard;