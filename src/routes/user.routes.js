import { createUserController } from "../controllers/user/userController.js";

export const userRoutes = (app) => {
    app.post('/user', createUserController);

};