const express = require('express');
const router = express.Router();
const {
    listarUsuarios,
    createUser,
    updateEmpleados,
    updateMe,
    deleteEmpleado,
} = require('../controllers/work.controller');
const { verifyAuthen } = require('../utils/verify-authen');

router.get('/listar', verifyAuthen, listarUsuarios);
router.post('/create', verifyAuthen, createUser);


module.exports = router;