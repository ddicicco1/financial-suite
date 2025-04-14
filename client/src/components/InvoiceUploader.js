import React, { useState } from 'react';
import './InvoiceUploader.css';

const InvoiceUploader = () => {
  const [imageData, setImageData] = useState(null);
  const [invoiceResult, setInvoiceResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError(null);
    setInvoiceResult(null);
    
    // Validate file type
    if (file && !file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file && file.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      return;
    }

    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageData(reader.result);
      };
      reader.onerror = () => {
        setError('Error reading file');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageData) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageData })
      });
      
      if (!response.ok) {
        throw new Error('Failed to process invoice');
      }
      
      const data = await response.json();
      setInvoiceResult(data);
    } catch (err) {
      setError(err.message || 'Error processing invoice');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`invoice-uploader ${loading ? 'loading' : ''}`}>
      <h3>Upload Invoice</h3>
      <form onSubmit={handleSubmit}>
        <div className="file-input-container">
          <input 
            type="file" 
            accept="image/*"
            onChange={handleFileChange}
            disabled={loading}
          />
          {fileName && <p className="file-name">{fileName}</p>}
        </div>
        
        <button 
          type="submit" 
          disabled={!imageData || loading}
        >
          {loading ? 'Processing...' : 'Process Invoice'}
        </button>
      </form>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {invoiceResult && (
        <div className="invoice-details">
          <h4>Invoice Details:</h4>
          <pre>{JSON.stringify(invoiceResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default InvoiceUploader;