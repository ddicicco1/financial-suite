import React, { useState } from 'react';
import { Button, Typography, CircularProgress, Box } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import axios from 'axios';

const InvoiceUploader = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('invoice', file);

    setLoading(true);
    try {
      const response = await axios.post('/api/ocr/process', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (error) {
      console.error('Error processing invoice:', error);
      setResult({ error: 'Failed to process invoice' });
    }
    setLoading(false);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Upload Invoice
      </Typography>
      <input
        accept="image/*,.pdf"
        style={{ display: 'none' }}
        id="invoice-upload"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="invoice-upload">
        <Button
          variant="contained"
          component="span"
          startIcon={<CloudUploadIcon />}
          disabled={loading}
        >
          Upload Invoice
        </Button>
      </label>
      {loading && <CircularProgress style={{ marginTop: 20 }} />}
      {result && (
        <Box mt={2}>
          <Typography variant="subtitle1">Results:</Typography>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default InvoiceUploader;