const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        return res.status(401).json({ message: "Unauthorized: User not found" });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("❌ Invalid token:", error.message);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized: No token" });
  }
};

module.exports = authMiddleware;
