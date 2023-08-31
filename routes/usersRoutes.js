import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import auth from "../middleware/auth.js";

const router = express.Router();

// @desc    Auth User
// @route   POST /api/users
// @access  Public
router.post("/", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ msg: "Invalid email" });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (correctPassword) {
      jwt.sign({ id: user._id }, process.env.SECRET, (err, token) => {
        if (err) {
          console.log(err);
          throw err;
        }
        res.set("Content-Type", "application/json");
        return res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            courses: user.courses,
            token: token,
          },
        });
      });
    } else {
      return res.json({
        msg: "Invalid password",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Server Error",
    });
  }
});

router.post("/register", async (req, res, next) => {
  let { email, password, name } = req.body;

  password = bcrypt.hashSync(password, 10);

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ msg: "Email already exists" });
    }

    const dbUser = new User({ name, email, password });

    await dbUser.save();

    jwt.sign({ id: dbUser._id }, process.env.SECRET, (err, token) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.set("Content-Type", "application/json");
      return res.json({
        user: {
          _id: dbUser._id,
          name: dbUser.name,
          email: dbUser.email,
          courses: dbUser.courses,
          token: token,
        },
      });
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      msg: "Server Error",
    });
  }
});

// @desc    Get User Authorized
// @route   POST /api/users/auth
// @access  Private
router.get("/auth", auth, async (req, res, next) => {
  const user = req.user;
  if (!user) {
    res.status(401).json({ msg: "Invalid User" });
  }
  try {
    const dbUser = await User.findById({ _id: user.id }).select("-password");
    if (!dbUser) {
      return res.json({ msg: "Invalid cridintials" });
    }
    return res.json({
      user: {
        name: dbUser.name,
        email: dbUser.email,
        id: dbUser._id,
        courses: dbUser.courses,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server Error" });
  }
});

// @desc    Save User courses
// @route   POST /api/users/courses
// @access  Private
router.post("/courses", auth, async (req, res, next) => {
  const user = req.user;
  const { courses } = req.body;
  console.log(req.body);
  console.log(user, courses);
  if (!user) {
    res.status(401).json({ msg: "Invalid User" });
  }
  try {
    let dbUser = await User.findById({ _id: user.id }).select("-password");
    if (!dbUser) {
      return res.json({ msg: "Invalid cridintials" });
    }
    dbUser.courses = courses;
    await dbUser.save();
    return res.json({
      user: {
        name: dbUser.name,
        email: dbUser.email,
        id: dbUser._id,
        courses: dbUser.courses,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Server Error" });
  }
});

export default router;
