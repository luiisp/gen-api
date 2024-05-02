const {verifyToken} = require('../repositorys/jwt/main.jwt.Repositorys.js');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!authHeader || !token) {
        return res.status(401).json({ error: 'Unauthorized' });
    } 
    const result = verifyToken(token);
    if (!result){
        return res.status(403).json({ error: 'Forbidden' });
    }
    req.userId = result.userId;
    next();
    
}

module.exports = { authenticateToken };