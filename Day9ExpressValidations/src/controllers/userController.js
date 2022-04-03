const express = require("express");
const { body, validationResult } = require("express-validator");
const User = require("../model/userModel")
const router = express.Router();

router.post("",body("first_name")
.trim()
.not()
.isEmpty()
.withMessage("first name is required"),
body("last_name")
.trim()
.not()
.isEmpty()
.withMessage("last name is required"),
body("email")
.isEmail()
.custom(async (val) => {
  const user = await User.findOne({ email: val });
  if (user) {
    throw new Error("Email is already registered");
  }
  return true;
}),
body("pincode")
.not()
.isEmpty()
.withMessage("pincode is required")
.isNumeric()
.withMessage("Pin-code must be of 6 digit")
.custom((val) => {
  if (val < 100000 || val > 999999) {
    throw new Error("Incorrect Pin-code");
  }
  return true;
}),
body("age")
.not()
.isEmpty()
.withMessage("Age is required!")
.isNumeric()
.withMessage("Age must be a number between 1 and 100")
.custom((val) => {
  if (val < 1 || val > 100) {
    throw new Error("Incorrect age entered");
  }
  return true;
}),
body("gender")
    .trim()
    .not()
    .isEmpty()
    .isString()
    .withMessage("Gender is required")
    .isIn(["Male","Female","Others"])
    .withMessage("Incorrect gender entered"),
async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).send({ errors: errors.array() });
          }
        const users = await User.create(req.body);
        return res.status(201).send(users);
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
})



module.exports = router;