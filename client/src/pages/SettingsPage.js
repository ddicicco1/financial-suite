import React from 'react';
import '../styles/pages/SettingsPage.css';

const SettingsPage = () => {
  return (
    <div className="page settings-page">
      <h1>⚙️ Settings</h1>
      
      <div className="settings-grid">
        <div className="settings-section">
          <h2>Account Settings</h2>
          <div className="settings-card">
            <h3>Profile Information</h3>
            <form className="settings-form">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" defaultValue="Demo Company Inc." />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" defaultValue="admin@democompany.com" />
              </div>
              <div className="form-group">
                <label>Time Zone</label>
                <select defaultValue="UTC-7">
                  <option value="UTC-8">Pacific Time (UTC-8)</option>
                  <option value="UTC-7">Mountain Time (UTC-7)</option>
                  <option value="UTC-6">Central Time (UTC-6)</option>
                  <option value="UTC-5">Eastern Time (UTC-5)</option>
                </select>
              </div>
              <button type="submit" className="save-btn">Save Changes</button>
            </form>
          </div>
        </div>

        <div className="settings-section">
          <h2>Integration Settings</h2>
          <div className="settings-card">
            <h3>QuickBooks Integration</h3>
            <div className="integration-status connected">
              <span className="status-icon">✅</span>
              <span>Connected to QuickBooks Online</span>
            </div>
            <button className="disconnect-btn">Disconnect</button>
          </div>
          
          <div className="settings-card">
            <h3>OCR Settings</h3>
            <div className="settings-form">
              <div className="form-group">
                <label>Default Language</label>
                <select defaultValue="en">
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div className="form-group">
                <label>
                  <input type="checkbox" defaultChecked />
                  Auto-process uploaded invoices
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2>Notification Settings</h2>
          <div className="settings-card">
            <h3>Email Notifications</h3>
            <div className="notification-settings">
              <div className="notification-option">
                <label>
                  <input type="checkbox" defaultChecked />
                  New invoice processed
                </label>
              </div>
              <div className="notification-option">
                <label>
                  <input type="checkbox" defaultChecked />
                  Payment due reminders
                </label>
              </div>
              <div className="notification-option">
                <label>
                  <input type="checkbox" defaultChecked />
                  Monthly reports
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;