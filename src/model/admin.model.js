const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminSchema = Schema({
    userName: String,
    email: String,
    password: String,

});

module.exports = mongoose.model('admin', adminSchema);