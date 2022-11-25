'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'diegoarca';

// Te autentica de que seas vos
exports.auth = function(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message: "La peticion no tiene cabecera de autenticacion"});
    }

    var token = req.headers.authorization.replace(/['"]+/g,'');

    try {
        var payload = jwt.decode(token,secret);

        if(payload.exp <= moment().unix()){
            return res.status(200).send({message: "token expirado"});
        }
    } catch (error) {
        console.log(error);
        res.status(200).send({error: "token no valido"});
    }

    req.user = payload;

    next();
}
