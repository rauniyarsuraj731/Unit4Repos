const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
    profile_pic: [{ type: String, required: false }],
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("gallery", gallerySchema);