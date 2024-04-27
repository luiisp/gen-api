import { createUserController } from "../controllers/user/userController.js";
import { getAllUsersController } from "../controllers/user/userController.js";

export const userRoutes = (app) => {
    app.post('/user', createUserController);
    app.get('/users', getAllUsersController);
};