const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const ocrRoutes = require('./routes/ocr');
const vendorsRoutes = require('./routes/vendors');
const qboRoutes = require('./routes/qbo');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ocr', ocrRoutes);
app.use('/api/vendors', vendorsRoutes);
app.use('/api/qbo', qboRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});