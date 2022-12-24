const express = require("express");
const mongoose = require("mongoose");
// const authHandler = require("./middleware/auth");
const Student = require("./models/Student");
const router = require("./routes/user/user.controller");
const router1 = require("./routes/teacher/user.controller");

const app = express();
app.use(express.json());
// app.use(authHandler);

mongoose
  .connect("mongodb://localhost:27017/newDb1")
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(`Couldn't connected to MongoDB, ${error}`));

app.use("/student", router);
app.use("/teacher", router1);

app.listen(5000, () => console.log("App is listening at port 5000"));
