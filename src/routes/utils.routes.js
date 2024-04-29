const { pingTest } = require('../controllers/utils/utils.controller.js');
const { options } = require('../docs/docs.js');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const specs = swaggerJsdoc(options);

const utilsRoutes = (app) => {
    app.use(
        "/docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );
    app.get('/ping', pingTest);
};

module.exports = { utilsRoutes };