import { userRoutes } from "./user.routes.js";
import { utilsRoutes } from "./utils.routes.js";

const routes = app =>{
    userRoutes(app);
    utilsRoutes(app);
};

export default routes;