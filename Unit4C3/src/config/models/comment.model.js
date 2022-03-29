const mongoose = require ("mongoose");


const commentSchema = new mongoose.Schema({
   body:{type:String}
},
    {
        timestamps:true
}
)

module.exports = mongoose.model("comment",commentSchema);