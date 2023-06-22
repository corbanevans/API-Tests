const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Welcome to my Corban's backend application");
});

app.get("/corban",(req,res)=>{
    res.send("Hello Corban!");
});

app.listen(3000,()=>{
    console.log("Listening");
});