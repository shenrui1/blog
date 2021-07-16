var express = require('express');

const Blog_del = require('../model/blog').Blog;
let del_classtable = require('../model/class').Class;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('/administrators/admin', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {blogName} = req.body;

    if(blogName.trim().length == 0) {
        res.status(400).render('error', {mes: '请输入文章名！', error: Error});
    }

    let blog = await Blog_del(blogName, 3);  // 查询文章是否存在
    if(blog) {
        await del_classtable(blogName, 2);
        await Blog_del(blogName, 2);
        res.redirect('/admin');
    }
    else {
        res.status(400).render('error', {mes: '该文章不存在！', error: Error});
    }
})


module.exports = router;
