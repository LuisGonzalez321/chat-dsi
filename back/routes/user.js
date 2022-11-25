'use strict'

const express = require('express');
const userController = require('../controllers/UserController');
const auth = require('../middlewares/authenticate');
const multipart = require('connect-multiparty');
const path = multipart({uploadDir: './uploads/perfiles'});


const api = express.Router();

api.post('/registro',userController.registro);
api.post('/login',userController.login);
api.get('/usuarios/:nombre?',userController.users);
api.put('/usuarios/img/:id',path,userController.update_foto);
api.get('/usuarios/img/:img',path,userController.get_imagen);
api.get('/usuario/:id',userController.get_user);
api.put('/usuario/editar/:id',path,userController.editar_config);
api.get('/usuario/activar/:id',userController.activar_estado);
api.get('/usuario/desactivar/:id',userController.desactivar_estado);

module.exports = api;
