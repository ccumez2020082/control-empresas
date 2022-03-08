const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpresasSchema = Schema({
    name: String,
    email: String,
    password: String,
    direction: String,
});

module.exports = mongoose.model('empresas', EmpresasSchema);