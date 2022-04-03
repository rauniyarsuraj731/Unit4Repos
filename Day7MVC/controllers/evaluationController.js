const express = require("express");
const crudController = require("./crudController")
const Evaluation = require("../models/evaluationModel")
const router = express.Router()

router.post("/",crudController.post(Evaluation))

router.get("", async (req,res)=>{
    try {
        const evaluations = await Evaluation.find().populate({path:"instructor"}).populate({path:"batchId"}).lean().exec();
        return res.status(200).send(evaluations)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports = router