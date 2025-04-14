const express = require('express');
const router = express.Router();
const multer = require('multer');
const { processOCR } = require('../utils/ocrProcessor');

const upload = multer({ dest: 'uploads/' });

router.post('/process', upload.single('invoice'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const result = await processOCR(req.file.path);
    res.json({ data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;