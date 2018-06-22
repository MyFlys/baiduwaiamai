const express = require('express')
const http = require("http")
const path = require("path")
const app = express();

const data = require('./mycart.json');


app.get('/api/MyCartsApis',(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.json(data);
})

app.listen(8081,()=>{
    console.log("server is ready on port 8081")
})
