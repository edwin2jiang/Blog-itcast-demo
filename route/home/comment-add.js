/*
 * @Author: 夏2同学
 * @Date: 2020-08-28 15:46:00
 * @LastEditTime: 2020-08-28 16:12:49
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\home\comment-add.js
 * @Description: 
 */ 
const {Comment} = require('../../model/comment');
module.exports = async (req,res)=>{
    const data = req.body;
    // res.send(comment);
    data["date"] = new Date();

    Comment.create(data);

    res.redirect('/home/article?id='+ data.aid);
}