/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 13:48:55
 * @LastEditTime: 2020-08-27 11:08:54
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin.js
 * @Description: 
 */

//导入express
const express = require('express');
//开启路由
const admin = express.Router();


// get请求 - 获取页面信息
admin.get('/login', require('./admin/getPage/loginPage'));

admin.get('/user', require('./admin/getPage/userPage'));
admin.get('/user-edit', require('./admin/getPage/user-edit-Page'));

admin.get('/article-edit', require('./admin/getPage/article-edit-Page'));
admin.get('/article', require('./admin/getPage/articlePage'));

//退出请求
admin.get('/logout', require('./admin/logout'))



// post请求
admin.post('/login', require('./admin/login'));

admin.post('/user-edit', require('./admin/user-edit'));
admin.post('/user-modify', require('./admin/user-modify'));
admin.post('/user-delete', require('./admin/user-delete'));


admin.post('/article-add', require('./admin/article-add'));
admin.post('/article-delete', require('./admin/article-delete'));
admin.post('/article-edit', require('./admin/article-edit'));

//模块导出
module.exports = admin;