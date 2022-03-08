const {
    list,
    crearEmpleados,
    findQuery,
    findQueryID,

} = require('../store/work.store');
const RESPONSE = require('../utils/responses');


//Esta funcion se encargar de listar a los usuarios
async function listarUsuarios(req, res) {
    const query = req.query;

    if (Object.entries(query).length === 0) {
        list(req.empresa.sub).then((empleadosEncontrados) => {
                return RESPONSE.success(req, res, empleadosEncontrados, 200);
            })
            .catch((err) => {
                console.log(err);
                return RESPONSE.error(req, res, 'Error interno', 500);
            });
    } else {
        query.work = req.empresa.sub;
        console.log('query', query);

        if (query.id) {
            findQueryID(query.id, req.empresa.sub).then((empleadoEncontrado) => {
                if (empleadoEncontrado) {
                    return RESPONSE.success(req, res, empleadoEncontrado, 200);
                } else {
                    return RESPONSE.error(req, res, 'No existe este usuario en tu empresa.');
                }
            });
        }

        findQuery(query).then((empleadoEncontrado) => {
            if (empleadoEncontrado) {
                console.log('empleadoEncontrado', empleadoEncontrado);
                return RESPONSE.success(req, res, empleadoEncontrado, 200);
            } else {
                return RESPONSE.error(req, res, 'No se puede encontrar este empleado.', 500);
            }
        });
    }
}

async function createUser(req, res) {
    const { name, stall, departament } = req.body;

    const empleado = {
        name,
        stall,
        departament,
        work: req.empresa.sub,
    };

    crearEmpleados(empleado)
        .then((empleadoCreado) => {
            return RESPONSE.success(req, res, empleadoCreado, 201);
        })
        .catch((err) => {
            console.log(err);
            return RESPONSE.error(req, res, 'Error interno', 500);
        });
}



module.exports = {
    listarUsuarios,
    createUser,


};