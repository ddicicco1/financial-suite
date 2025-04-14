import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import InvoiceUploader from './InvoiceUploader';
import VendorList from './VendorList';

const Dashboard = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Financial Suite Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <InvoiceUploader />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <VendorList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;