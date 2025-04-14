import React, { useState } from 'react';
import '../styles/InvoiceUploader.css';

function InvoiceUploader() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('invoice', file);
    setUploading(true);

    try {
      const response = await fetch('http://localhost:3001/api/ocr/process', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error uploading file:', error);
      setResult({ error: 'Failed to upload file' });
    }

    setUploading(false);
  };

  return (
    <div className="invoice-uploader">
      <h2>Upload Invoice</h2>
      <div className="upload-container">
        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={handleFileChange}
          className="file-input"
        />
        <button 
          onClick={handleUpload} 
          disabled={!file || uploading}
          className="upload-button"
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>
      {result && (
        <div className="result-container">
          <h3>Results:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default InvoiceUploader;