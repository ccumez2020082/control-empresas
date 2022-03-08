const bcrypt = require('bcrypt-nodejs');
const { findByEmail } = require('../store/authen.store');
const RESPONSE = require('../utils/responses');
const model = require('../model/work.model');
const modelAdmin = require('../model/admin.model');
const jwt = require('../utils/jwt');



/*Este es la parte mas importante ya que nos sirve para logear la empresa*/
/*Lo que se encarga es de logear a la empresa*/
/*Aqui es donde sacamos el Token */
async function login(req, res) {
    const { email, password } = req.body;

    try {
        findByEmail(model, email).then((empresaEncontrada) => {
            if (empresaEncontrada) {
                responderToken(req, res, password, empresaEncontrada.password, empresaEncontrada);
            } else {
                findByEmail(modelAdmin, email).then((adminEncontrado) => {
                    if (adminEncontrado) {
                        responderToken(req, res, password, adminEncontrado.password, adminEncontrado);
                    } else {
                        return RESPONSE.error(req, res, 'El correo es incorrecto', 404);
                    }
                });
            }
        })
    } catch (err) {
        console.log('err', err);
    }


}


function responderToken(req, res, password, passwordEncontrado, dataEncontrada) {
    bcrypt.compare(password, passwordEncontrado, (err, passDesincriptado) => {
        if (err) return RESPONSE.error(req, res, err, 500);
        !passDesincriptado
            ?
            RESPONSE.error(req, res, 'La contraseña es incorrecta.') :
            RESPONSE.success(req, res, jwt.createToken(dataEncontrada), 200);
    });
}

module.exports = {
    login,
};