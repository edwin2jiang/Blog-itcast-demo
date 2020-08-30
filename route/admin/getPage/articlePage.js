/*
 * @Author: 夏2同学
 * @Date: 2020-08-25 10:41:28
 * @LastEditTime: 2020-08-28 16:45:25
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\getPage\articlePage.js
 * @Description: 
 */

const { Article } = require("../../../model/article");
const pagination = require('mongoose-sex-page');
module.exports =  async (req, res, next) => {
    let page = req.query.page;
    req.app.locals.currentLink = 'article';
    let size = 10;
    let articles = await pagination(Article).find({}).page(page).size(size).display(3).populate('author').exec();
    let count = await Article.count({});
    // res.send(articles);
    res.render('admin/article',{
        articles,
        count
    });
}