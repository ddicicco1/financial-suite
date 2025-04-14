import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';
import axios from 'axios';

const VendorList = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('/api/vendors');
        setVendors(response.data.vendors);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
      setLoading(false);
    };

    fetchVendors();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Vendors
      </Typography>
      <List>
        {vendors.map((vendor, index) => (
          <ListItem key={vendor.id || index}>
            <ListItemText
              primary={vendor.name}
              secondary={vendor.email}
            />
          </ListItem>
        ))}
        {vendors.length === 0 && (
          <ListItem>
            <ListItemText primary="No vendors found" />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

export default VendorList;