/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 20:48:14
 * @LastEditTime: 2020-08-26 10:35:40
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\model\aritcle.js
 * @Description: 
 */


//导入mongoose
const mongoose = require('mongoose');
//创建用户集合规则
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 40,
        required: [true, '请输入文章标题']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, '请输入文章作者'],
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: null
    },
    content: {
        type: String,
        required: [true, '请输入文章内容']
    }
})



//创建集合
const Article = mongoose.model('Article', articleSchema);


//导出模块
module.exports = {
    Article
}

