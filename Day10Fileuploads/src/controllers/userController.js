const express = require("express");
const fs = require("fs")

const User = require("../models/userModel");
const Gallery = require("../models/galleryModel")
const { uploadFiles } = require("../middlewares/uploads");
const router = express.Router();



router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});



router.get("/multiple", async (req, res) => {
  try {
    const users = await Gallery.find().lean().exec();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});



router.post("/", uploadFiles("profile_pic", "single"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.file.path,
    });
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});



router.post("/multiple/:user_id",uploadFiles("profile_pic", "multiple"),async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });

      const user = await Gallery.create({
        profile_pic: filePaths,
        user_id: req.params.user_id,
      });

      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);



router.patch("/:userID",uploadFiles("profile_pic","single"), async(req,res)=>{
  try {
   
    const data ={
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      profile_pic:req.file.path
    }
    let  user = await User.findById(req.params.userID)
    let file = user.profile_pic;
    fs.unlinkSync(file.toString());
    user = await  User.findByIdAndUpdate(req.params.userID,data,{new:true});
    return res.status(200).send(user);

  } catch (error) {
    return res.status(500).send({message:error.message})
  }
});


router.delete("/:userId", async(req,res)=>{
  try {
    let user = await User.findById(req.params.userId)
    let file = user.profile_pic
    fs.unlinkSync(file.toString());
    await User.findByIdAndDelete(req.params.userId)
    return res.status(200).send(user);
  } catch (error) {
    return res.status(500).send({message:error.mesage})
  }
});



router.delete("/multiple/:id",async(req,res)=>{
  try {
    const gallery = await Gallery.findById(req.params.id);
  let images = gallery.profile_pic
  for(let i in images){
    fs.unlinkSync(images[i])
  }
  await Gallery.findByIdAndDelete(req.params.id)
  return res.status(200).send(gallery)
  } catch (error) {
    return res.status(500).send({message:error.mesage})
  }
});


module.exports = router;