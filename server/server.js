const express = require('express');
const bodyParser = require('body-parser');

const ocrRoutes = require('./routes/ocr');
const vendorRoutes = require('./routes/vendors');
const qboRoutes = require('./routes/qbo');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
app.use('/api/ocr', ocrRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/qbo', qboRoutes);

// Basic health check
app.get('/', (req, res) => {
  res.send('Financial Suite API is up and running.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});