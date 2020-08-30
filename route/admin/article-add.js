/*
 * @Author: 夏2同学
 * @Date: 2020-08-26 11:33:33
 * @LastEditTime: 2020-08-29 22:15:15
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\article-add.js
 * @Description: 
 *         注意点！！！uploadDir的目录一定要存在
 *           对于数据的上传类型是图像、文件 ， 一定要把 enctype改成multipart/form-data	
 */
const formidable = require('formidable');
const path = require('path');
const { Article } = require('../../model/article');
module.exports = async (req, res) => {
    const form = formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads');
    form.keepExtensions = true;
    form.parse(req, async (error, fields, files) => {
        // res.send(fields);
        if (fields.mdNice){
            await Article.create({
                title: fields.title,
                author: fields.author,
                publishDate: fields.publishDate,
                cover: files.cover.path.split('public')[1],
                content: fields.mdNice,
            })
        }else{
            await Article.create({
                title: fields.title,
                author: fields.author,
                publishDate: fields.publishDate,
                cover: files.cover.path.split('public')[1],
                content: fields.content,
            })
        }

        res.redirect('/admin/article');

    });
}