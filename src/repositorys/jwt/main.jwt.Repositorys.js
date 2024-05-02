const secret = require('../../index.js')
const jwt = require('jsonwebtoken');

const generateAcessToken = (userId) => {
    return jwt.sign({ userId }, secret, { expiresIn: '15m' });
};

const generateRefreshToken = (userId) => {
        return jwt.sign({ userId }, secret);
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports = {
    generateAcessToken,
    generateRefreshToken,
    verifyToken
}

