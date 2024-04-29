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


export const getUsers = async (skip,take) => {
    const [users, total] = await prismaClient.$transaction([
        prismaClient.user.findMany({
            select: {
                id: true,
                username: true,
                name: true,
                password: false,
                email: true,
                createdAt: true,
                updatedAt: true,
                phone: true,
                birthDate: true,
                bio: true,
            },
            skip,
            take
        }), 
        prismaClient.user.count()
    ]);

    const totalPage = Math.ceil(total / take);
    return {
        totalPage, total, users
    };
};

export const getUserById = async (id) => {
    console.log(id);
    const user = await prismaClient.user.findUnique({
        where: {
            id: id
        },
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

export const deleteUser = async (id) => {
    const user = await prismaClient.user.delete({
        where: {
            id: parseInt(id)
        },
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
            bio: false,
        }
    });

    return user;
}