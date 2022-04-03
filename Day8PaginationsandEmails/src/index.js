const express = require("express");

const app = express();

app.use(express.json());
const userController = require("./controller/user.controller")
const adminController = require("./controller/admin.controller")

app.use("/users",userController)
app.use("/admins",adminController)

module.exports = app