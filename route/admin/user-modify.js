/*
 * @Author: 夏2同学
 * @Date: 2020-08-24 14:11:32
 * @LastEditTime: 2020-08-24 17:55:39
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\user-modify.js
 * @Description: 
 */ 
const {User} = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async(req,res,next)=>{
    const id = req.query.id;
    const body = req.body;
    const result = await User.updateOne({_id:id},body);
    //修改成功
    if (result.nModified>=1){
        console.log ("用户信息修改成功"); 
    }
    res.redirect('/admin/user');
}