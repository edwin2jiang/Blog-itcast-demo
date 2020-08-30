/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 13:40:14
 * @LastEditTime: 2020-08-28 15:22:12
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\app.js
 * @Description: 
 */

//导入express框架
const express = require('express');
//导入path模块
const path = require('path');
//导入body-parser
const bodyParser = require('body-parser');
//导入express-session
const session = require('express-session');
//导入morgan
const morgan = require('morgan');
//导入config
const config = require('config');

//导入art-template
const template = require('art-template');
//导入
const dateformat = require('dateformat');

//创建web服务器
let app = express();

//开放静态资源
app.use(express.static(path.join(__dirname, "public")));

//连接数据库
require('./model/connect');

//创建用户
require('./model/user')

//引入路由模块
const home = require('./route/home');
const admin = require('./route/admin');
const { json } = require('body-parser');

//使用bodyParser
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

if (process.env.NODE_ENV === "development") {
    console.log("当前是开发环境");
    // app.use(morgan('dev'));
} else {
    console.log("当前是生产环境");
}


//使用express-session处理请求
app.use(session(
    {
        secret: 'secret key',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));



//登录拦截
app.use('/admin', require('./middleware/guard'));

//为路由匹配请求路径
app.use('/home', home);
app.use('/admin', admin);

//匹配根目录下的网站
app.get('/',require('./route/home/home'));

//错误处理
app.use((err, req, res, next) => {
    return console.log(err);
    // const result = JSON.parse(err);
    // res.redirect(`${result.path}?msg=${result.msg}`);
})

//配置express模板引擎的位置
app.set('views', path.join(__dirname, "views"));
//配置express框架模板的默认后缀
app.set('view engine', 'art');
//配置express的渲染引擎（当后缀名为art的时候）
app.engine('art', require('express-art-template'));


//配置template
template.defaults.imports.dateformat = dateformat;


//监听端口
app.listen(80);
console.log("服务器启动了");