/*
 * @Author: 夏2同学
 * @Date: 2020-08-24 21:11:23
 * @LastEditTime: 2020-08-24 21:17:47
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\user-delete.js
 * @Description: 
 */ 

const { User } = require("../../model/user");
module.exports = async(req,res)=>{
    let id = req.body.id;
    await User.findOneAndDelete({_id:id});
    res.redirect('/admin/user');
}