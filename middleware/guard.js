/*
 * @Author: 夏2同学
 * @Date: 2020-08-22 08:53:21
 * @LastEditTime: 2020-08-22 08:54:23
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\midleware\guard.js
 * @Description: 
 */ 
module.exports = (req,res,next)=>{
    //如果不是访问的login,而且还没有登录
    if (req.url!='/login' && !req.session.username){
        res.redirect('/admin/login');
    }else{
        next();
    }
};