const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dataFromExtensionRoute = require('./routes/dataFromExtensionRoute');

//! Utilisation de cors pour les connexions

const cors = require('cors');
app.use(cors());

//! --------------------------------------------------

//! Header pour les Cross Origine

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});
//! --------------------------------------------------

//! Connexion à la base de donnée.

// 'mongodb+srv://clic974:' +
//   process.env.MONGO_DB_PW +
//   '@cluster0.gcufk.mongodb.net/Benjamin_Bellanger?retryWrites=true&w=majority',
//   { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(
    'mongodb+srv://clic974:' +
      'IQGCB56jk6BB7Snt' +
      '@cluster0.gcufk.mongodb.net/Benjamin_Bellanger?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('=====> Connexion à MongoDB réussie !'))
  .catch(() => console.log('=====> Connexion à MongoDB échouée !'));

//! --------------------------------------------------

//! Utilisation de body parser

app.use(bodyParser.json());

//! --------------------------------------------------

//! Test connexion Hiroku.

// app.get('/', (req, res) => {
//   res.json('Hello, Heroku');
// });

//! --------------------------------------------------

//! Liste des routes.

app.use('/api/dataFromExtensionRoute', dataFromExtensionRoute);
//! --------------------------------------------------

module.exports = app;
