/*
 * @Author: 夏2同学
 * @Date: 2020-08-24 14:11:32
 * @LastEditTime: 2020-08-29 22:18:06
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\article-edit.js
 * @Description: 
 */ 
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');
module.exports = (req, res) => {
    const form = formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    form.keepExtensions = true;
    form.parse(req, async (error, fields, files) => {
        //mdNice存在就用mdNice
        let text = fields.mdNice ? fields.mdNice : fields.content;

        await Article.updateOne({_id:req.query.id},{
            title: fields.title,
            author: fields.author,
            publishDate: fields.publishDate,
            cover: files.cover.size===0? fields.imgUrl:files.cover.path.split('public')[1],
            content: text
        })

        res.redirect('/admin/article');

    });
}