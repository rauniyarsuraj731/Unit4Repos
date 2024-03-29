const express = require("express");
const crudController = require("./crudController");
const Batch = require("../models/batchModel");
const router = express.Router();

router.post("/", crudController.post(Batch));

router.get("", async (req, res) => {
  try {
    const batches = await Batch.find().lean().exec();
    return res.status(200).send(batches);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
