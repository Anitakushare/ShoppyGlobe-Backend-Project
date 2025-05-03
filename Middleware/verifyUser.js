import userModel from "../Model/user.model.js";
import { generateJWT} from "../JwtAuth/userJwtAuth.js";
// Middleware to verify user during login
export async function verifyUser(req, res, next) {
  try {
    const errors = [];
    const { username, password } = req.body;

    if (!username) errors.push("Username required");
    if (!password) errors.push("Password required");

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Find user by username and password
    const user = await userModel.findOne({ username, password });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Convert Mongoose document to plain object
    const payload = {
      id: user._id.toString(),
      username: user.username,
    };

    // Generate JWT
    const token = generateJWT(payload);

    return res.json({ user: payload, token });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ error: "Server error occurred" });
  }
}
