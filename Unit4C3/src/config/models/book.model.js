const mongoose = require ("mongoose");


const bookSchema = new mongoose.Schema({
    first_name:{typr:String,reruire:true,min:3,max:30},
    second_name:{typr:String,reruire:false,min:3,max:30},
    age:{type:Number,require:true},
    email:{type:email,require:true},
    profile_image:[{type:String,reuired :true}],
},
    {
        timestamps: true
}
)

module.exports = mongoose.model("book",bookSchema);