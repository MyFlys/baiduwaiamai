const express = require("express")
const http = require("http")
const path = require("path")

const app = express();



app.use(express.static(__dirname))

app.use("/",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.sendFile(path.resolve(__dirname,"src/data/"),"utf-8")
})

app.listen(8081,()=>{
  console.log("server is ready on port 8081")
})
