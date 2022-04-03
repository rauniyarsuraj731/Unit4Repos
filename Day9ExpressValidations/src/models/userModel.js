const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name:{type:String,require:true},
    last_name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    pincode:{type:Number,required:true,minlength:6,maxlength:6},
    age:{type:Number,required:true,min:1,max:100},
    gender:{type:String,required:true,enum: ["Male", "Female","Others"]}
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("user",userSchema);