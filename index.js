// Movies I
const fs = require('fs');
// const mongoose = require('mongoose');

const express = require('express');
// const { connect } = require('./utils/db')

// connect();
require('./db.js')
const PORT = 3000;
const server = express();

const Character = require('./models/Character');

const router = express.Router();

router.get('/characters', (req, res) => {
  return Character.find()
    .then(characters => {
      // Si encontramos los personajes, los devolveremos al usuario
      return res.status(200).json(characters);
    })
    .catch(err => {
      // Si hay un error, enviaremos por ahora una respuesta de error.
      return res.status(500).json(err);
    });
});

server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

//Imports
const express = require("express");
//Importamos la conexion a la db
const { connect } = require("./app/config/database");
//Ejecutamos la funcion que conecta con la db
connect();
const app = express();
//Config app
app.listen(3000, () => {
  console.log("Node server listening on port 3000");
});
