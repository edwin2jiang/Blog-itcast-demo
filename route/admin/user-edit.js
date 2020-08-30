/*
 * @Author: 夏2同学
 * @Date: 2020-08-22 16:11:16
 * @LastEditTime: 2020-08-24 21:53:53
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\user-edit.js
 * @Description: 
 */

const { User, createUser, validateUser } = require('../../model/user');
module.exports = async (req, res, next) => {
    try {
        await validateUser(req.body);
    }
    catch (err) {
        return res.redirect('/admin/user-edit?msg=' + err.message);
    }
    //验证邮箱是否有人注册
    let user = await User.findOne({ email: req.body.email });
    console.log(user);
    if (user) {
        //如果用户已将存在说明被占用了
        return res.redirect('/admin/user-edit?msg=邮箱已被占用');
    }

    //添加到数据库中
    console.log(req.body);
    try {
        await createUser(req.body);
    }
    catch (err) {
        return res.redirect('/admin/user-edit?msg='+err.message);
    }
    res.redirect('/admin/user');
}