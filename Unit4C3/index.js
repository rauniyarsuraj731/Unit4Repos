const express = require("express")
const {body,validation}= require("espress-validator"); 
const app = express()

const user = require ("../models/user.model.js")

app.use(express.json());

const router = express.Router();


router.post("/",body)

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Thing created successfully!'
    });
  });