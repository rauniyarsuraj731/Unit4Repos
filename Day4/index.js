const express = require("express")

const app = express();

app.listen(1000,()=>{
    console.log("listening on port 1000")
})
const allbooks = (req,res,next)=>{
    console.log("Fetching All Books"),
    next();
}

app.get("/books",allbooks,(req,res)=>{
    return res.send("i m a book")
})
