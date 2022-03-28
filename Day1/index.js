 const express = require ("express");

 const app = express();

 app.get("/",function(req,res){
     res.send("pablo")
 })

 app.listen(3300, ()=>{
    console.log("object");
})

 app.get("/books", function(req,res){
       res.send("Dream with open eyes","Wings of Fire","The Psychology of Money,Dairy of young Girl")
 })

 app.listen(2800, ()=>{
     console.log("object1");
 })
