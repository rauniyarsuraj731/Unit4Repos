const express = require("express");

const app = express();




app.get("/books",(req,res,next)=>{
    console.log("Fetching All Books"),
    next();
},(req,res)=>{
    return res.send("i m a book");
});


app.listen(3000,()=>{
    console.log("listening on port 3000")
});
