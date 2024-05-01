const jwt = require('jsonwebtoken');
const secret = require('../index.js')


const jwtMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!authHeader || !token) {
        return res.status(401).json({ message: 'Access Denied' });
    } 

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid Token' });
    }
}