const modelAdmin = require('../model/admin.model');

async function findByEmail(modelAdmin, email) {
    return await modelAdmin.findOne({ email });

}

module.exports = {
    findByEmail
};