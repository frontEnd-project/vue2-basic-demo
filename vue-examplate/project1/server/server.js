var path = require("path");
var express = require("express");
var app = express();

//配置允许跨域
/*app.all('*', (req, res, next) => {
    const origin = req.headers.origin;
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');

    next();
});*/

app.get('/abc',function(req,res){
    res.json({
        ok:1
    })
})

app.listen(3000,function () {
    console.log("服务器开启成功");
})