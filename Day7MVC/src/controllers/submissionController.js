const express = require("express");
const crudController = require("./crudController")
const Submission = require("../models/submissionModel");
const evaluationModel = require("../models/evaluationModel");
const router = express.Router();

router.post("/",crudController.post(Submission));

router.get("", async (req,res)=>{
    try {
        const submissions = await Submission.find().populate({path:"evaluationId"}).populate({path:"studentsId"}).lean().exec();
        return res.status(200).send(submissions)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});

router.get("/students", async (req,res) =>{
    try {
        const students = await Submission.find({},{studentsId:1}).populate({path:"studentsId"}).lean().exec();
        return res.status(200).send(students)
    } catch (error) {
        return res.status(500).send(error)
    }
});


router.get("/highscore", async (req,res)=>{
    try {
        const evalRes = await Submission.find({}).populate({path:"studentsId"}).lean().exec();
        let winner ={};
        let high = -Infinity;
        const highest = evalRes.forEach(el =>{
            if(el.marks>high){
                winner = el;
                high = el.marks
            }
        });
        return res.status(200).send(winner)
    } catch (error) {
        return res.status(500).send(error)
    }
});


module.exports = router;