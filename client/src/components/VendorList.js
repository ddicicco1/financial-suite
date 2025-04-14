import React, { useState, useEffect } from 'react';
import '../styles/VendorList.css';

function VendorList() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/vendors');
      const data = await response.json();
      setVendors(data.vendors || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching vendors:', err);
      setError('Failed to load vendors');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="vendor-list loading">Loading vendors...</div>;
  }

  if (error) {
    return <div className="vendor-list error">{error}</div>;
  }

  return (
    <div className="vendor-list">
      <h2>Vendors</h2>
      {vendors.length === 0 ? (
        <p>No vendors found</p>
      ) : (
        <ul className="vendor-items">
          {vendors.map((vendor) => (
            <li key={vendor.id} className="vendor-item">
              <h3>{vendor.name}</h3>
              <p>{vendor.email}</p>
              {vendor.phone && <p>{vendor.phone}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default VendorList;