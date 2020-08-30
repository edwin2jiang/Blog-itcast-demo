const { User } = require("../../../model/user");

/*
 * @Author: 夏2同学
 * @Date: 2020-08-22 16:28:17
 * @LastEditTime: 2020-08-27 10:38:22
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\getPage\user-edit-Page.js
 * @Description: 
 */
module.exports = async (req, res, next) => {

    let user = await User.findOne({ _id: req.query.id });

    if (user) {
        res.render('admin/user-edit', {
            msg: req.query.msg,
            link:"/admin/user-modify?id="+req.query.id,
            button:"修改",
            user:user,
            currentLink:'user'
        });
    } else {
        res.render('admin/user-edit', {
            msg: req.query.msg,
            link:"/admin/user-edit",
            button:"增加",
            currentLink:'user'
        });
    }

}