    const express = require("express");
  

    const app = express();

    app.get("",function(req,res){
    return  res.send("hello")
    });


    app.get("/books",(req,res)=>{
        res.json([{"book1":"Ramayan"},{"book2":"Mahabharat"},{"book3":"Gurugranth"},{"book4":"History"}])
    });

    app.listen(2700,()=>{
        console.log("port is running")
    });