const {
    createUserController,
    getAllUsersController,
    deleteUserController,
    getUserByIdController,
    updateUserCredentialsController
} = require("../controllers/user/user.controller.js");
const { authenticateToken, userOwnerOnly } = require("../middleware/middlewares.js");
const {refreshTokenController} = require('../controllers/jwt/jwt.controller.js');


const userRoutes = (app) => {
    app.post('/user', createUserController);
    app.get('/users', authenticateToken ,getAllUsersController);
    app.get('/user/:id',authenticateToken, getUserByIdController);
    app.put('/user/:id',authenticateToken,userOwnerOnly, updateUserCredentialsController);
    app.post('/user/refreshToken/:userId', refreshTokenController);
    app.delete('/user/dangerzone/:id',authenticateToken,userOwnerOnly, deleteUserController);
};

module.exports = { userRoutes };