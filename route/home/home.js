/*
 * @Author: 夏2同学
 * @Date: 2020-08-28 12:53:44
 * @LastEditTime: 2020-08-28 13:57:19
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\home\home.js
 * @Description: 
 */ 
const { Article } = require("../../model/article");
const pagination = require('mongoose-sex-page');

module.exports = async (req,res,next)=>{
    let page = req.query.page || 1;

    let result =  await pagination(Article).find().page(page).size(4).display(5).populate('author').exec();
    // res.send(result);
    
    res.render('home/default',{
        result
    })
}