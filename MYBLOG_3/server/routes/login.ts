var express = require('express');
var login = express.Router();
const Uuu = require('../model/user');


login.post('/login', async (req: any, res: any) => {
    let {userName, userPassword} = req.body;

    if(userName.trim().length == 0 || userPassword.trim().length == 0) {
        res.json('请输入用户名或密码！');
    }

    let user = await Uuu.searchSpeci(userName);  // 查询用户信息
    if(user) {
        if(userPassword == user.userPassword) {
            req.session.userName = user.userName;  // 将用户名存储在请求对象中
            res.json(user);
        }
        else {
            res.json('用户名或密码错误！');
        }
    }
    else {
        res.json('用户名或密码错误！');
    }
})


module.exports = login;