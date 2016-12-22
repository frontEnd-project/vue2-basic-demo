var path = require("path");
var express = require("express");
var app = express();

app.use('/static', express.static('./static'))

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})

app.listen(8888,function () {
    console.log("服务器开启成功");
})