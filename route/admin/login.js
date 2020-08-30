/*
 * @Author: 夏2同学
 * @Date: 2020-08-22 08:57:48
 * @LastEditTime: 2020-08-28 15:18:22
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\login.js
 * @Description: 
 */

//导入User集合
const { User } = require("../../model/user");
//导入加密工具
const bcrypt = require('bcrypt');
module.exports = async (req, res) => {
    const { email, password } = req.body;
    if (email.trim().length === 0 || password.trim().length === 0) {
        res.status(400).send({ status: 400, msg: "邮箱或者密码为空" });
    }
    // 必须把它进行异步处理
    const user = await User.findOne({ email: email });

    // 邮箱不存在
    if (!user) {
        return res.status(400).send({ status: 400, msg: "该邮箱尚未被注册" });
    }

    // 用户存在
    const isEqual = await bcrypt.compare(password, user.password);
    if (isEqual) {
        req.app.locals.userInfo = user;
        req.session.user = user;
        //管理员用户
        if (user.role === 'admin') {
            req.session.username = user.username;
            res.redirect('/admin/user');
        } else {
            //普通用户
            res.redirect('/home');
        }
    } else {
        res.status(400).send({ status: 400, msg: "密码错误" });
    }

}