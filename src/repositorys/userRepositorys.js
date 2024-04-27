import {prismaClient} from "../utils/prisma.js"

export const createUser = async (data) => {
    const user = await prismaClient.user.create({
        data,
        select: {
            id: true,
            name: true,
            email: true,
            password: false,
            created_at: true,
            updated_at: true,
            phone: true,
            birthDate: true,
            bio: true,
        }
    });

    return user;
};