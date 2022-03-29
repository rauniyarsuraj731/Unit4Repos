const express = require("express")
const {body,validation}= require("espress-validator"); 


const user = require ("../models/user.model.js")



const router = express.Router();


router.post("/",body("firstName")
.not()
.isEmpty()
.withMessage("Name required"))

