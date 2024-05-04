const {generateRefreshToken} = require('../../repositorys/jwt/jwtRepositorys.js')


const refreshTokenController = async (req, res) => {
    const userId = req.params.userId;
    console.log(userId);
    return res.status(200).json({userId});
    const refreshToken = generateRefreshToken(userId);
    res.json({ refreshToken });
};


module.exports = { refreshTokenController };