const { Article } = require("../../../model/article");

module.exports = async (req,res,next)=>{
    // res.send(req.query.id)
    let article = await Article.findOne({_id:req.query.id});
    if (article){
        res.render('admin/article-edit', {
            msg: req.query.msg,
            link:"/admin/article-edit?id="+req.query.id,
            button:"修改",
            article:article,
            currentLink:'article'
        });
    }else{
        res.render('admin/article-edit', {
            msg: req.query.msg,
            link:"/admin/article-add",
            button:"增加",
            currentLink:'article'
        });
    }
    
}