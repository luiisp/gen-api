const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

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
        return null;
    }
}

module.exports = {
    generateAcessToken,
    generateRefreshToken,
    verifyToken
}

