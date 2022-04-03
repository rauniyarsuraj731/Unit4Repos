const express = require("express");

const transporter = require("../configs/mail");

const User = require("../model/user");
const Admin = require("../model/admin")


const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10;

    const skip = (page - 1) * pagesize;

    const users = await User.find()
      .skip(skip) 
      .limit(pagesize) 
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await User.find().countDocuments()) / pagesize
    );

    return res.status(200).send({ users, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Admin" <admin@masai.com>', 
      to: user.email,  // list of receivers
      subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`, // Subject line
      text: `Hii ${user.first_name}, please confirm your email address`, // plain text body
      html: `<b>Hii ${user.first_name}, please confirm your email address </b>`, // html body
     
    });
    const admin = await Admin.find().lean().exec()
    admin.forEach((el) =>{
    setTimeout(function(){ transporter.sendMail({
        from:'"Admin" <admin@masai.com>',
        to:`${el.email}`,
        subject:`${user.first_name} ${user.last_name} has registered with us`,
        text:`Please welcome ${user.first_name}`,
        html:`<p> Please Welcome ${user.first_name}</p>`
      })
    },10000)
    })
    
    return res.status(201).send({ message: "Message send successfully" });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;