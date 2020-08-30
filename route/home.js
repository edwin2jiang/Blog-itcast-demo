/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 13:49:15
 * @LastEditTime: 2020-08-28 15:46:44
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\home.js
 * @Description: 
 */ 

const express = require('express');
const home = express.Router();

home.get('/',require('./home/home'));

home.get('/article',require('./home/article'));

home.post('/comment-add',require('./home/comment-add'))

module.exports = home; 
