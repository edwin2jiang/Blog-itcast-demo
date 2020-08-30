/*
 * @Author: 夏2同学
 * @Date: 2020-08-28 12:53:33
 * @LastEditTime: 2020-08-28 16:40:22
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\home\article.js
 * @Description: 
 */
const { Article } = require("../../model/article");
const { Comment } = require('../../model/comment')

module.exports = async (req, res, next) => {
    let article = await Article.findOne({ _id: req.query.id }).populate('author');
    // res.send(article);
    let comments = await Comment.find({aid:req.query.id}).populate('uid');

    res.render('home/article', {
        article,
        comments
    })
}