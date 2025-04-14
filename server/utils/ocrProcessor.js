const { createWorker } = require('tesseract.js');

async function processOCR(imagePath) {
  const worker = await createWorker();
  
  try {
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(imagePath);
    await worker.terminate();
    
    return {
      text,
      // TODO: Add structured data extraction
      structured: {
        vendorName: null,
        invoiceNumber: null,
        date: null,
        amount: null,
        items: []
      }
    };
  } catch (error) {
    await worker.terminate();
    throw error;
  }
}

module.exports = {
  processOCR
};