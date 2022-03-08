const jwt = require('jsonwebtoken');
const moment = require('moment');
const secret = 'control_de_empresas';
const responses = require('./responses');

exports.verifyAuthen = function(req, res, next) {
    if (!req.headers.authorization) {
        return responses.error(req, res, 'No tiene el token', 400);
    }

    let token = req.headers.authorization.replace(/[/['"]+/g, '');
    let payload;
    try {
        payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({
                mensaje: 'El token a expirado.',
            });
        }
    } catch (error) {
        return responses.error(req, res, 'El token no es valido', 404);
    }

    req.empresa = payload;
    next();
};