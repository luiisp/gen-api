import { createUserController, getAllUsersController,deleteUserController, getUserByIdController, updateUserCredentialsController } from "../controllers/user/user.controller.js";


export const userRoutes = (app) => {
    app.post('/user', createUserController);
    app.get('/users', getAllUsersController);
    app.get('/user/:id', getUserByIdController);
    app.put('/user/:id', updateUserCredentialsController);
    app.delete('/user/dangerzone/:id', deleteUserController);
};