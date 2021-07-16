var express = require('express');

let UUser_ad = require('../model/user').User;
let Blog_ad = require('../model/blog').Blog;

var router = express.Router();

router.get('/', async (req: any, res: any, next: any) => {
    let user = await UUser_ad('', 4);
    let aa = ['普通用户', '管理员'];
    let geta = '';
    for(let i = 0; i < user.length; i++) {
        geta += '<tr>';
        geta += '<td>' + (i + 1) + '</td>';
        geta += '<td>' + user[i].userName + '</td>';
        geta += '<td>' + user[i].userPassword + '</td>';
        geta += '<td>' + aa[user[i].userAdmin] + '</td>';
        // geta += '<td><button>删除</button></td>';
        geta += '</tr>';
    }

    let blog = await Blog_ad('', 4);
    let getb = '';
    for(let j = 0; j < blog.length; j++) {
        getb += '<tr>';
        getb += '<td>' + (j + 1) + '</td>';
        getb += '<td>' + blog[j].blogName + '</td>';
        getb += '<td>' + blog[j].blogAuthor + '</td>';
        getb += '<td>' + blog[j].blogDate + '</td>';
        getb += '<td>' + blog[j].blogClass + '</td>';
        // getb += '<td><button>删除</button></td>';
        getb += '</tr>';
    }

    res.render('administrators/admin', {title: req.session.userName, renderUsers: geta, renderBlogs: getb});
});


module.exports = router;
