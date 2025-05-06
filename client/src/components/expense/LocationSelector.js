import React, { useState } from 'react';
import '../../styles/components/expense/LocationSelector.css';

const LocationSelector = ({ selectedLocations, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Demo locations data
  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'loc1', name: 'Downtown Store' },
    { id: 'loc2', name: 'Westside Location' },
    { id: 'loc3', name: 'Airport Terminal' },
    { id: 'loc4', name: 'Shopping Mall' },
  ];

  const handleLocationToggle = (locationId) => {
    let newSelection;
    if (locationId === 'all') {
      newSelection = ['all'];
    } else {
      newSelection = selectedLocations.filter(id => id !== 'all');
      if (newSelection.includes(locationId)) {
        newSelection = newSelection.filter(id => id !== locationId);
      } else {
        newSelection.push(locationId);
      }
      if (newSelection.length === 0) {
        newSelection = ['all'];
      }
    }
    onChange(newSelection);
  };

  return (
    <div className="location-selector">
      <button 
        className="location-dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="location-icon">📍</span>
        {selectedLocations.includes('all') 
          ? 'All Locations' 
          : `${selectedLocations.length} Selected`}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
      </button>

      {isOpen && (
        <div className="location-dropdown">
          {locations.map(location => (
            <label key={location.id} className="location-option">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location.id)}
                onChange={() => handleLocationToggle(location.id)}
              />
              <span className="location-name">{location.name}</span>
              {location.id !== 'all' && (
                <span className="location-meta">12 invoices</span>
              )}
            </label>
          ))}
          
          <div className="location-actions">
            <button 
              className="select-all"
              onClick={() => onChange(['all'])}
            >
              Select All
            </button>
            <button 
              className="clear-selection"
              onClick={() => onChange(['all'])}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSelector;