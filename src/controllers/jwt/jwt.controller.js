const {verifyAndRefreshToken} = require('../../repositorys/jwt/jwtRepositorys.js')


const refreshTokenController = async (req, res) => {
    const refreshToken = req.body.refreshToken;
    const userId = req.params.userId;

    const refreshedToken = verifyAndRefreshToken(refreshToken,userId);
    if(!refreshedToken) return res.status(403).json({error:"Forbidden"});
    return res.status(200).json(refreshedToken);

};


module.exports = { refreshTokenController };