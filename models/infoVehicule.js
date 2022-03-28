const mongoose = require('mongoose');

const infoVehicule = mongoose.Schema({
  infoVehicule: { type: String, required: true },
  prixVehicule: { type: String, required: true },
  anneeVehicule: { type: String, required: true },
});

module.exports = mongoose.model('DataInfoVehicule', infoVehicule);
