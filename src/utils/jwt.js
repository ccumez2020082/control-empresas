const jwt = require('jwt-simple');
const moment = require('moment');
const SECRET = 'control_de_empresas';

exports.createToken = function(empresa) {
    let payload = {
        sub: empresa._id,
        name: empresa.name,
        email: empresa.email,
        direction: empresa.direction,
        iat: moment().unix(),
        exp: moment().day(10, 'days').unix(),
    };
    return jwt.encode(payload, SECRET);
};