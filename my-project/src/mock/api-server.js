const express = require("express");
const path=require("path")
const app = express();
//index数据
const IndexSectionNav = require("./IndexSectionNav.json")
const IndexSectionRecommend = require("./IndexSectionRecommend.json")
const IndexSectionMerchantNeardy = require("./IndexSectionMerchantNearby.json")
const IndexSectionMerchantHot = require("./IndexSectionMerchantHot.json")
// guild数据
const guildArtical = require("./guild-artical.json");
const guildSwiper = require("./guildSwiper.json");

//cater
const  carts = require("./carts.json");
const sp = require("./sp.json");

//cart
const data = require('./mycart.json');


//index发送
app.get("/api/SectionNav", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.json(IndexSectionNav)
})

app.get("/api/SectionRecommend", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.json(IndexSectionRecommend)
})
app.get("/api/SectionMerchantNearby", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.json(IndexSectionMerchantNeardy)
})
app.get("/api/SectionMerchantHot", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.json(IndexSectionMerchantHot)
})

//guild发送
app.use("/api/guild",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  console.log(guildArtical);
  // res.json(guild);
  res.json(guildArtical);
}),
  app.use("/api/guildSwiper",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    console.log(guildSwiper);
    guildSwiper.forEach((item,index)=>{
      if(item.id == req.query.id){
        // console.log(req.query.id)
        console.log(index)
        console.log(item)
        res.json(guildSwiper[index])
      }else{
      }
    })
    // res.json(guild);
    // res.json(guildSwiper);
  })

//shop发送
app.use(express.static(__dirname))
app.use('/ju',(req,res)=>{

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

  res.sendFile(path.resolve(__dirname,'shop-section.json'),"utf-8")
}),

//cater发送
app.use("/api/shopcarts",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(carts)
  // console.log(carts)
})

app.use("/api/sp",(req,res)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.json(sp)
})

//cart
app.get('/api/MyCartsApis',(req,res)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.json(data);
})

app.listen(8081,()=>{
    console.log("api server is ready on port 8081")
})
