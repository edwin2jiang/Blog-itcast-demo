/*
 * @Author: 夏2同学
 * @Date: 2020-08-11 20:48:14
 * @LastEditTime: 2020-08-24 21:51:44
 * @LastEditors: 夏2同学
 * @FilePath: \BlogService\model\user.js
 * @Description: 
 */


//导入mongoose
const mongoose = require('mongoose');
//导入加密工具
const bcrypt = require('bcrypt');
const Joi = require('joi');
//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        require: true
    },
    //0启用 1禁用
    state: {
        type: Number,
        default: 0
    }
})



//创建集合
const User = mongoose.model('User', userSchema);

async function createUser(obj) {
    const salt = await bcrypt.genSalt(10);
    let pass = await bcrypt.hash(obj.password,salt);
    obj.password = pass;
    
    User.create(obj);
}

const validateUser = (user)=>{
    const schema = Joi.object({
        username: Joi.string().required().min(4).max(20).error(new Error('用户名不合法')),
        password: Joi.string().required().regex(/^[0-9a-zA-Z]{6,30}$/).error(new Error('密码不合法')),
        email: Joi.string().email().required().error(new Error('邮箱不合法')),
        role: Joi.string().valid('admin', 'normal').required().error(new Error('身份不合法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态不合法'))
    })
    return schema.validateAsync(user);

}

//导出模块
module.exports = {
    User,
    createUser,
    validateUser
}

