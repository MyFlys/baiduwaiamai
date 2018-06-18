const express = require("express")
const app = express();
const guild = require("./guild.json")


app.use("/api/guild",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(guild)
})


app.listen(8080,()=>{
    console.log("api server is ready on port 8080")
})
