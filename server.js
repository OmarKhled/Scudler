import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res, next) => {
    console.log("Production")
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res, next) => {
    res.send("Welcome!");
  });
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
  console.log(
    `App started and running in ${process.env.NODE_ENV} mode on port ${PORT}...`
      .cyan.underline.bold
  )
);
