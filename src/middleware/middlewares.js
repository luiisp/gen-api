const verifyToken = require('../repositorys/jwt/main.jwt.Repositorys.js');

const authenticateToken = (req, res, next) => {
    console.log('entrou no middleware');
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!authHeader || !token) {
        return res.status(401).json({ error: 'Unauthorized' });
    } 
    console.log('passou');
    verifyToken(token, (err, user) => {
        console.log(err);
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        console.log(user);
        next();
    });
    
}

module.exports = { authenticateToken };