const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
  title: { type: String, required: true },
  nombreDeCylindres: { type: String, required: true },
  nombreDeSoupapes: { type: String, required: true },
  cylindree: { type: String, required: true },
});

module.exports = mongoose.model('Data', dataSchema);
