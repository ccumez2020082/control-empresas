const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadosSchema = Schema({
    name: String,
    stall: String,
    departament: String,
    work: { type: mongoose.Schema.ObjectId, ref: 'empresas' },
});

module.exports = mongoose.model('empleados', EmpleadosSchema);