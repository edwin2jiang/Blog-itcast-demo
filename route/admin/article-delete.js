/*
 * @Author: 夏2同学
 * @Date: 2020-08-27 10:19:40
 * @LastEditTime: 2020-08-29 09:04:01
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\route\admin\article-delete.js
 * @Description: 
 */
const {Article} = require('../../model/article');
module.exports = async (req,res)=>{
    let id = req.body.id;
    let i = await Article.findOneAndDelete({_id:id});
    if (i){
        console.log ("删除文章成功");
    }else{
        console.log (i);
    }
    res.redirect('/admin/article');
}