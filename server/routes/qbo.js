const express = require('express');
const router = express.Router();
const QuickBooks = require('node-quickbooks');

// Initialize QuickBooks
const qbo = new QuickBooks(
  process.env.QBO_CLIENT_ID,
  process.env.QBO_CLIENT_SECRET,
  process.env.QBO_ACCESS_TOKEN,
  false, // no token secret for oAuth 2.0
  process.env.QBO_REALM_ID,
  process.env.QBO_SANDBOX === 'true', // use sandbox?
  true, // debug
  null, // minor version
  '2.0', // oauth version
  process.env.QBO_REFRESH_TOKEN
);

// Get QBO vendors
router.get('/vendors', async (req, res) => {
  try {
    // TODO: Implement QBO vendor fetching
    res.json({ vendors: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create QBO invoice
router.post('/invoices', async (req, res) => {
  try {
    // TODO: Implement QBO invoice creation
    res.status(201).json({ message: 'Invoice created' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;