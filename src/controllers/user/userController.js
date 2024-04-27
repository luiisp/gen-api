import { createUser } from "../../repositorys/userRepositorys.js";
import bcrypt from 'bcrypt';

export const createUserController = async (req, res) => {
    try {
        const hashPassowrd = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassowrd;
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};