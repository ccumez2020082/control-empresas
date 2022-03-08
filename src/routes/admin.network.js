const express = require('express');
const router = express.Router();

/*Importaciones de UTILS*/
const responses = require('../utils/responses');
const { obtenerEmpresa, crearEmpresas, updateEmpresa, deleteEmpresa } = require('../controllers/admin.controller');
const { verifyAuthen } = require('../utils/verify-authen');


/*Listar Empresas*/
/*Eto ya ta*/
router.get('/listar', verifyAuthen, (req, res) => {
    obtenerEmpresa()
        .then((users) => {
            responses.success(req, res, users, 200);
        })
        .catch((err) => {
            responses.error(req, res, err, 500);
        });
});
/*Crear empresa*/
router.post('/create', verifyAuthen, crearEmpresas);
router.put('/update/:idEmpresa', verifyAuthen, updateEmpresa);
router.delete('/delete/:idEmpresa', verifyAuthen, deleteEmpresa);

module.exports = router;