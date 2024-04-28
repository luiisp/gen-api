import { createUser, getUsers, getUserById, updateUserCredentials } from "../../repositorys/userRepositorys.js";
import { userValidation } from "../../validations/user/user.validation.js";
import bcrypt from 'bcrypt';

export const createUserController = async (req, res) => {
    try {
        await userValidation.validate(req.body);

        const hashPassowrd = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassowrd;
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getAllUsersController = async (req, res) => {
    try {
        const skip = req.query.skip ? Number(req.query.skip) : 0;
        const take = req.query.take ? Number(req.query.take) : 10;
        const users = await getUsers(skip, take);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

export const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(Number(req.params.id));
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

export const updateUserCredentialsController = async (req, res) => {
    try {
        await userValidation.validate(req.body);
        const hashPassowrd = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassowrd;
        const user = await updateUserCredentials(Number(req.params.id), req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}