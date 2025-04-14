import React, { useState } from 'react';
import '../styles/InvoiceUploader.css';

const InvoiceUploader = () => {
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
  };

  return (
    <div>
      <h3>Upload Invoice</h3>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Process Invoice</button>
      </form>
      {invoiceResult && (
        <div>
          <h4>Invoice Details:</h4>
          <pre>{JSON.stringify(invoiceResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default InvoiceUploader;