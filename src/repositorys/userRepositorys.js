import {prismaClient} from "../utils/prisma.js"

export const createUser = async (data) => {
    const user = await prismaClient.user.create({
        data,
        select: {
            id: true,
            username: true,
            name: true,
            email: true,
            password: false,
            createdAt:true,
            updatedAt: true,
            phone: true,
            birthDate: true,
            bio: true,
        }
    });

    return user;
};


export const getAllUsers = async () => {
    const users = await prismaClient.user.findMany({
        select: {
            id: true,
            name: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            password: false,
            phone: true,
            birthDate: true,
            bio: true,
        }
    });

    return users;


};


export const getUserById = async (id) => {
    const user = await prismaClient.user.findUnique({
        where: {
            id: parseInt(id)
        },
        data,
        select: {
            id: true,
            name: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            password: false,
            phone: true,
            birthDate: true,
            bio: true,
        }
    });

    return user;
};


export const updateUserCredentials = async (id, data) => {
    const user = await prismaClient.user.update({
        where: {
            id: parseInt(id)
        },
        data,
        select: {
            id: true,
            name: true,
            username: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            password: false,
            phone: true,
            birthDate: true,
            bio: true,
        }
    });

    return user;
}