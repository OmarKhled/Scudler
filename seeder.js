import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import User from "./models/userModel.js";
import connectDB from "./config/db.js";

import users from "./data/Users.js";

dotenv.config();
connectDB();

const exportData = async () => {
  try {
    await User.deleteMany();

    await User.insertMany(users);

    console.log("Data Exported!".green.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await News.deleteMany();
    await Events.deleteMany();
    await Members.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}, ${err.message}`.red.inverse.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  exportData();
}
