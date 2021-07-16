var express = require('express');

const UUser = require('../model/user').User;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
  req.session.destroy();
  res.render('login');
});

router.post('/', async (req: any, res: any) => {
  let {userName, userPassword} = req.body;

  if(userName.trim().length == 0 || userPassword.trim().length == 0) {
    // send方法自动把http状态码设成200，此时出错，所以状态码不能再是200
    res.status(400).render('error', {mes: '用户名或密码错误', error: Error});
  }

  let user = await UUser(userName, 3);  // 查询用户信息
  if(user) {
    if(userPassword == user.userPassword) {
      req.session.userName = user.userName;  // 将用户名存储在请求对象中
      if(user.userAdmin == 0) res.redirect('/user');
      else res.redirect('/admin');
    }
    else {
      res.status(400).render('error', {mes: '用户名或密码错误', error: Error});
    }
  }
  else {
    res.status(400).render('error', {mes: '用户名或密码错误', error: Error});
  }
})


module.exports = router;
