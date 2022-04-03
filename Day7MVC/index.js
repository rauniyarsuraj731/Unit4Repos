const express = require("express")
const userController = require("./controllers/userController") 
const studentController =require("./controllers/studentController")
const batchController = require("./controllers/batchController")
const evaluationController = require("./controllers/evaluationController")
const submissionController = require("./controllers/submissionController")



const app = express()
app.use(express.json())

app.use("/users",userController);
app.use("/students",studentController);
app.use("/batches",batchController);
app.use("/evaluations",evaluationController);
app.use("/submissions",submissionController)

module.exports = app