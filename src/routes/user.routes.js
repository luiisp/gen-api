const {
    createUserController,
    getAllUsersController,
    deleteUserController,
    getUserByIdController,
    updateUserCredentialsController
} = require("../controllers/user/user.controller.js");

const userRoutes = (app) => {
    app.post('/user', createUserController);
    app.get('/users', getAllUsersController);
    app.get('/user/:id', getUserByIdController);
    app.put('/user/:id', updateUserCredentialsController);
    app.delete('/user/dangerzone/:id', deleteUserController);
};

module.exports = { userRoutes };