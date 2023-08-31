import bcrypt from "bcrypt";

export default [
  {
    name: "Omar Khaled",
    email: "o.abuelfetohahmed@nu.edu.eg",
    password: bcrypt.hashSync("123233", 10),
  },
];
