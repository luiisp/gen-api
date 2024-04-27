import { createUserController, getAllUsersController, getUserByIdController } from "../controllers/user/user.controller.js";


export const userRoutes = (app) => {
    app.post('/user', createUserController);
    app.get('/users', getAllUsersController);
    app.get('/user/:id', getUserByIdController);
};