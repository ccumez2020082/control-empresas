const work = require('./work.network');
const admin = require('./admin.network');
const authen = require('./authen.network');

const routes = (app) => {

    app.use('/admin', admin);
    app.use('/empresas', work);
    app.use('/authen', authen);


};

module.exports = routes;