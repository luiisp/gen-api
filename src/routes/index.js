const { userRoutes } = require("./user.routes.js");
const { utilsRoutes } = require("./utils.routes.js");

const routes = app => {
    userRoutes(app);
    utilsRoutes(app);
};

module.exports = routes;