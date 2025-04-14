import React, { useState } from 'react';
import '../styles/InvoiceUploader.css';

const InvoiceUploader = ({ setInvoices }) => {
  const [imageData, setImageData] = useState(null);
  const [invoiceResult, setInvoiceResult] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Convert file to base64 string for a simple MVP upload
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageData(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageData) return;
    
    const response = await fetch('/api/ocr', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageData })
    });
    
    const data = await response.json();
    setInvoiceResult(data);
    
    // For demo purposes, add a new invoice to the list using dummy data
    setInvoices(prev => [
      ...prev, 
      { id: Date.now(), vendor: 'New Vendor', amount: parseFloat((Math.random() * 100).toFixed(2)), date: new Date().toISOString().slice(0,10) }
    ]);
  };

  return (
    <div className="invoice-uploader">
      <h3>Upload Invoice</h3>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="file-input-container">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="file-input" 
          />
        </div>
        <button type="submit" className="submit-button" disabled={!imageData}>
          Process Invoice
        </button>
      </form>
      {invoiceResult && (
        <div className="result-container">
          <h4>Invoice OCR Result:</h4>
          <pre>{JSON.stringify(invoiceResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default InvoiceUploader;