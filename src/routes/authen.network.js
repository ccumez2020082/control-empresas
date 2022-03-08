const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authen.controller');

/*Para logear*/
router.post('/login', login);

module.exports = router;