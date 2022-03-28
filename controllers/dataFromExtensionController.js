const Data = require('../models/dataModels');
const DataInfoVehicule = require('../models/infoVehicule');

//! POST : Information type Véhicule.
exports.infoVehicule = (req, res, next) => {
  //
  const dataObject = req.body;

  // let data2 = JSON.stringify(dataObject);
  // console.log('data2 : ' + data2);

  const data = new DataInfoVehicule({
    ...dataObject,
  });

  data.save(function (err, b) {
    if (err) {
      console.log('#########', err);
      res.status(400).json({
        error: err,
      });
    } else {
      console.log(b);
      res.status(201).json({
        message: 'Data créé!',
      });
    }
  });
};

//!------------------------------------------------------------

//! GET : Information type Véhicule.
exports.getInfoVehicule = (req, res, next) => {
  // console.log('Requete OK Back');
  // res.status(201).json({ message: 'Requete front OK' });

  DataInfoVehicule.find({})
    .sort({ _id: -1 })
    .limit(1)

    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

//! POST : Information cylindrée Véhicule.
exports.dataFromExtension = (req, res, next) => {
  const dataObject = req.body;
  // let data2 = JSON.stringify(dataObject);
  // console.log('data2 : ' + data2);

  const data = new Data({
    ...dataObject,
  });

  data.save(function (err, b) {
    if (err) {
      console.log('#########', err);
      res.status(400).json({
        error: err,
      });
    } else {
      console.log(b);
      res.status(201).json({
        message: 'Data crée!',
      });
    }
  });
};

//!------------------------------------------------------------

//! GET : Information cylindrée Véhicule.
exports.getData = (req, res, next) => {
  // console.log('Requete OK Back');
  // res.status(201).json({ message: 'Requete front OK' });

  Data.find({})
    .sort({ _id: -1 })
    .limit(1)

    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
