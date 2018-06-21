const express = require("express");
const app = express();
// const guild = require("./guild.json");
const guildArtical = require("./guild-artical.json");


app.use("/api/guild",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    console.log(guildArtical);
  // res.json(guild);
  res.json(guildArtical);
})


app.listen(8081,()=>{
    console.log("api server is ready on port 8081")
})
