var express = require('express');

const UUser_del = require('../model/user').User;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('/administrators/admin', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {userName} = req.body;

    if(userName.trim().length == 0) {
        res.status(400).render('error', {mes: '请输入用户名！', error: Error});
    }

    let user = await UUser_del(userName, 3);  // 查询用户是否存在
    if(user) {
        await UUser_del(userName, 2);
        res.redirect('/admin');
    }
    else {
        res.status(400).render('error', {mes: '该用户不存在！', error: Error});
    }

})


module.exports = router;
