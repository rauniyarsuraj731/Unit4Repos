const mongoose = require ("mongoose");


const publicationSchema = new mongoose.Schema({
   name:{type:String}
},
    {
        timestamps: true
}
)

module.exports = mongoose.model("publication",publicationSchema);