const model = require('../model/empleados.model');
const modelEmpresa = require('../model/work.model');

async function list(id_empresas) {
    //Lo que se encarga de hacer esta funcion es llamar a las variables necesarias para poder logear al login
    return model.find({ work: id_empresas }).populate('work', 'name');
}


async function crearEmpleados(empleado) {
    const nuevoEmpleado = new model(empleado);
    return await nuevoEmpleado.save();
}


async function findQuery(objectQuery) {
    return await model.find(objectQuery);
}

async function findQueryID(id, work) {
    return await model.findOne({ _id: id, work });
}

module.exports = {
    list,
    crearEmpleados,
    findQuery,
    findQueryID
};