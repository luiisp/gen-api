import { createUser } from "../../repositorys/userRepositorys.js";
import { userValidation } from "../../validations/user/user.validation.js";
import { getAllUsers } from "../../repositorys/userRepositorys.js";
import {getUserById} from "../../repositorys/userRepositorys.js";
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
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

export const getUserByIdController = async (req, res) => {
    try {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}