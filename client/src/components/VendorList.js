import React from 'react';
import '../styles/VendorList.css';

const VendorList = ({ vendors }) => {
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return 'Invalid date';
    }
  };

  return (
    <div className="vendor-list">
      <h3>Vendors</h3>
      {vendors && vendors.length > 0 ? (
        <ul>
          {vendors.map((vendor) => (
            <li key={vendor.id} className="vendor-item">
              <span className="vendor-name">{vendor.name}</span>
              <span className="vendor-updated">
                Last Updated: {formatDate(vendor.lastUpdated)}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-vendors">No vendors found</div>
      )}
    </div>
  );
};

export default VendorList;