const { pingTest } = require('../controllers/utils/utils.controller.js');
const { options } = require('../docs/docs.js');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger_output.json');


const utilsRoutes = (app) => {
    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(swaggerFile)
    );
    app.get('/ping', pingTest);
};

module.exports = { utilsRoutes };