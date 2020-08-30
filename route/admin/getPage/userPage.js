/*
 * @Author: 夏2同学
 * @Date: 2020-08-22 09:51:18
 * @LastEditTime: 2020-08-28 16:45:04
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\getPage\userPage.js
 * @Description: 
 */

const {User} = require('../../../model/user');

module.exports = async (req,res)=>{

    
    let page = req.query.page || 1;
    let size = 10;
    let count = await User.countDocuments({});
    let total = Math.ceil(count/size);
    
    const users = await User.find({}).limit(size).skip((page-1)*size);
    // console.log(`总页数=${total}  总文档数=${count}  当前页=${page}`);

    let totalArr = [];
    for (let index = 0; index < total; index++) {
       totalArr[index] = index+1;
    }
    
    res.render('admin/user',{
        users,
        page,
        totalArr,
        total,
        count,
        currentLink:'user'
    });
}