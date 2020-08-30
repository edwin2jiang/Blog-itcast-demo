/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 20:48:14
 * @LastEditTime: 2020-08-28 16:06:06
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\model\comment.js
 * @Description: 
 */


//导入mongoose
const mongoose = require('mongoose');
//创建用户集合规则
const CommentSchema = new mongoose.Schema({
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Article',
        required:true
    },
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    },
    content:{
        type:String,
        default:'作者大大写的不错.'
    }
})



//创建集合
const Comment = mongoose.model('Comment', CommentSchema);


//导出模块
module.exports = {
    Comment
}

