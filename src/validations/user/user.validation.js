import * as yup from 'yup';

export const createUserValidation = yup.object({
    name: yup.string().required().min(3),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    phone: yup.string().nullable(true),
    birthDate: yup.date().nullable(true),
    bio: yup.string().nullable(true).default('This is a bio.'),
})