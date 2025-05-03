import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

// Middleware to authenticate JWT token
export const jwtAuth = (req, res, next) => {
  const Authorization = req.headers.authorization;

  if (!Authorization) return res.status(401).json("Authorization not found!Only Authorize user can update or delete cartItem");

  const token = Authorization.split(" ")[1];
  if (!token) return res.status(401).json("Token not found");

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

// Function to generate a JWT
export const generateJWT = (userdata, key = process.env.SECRET_KEY) => {
  return jwt.sign(userdata, key, { expiresIn: '1d' });
};
