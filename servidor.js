const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const app = require('./app');
const admin = require('./src/model/admin.model');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/controlEmpresas', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const PORT = 3000;
    app.listen(PORT, () => console.log((`Conexion exitosa http://localhost:${PORT}`)));

    admin.find({}, (err, adminEncontrado) => {
        if (err) return console.log('Error al querer crear el administrador.');
        if (adminEncontrado.length > 0) {
            return console.log(('El administrador ya existe'));
        } else {
            const adminModel = new admin();
            adminModel.userName = 'admin';
            adminModel.email = 'admin123@gmail.com';
            bcrypt.hash('123456', null, null, (err, passEncriptado) => {
                if (err) return console.log(err);
                adminModel.password = passEncriptado;
                adminModel.save((err, datoGuardado) => {
                    if (err) return console.log('Error al intentar guardar al administrador');
                    !datoGuardado
                        ?
                        console.log('No viene el dato de admin') :
                        console.log(('Administrador creado con exito'));
                });
            });
        }
    });


});