/*
 * @Author: 夏2同学
 * @Date: 2020-08-22 09:22:20
 * @LastEditTime: 2020-08-28 15:28:37
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\logout.js
 * @Description: 
 */ 
module.exports = (req,res)=>{
    req.session.destroy(function(){
        req.app.locals.userInfo = null;
        res.clearCookie('connect.sid');
        res.redirect('/admin/login');
    })
}