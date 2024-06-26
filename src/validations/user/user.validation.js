const yup = require('yup');
const userValidation = yup.object({
    name: yup.string().required().min(3).max(30),
    username: yup.string().required().min(3).max(30),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(20),
    phone: yup.string().nullable(true),
    birthDate: yup.date().nullable(true),
    bio: yup.string().nullable(true).max(100),
})


const userUpdateValidation = yup.object({
    name: yup.string().min(3).max(30),
    username: yup.string().min(3).max(30),
    email: yup.string().email(),
    password: yup.string().min(6).max(20),
    phone: yup.string().nullable(true),
    birthDate: yup.date().nullable(true),
    bio: yup.string().nullable(true).max(100),
});

module.exports = { userValidation, userUpdateValidation };