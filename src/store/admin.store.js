const model = require('../model/work.model');
const modelEmpleado = require('../model/empleados.model');

async function getCompany() {
    return await model.find();
}

async function findCompany(nameEmpresa, emailEmpresa) {
    return await model.find({ $or: [{ name: nameEmpresa }, { email: emailEmpresa }] });
}

function saveCompany(empresaNueva) {
    const mynuevaEmpresa = new model(empresaNueva);
    return mynuevaEmpresa.save();
}

async function updateCompany(id, body) {
    return await model.findByIdAndUpdate(id, body, { new: true });
}

async function updateCompanyId(id) {
    return await model.findById(id);
}

async function deleteCompany(id) {
    return await model.findOneAndDelete({
        _id: id,
    });
}

async function deleteEmployees(idbusiness) {
    return await modelEmpleado.deleteOne({ business: idbusiness });
}

module.exports = {
    getCompany,
    findCompany,
    saveCompany,
    updateCompany,
    updateCompanyId,
    deleteCompany,
    deleteEmployees,

};