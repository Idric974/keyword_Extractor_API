// ⭐⭐⭐⭐⭐⭐ Liste des routes disponibles dans l'application ⭐⭐⭐⭐⭐⭐

const express = require('express');
const router = express.Router();

//! POST

// Infos véhicule.
const postInfoVehicule = require('../controllers/dataFromExtensionController');
router.post('/infoVehicule', postInfoVehicule.infoVehicule);

// Cylidnré véhicule.
const postData = require('../controllers/dataFromExtensionController');
router.post('/dataFromExtension', postData.dataFromExtension);

//! ---------------------------------------------------------

//! GET.

const affichageInfosVehicule = require('../controllers/dataFromExtensionController');
router.get('/getInfoVehicule', affichageInfosVehicule.getInfoVehicule);
//! ---------------------------------------------------------

const affichageData = require('../controllers/dataFromExtensionController');
router.get('/getData', affichageData.getData);
//! ---------------------------------------------------------

module.exports = router;
