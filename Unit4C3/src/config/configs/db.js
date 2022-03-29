const mongoose = require("mongoose")

const connect = ()=>{
    return mongoose.connect("mongodb+srv://rauniyarsuraj:<masai12345>@cluster0.kzfd8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}