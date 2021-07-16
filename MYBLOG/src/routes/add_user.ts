var express = require('express');

const UUser_add = require('../model/user').User;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('/administrators/admin', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {userName, userPassword, userAdmin} = req.body;

    if(userName.trim().length == 0 || userPassword.trim().length == 0) {
        res.status(400).render('error', {mes: '请输入用户名或密码！', error: Error});
    }

    let user = await UUser_add(userName, 3);  // 查询用户是否存在
    if(user) res.status(400).render('error', {mes: '用户已存在！', error: Error});
    else {
        await UUser_add({'userName': userName, 'userPassword': userPassword, 'userAdmin': userAdmin}, 1);
        res.redirect('/admin');
    }    
})


module.exports = router;
