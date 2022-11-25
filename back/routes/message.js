'use strict'

const express = require('express');
const messageController = require('../controllers/MessageController');
const auth = require('../middlewares/authenticate');
const multipart = require('connect-multiparty');
const path = multipart({uploadDir: './uploads/perfiles'});


var api = express.Router();

api.post('/messenger',messageController.send);
api.get('/messenger/:para/:de',messageController.data_messenger);

module.exports = api;

//endpoints
