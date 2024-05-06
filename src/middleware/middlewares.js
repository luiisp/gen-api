const { verifyToken } = require("../repositorys/jwt/jwtRepositorys.js");

const userOwnerOnly = (req, res, next) => {
  if (req.userId !== Number(req.params.id)) {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!authHeader || !token || token.tokenType !== "acess") {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const result = verifyToken(token);
  if (!result) {
    return res.status(403).json({ error: "Forbidden" });
  }
  req.userId = result.userId;
  next();
};

module.exports = { authenticateToken, userOwnerOnly };
