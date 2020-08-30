/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 20:48:05
 * @LastEditTime: 2020-08-27 23:58:19
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\model\connect.js
 * @Description: 
 */

//导入mongoose
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)   //加上这个消掉一个报错信息

const config = require('config');

//连接数据库
mongoose.connect(`mongodb://${config.get('db.username')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("数据库连接成功"))
        .catch(() => console.log("数据库连接失败"))

// console.log (`mongodb://${config.get('db.username')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`);