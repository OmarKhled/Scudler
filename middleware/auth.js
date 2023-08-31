import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export default async (req, res, next) => {
  const token = req.header("auth");

  if (!token) {
    res.status(401).json({ msg: "Not authorized" });
  }
  try {
    const user = jwt.verify(token, process.env.SECRET);
    const dbUser = await User.findById(user.id);
    if (dbUser) {
      req.user = user;
      next();
    } else {
      throw new Error("Valid token for invalid user");
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Invalid token" });
  }
};
