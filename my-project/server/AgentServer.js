const https = require("https")
const CARTSLIKELISTURLAPI = "https://h5.ele.me/restapi/shopping/v1/sale_list_index?type=quality_meal&latitude=34.343147&longitude=108.939621&params=%7B%22user_id%22%3A4375555%7D"
const express = require("express")
const app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.use("/CartsLikeList", (req, res) => {
    https.get(CARTSLIKELISTURLAPI, (response) => {
            let datas = ""
            response.on("data", (chunk) => {
                datas += chunk
            })
            response.on("end", () => {
                res.json(JSON.parse(datas.toString()))
            })
        })
})

app.listen(8888, () => {
    console.log("api server is ready on port 8888")
})