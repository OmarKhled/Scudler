import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    courses: {
      type: Array,
      required: true,
      default: [
        {
          courseName: "DEMO",
          body: [
            {
              sectionNumber: 1,
              lecture: {
                lectureName: "",
                professor: "",
                online: true,
                slots: [
                  {
                    day: 2,
                    slot: [0, 3],
                  },
                ],
              },
              tutorial: [],
              labs: [],
            },
          ],
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("Users", userModel);

export default User;
