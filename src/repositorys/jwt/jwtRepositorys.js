const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
const expiresJwtTime = process.env.EXPIRESTOKEN || '1h';
const expiresRefreshTokenTime = process.env.EXPIRESREFRESHTOKEN || '1d'
const {userExists} = require('../userRepositorys.js')

const getAcessToken = (userId) => {
    return {
        acessToken:{
         token: jwt.sign({ userId:userId }, secret, { expiresIn: expiresJwtTime }),
         expiresIn: expiresJwtTime   
        },

        refreshToken:{
            token: jwt.sign({ userId:userId }, secret, { expiresIn: expiresRefreshTokenTime }),
            expiresIn: expiresRefreshTokenTime
        }
    }
    
};

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, secret);
        const existis = userExists(decoded.userId);
        return existis ? decoded : null;
    } catch (error) {
        return null;
    }
}

module.exports = {
    getAcessToken,
    verifyToken
}

