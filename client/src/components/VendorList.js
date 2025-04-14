import React from 'react';
import './VendorList.css';

const VendorList = ({ vendors = [] }) => {
  // Helper function to format the date
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

  // If no vendors, show empty state
  if (!vendors.length) {
    return (
      <div className="vendor-list">
        <h3>Vendors</h3>
        <div className="no-vendors">
          No vendors found
        </div>
      </div>
    );
  }

  return (
    <div className="vendor-list">
      <h3>Vendors ({vendors.length})</h3>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor.id || vendor.name}>
            <span className="vendor-name">
              {vendor.name}
            </span>
            <span className="vendor-updated">
              Last Updated: {formatDate(vendor.lastUpdated)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add prop types if you're using TypeScript or PropTypes
// VendorList.propTypes = {
//   vendors: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string.isRequired,
//       lastUpdated: PropTypes.string.isRequired,
//     })
//   ),
// };

export default VendorList;