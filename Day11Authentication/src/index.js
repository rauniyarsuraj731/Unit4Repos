const express = require("express");
const {register,login} = require("./controller/userController")
const postController = require("./controller/postController")
const app = express();

app.use(express.json())

app.use("/register",register)
app.use("/login",login)
app.use("/post",postController)

module.exports = app;