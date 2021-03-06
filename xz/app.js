//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const indexRoute=require("./routes/index_router");
const detailsRoute = require("./routes/details_router");
const productsRoute = require("./routes/products_router")
const cors = require("cors");
/*引入路由模块*/


var app = express();
var server = app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));

//托管静态资源到public目录下
app.use(express.static('public'));
//
app.use(cors({
  origin: ["http://localhost:8080", "http://127.0.0.1:5500"],
  credentials: true
}))
/*使用路由器来管理路由*/
app.use("/index",indexRoute);
app.use("/details",detailsRoute);
app.use("/products", productsRoute);