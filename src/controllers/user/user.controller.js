const { createUser, getUsers, getUserById, updateUserCredentials, deleteUser } = require("../../repositorys/userRepositorys.js");
const { userValidation, userUpdateValidation } = require("../../validations/user/user.validation.js");
const bcrypt = require('bcrypt');
const createUserController = async (req, res) => {
    try {
        await userValidation.validate(req.body);

        const hashPassowrd = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassowrd;
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }
};

const getAllUsersController = async (req, res) => {
    try {
        const skip = req.query.skip ? Number(req.query.skip) : 0;
        const take = req.query.take ? Number(req.query.take) : 10;
        const users = await getUsers(skip, take);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(Number(req.params.id));
        user ? res.status(200).json(user) : res.status(404).json({ error: "User not found" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message });
    }

}

const updateUserCredentialsController = async (req, res) => {
    try {
        await userUpdateValidation.validate(req.body);

        req.body.password? req.body.password = await bcrypt.hash(req.body.password, 10): null;
        const user = await updateUserCredentials(Number(req.params.id), req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


const deleteUserController = async (req, res) => {
    try {
        const user = await deleteUser(Number(req.params.id));
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


module.exports = {
    createUserController,
    getAllUsersController,
    getUserByIdController,
    updateUserCredentialsController,
    deleteUserController
};