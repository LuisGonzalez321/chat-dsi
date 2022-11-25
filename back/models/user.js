'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: String,
    email: String,
    password: String,
    imagen: String,
    pais: String,
    telefono: String,
    twitter: String,
    facebook: String,
    github: String,
    bio: String,
    notificacion: Boolean,
    estado: Boolean,
    sonido: Boolean,
});

module.exports = mongoose.model('user',UserSchema);
