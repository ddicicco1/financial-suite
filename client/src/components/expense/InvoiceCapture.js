import React, { useState } from 'react';
import '../../styles/components/expense/InvoiceCapture.css';

const InvoiceCapture = () => {
  const [dragActive, setDragActive] = useState(false);
  const [recentUploads, setRecentUploads] = useState([
    {
      id: 1,
      vendor: 'Sysco',
      status: 'processing',
      timestamp: new Date().toISOString()
    },
    {
      id: 2,
      vendor: 'US Foods',
      status: 'completed',
      timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString()
    }
  ]);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    // Handle the dropped files
    const files = [...e.dataTransfer.files];
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Demo: Add uploaded files to recent uploads
    const newUploads = files.map((file, index) => ({
      id: Date.now() + index,
      vendor: 'Auto-detecting...',
      status: 'processing',
      timestamp: new Date().toISOString()
    }));

    setRecentUploads([...newUploads, ...recentUploads]);
  };

  return (
    <div className="invoice-capture">
      <h3>📥 Invoice Capture</h3>
      
      <div 
        className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="upload-content">
          <span className="upload-icon">📄</span>
          <p>Drag & drop invoices here or</p>
          <label className="upload-button">
            <span>Choose Files</span>
            <input 
              type="file" 
              multiple 
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={(e) => handleFiles([...e.target.files])}
              hidden 
            />
          </label>
        </div>
      </div>

      <div className="upload-info">
        <div className="info-item">
          <span className="info-icon">📧</span>
          <span>Or email to: <strong>invoices@yourdomain.com</strong></span>
        </div>
        <div className="info-item">
          <span className="info-icon">📱</span>
          <span>Use our mobile app to snap photos</span>
        </div>
      </div>

      <div className="recent-uploads">
        <h4>Recent Uploads</h4>
        <div className="uploads-list">
          {recentUploads.map(upload => (
            <div key={upload.id} className="upload-item">
              <div className="upload-details">
                <span className="vendor-name">{upload.vendor}</span>
                <span className="upload-time">
                  {new Date(upload.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <span className={`upload-status ${upload.status}`}>
                {upload.status === 'processing' ? '⏳' : '✅'} {upload.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoiceCapture;