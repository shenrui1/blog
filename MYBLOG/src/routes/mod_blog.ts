var express = require('express');

let Blog_mod = require('../model/blog').Blog;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('/administrators/search_blog', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {o_blogName, blogName, blogAuthor, blogClass, blogContent} = req.body;

    if(blogName.trim().length == 0 || blogClass.length == 0 || blogContent.length == 0) {
        res.status(400).render('error', {mes: '文章信息不全！', error: Error});
    }

    await Blog_mod(o_blogName, 2);  // 删除文章

    // 添加文章
    let blogDate = new Date();
    let fin_class = [];
    if (typeof blogClass == 'string') fin_class.push(blogClass);
    else fin_class = blogClass;
    await Blog_mod({'blogName': blogName, 'blogAuthor': blogAuthor, 'blogDate': blogDate, 'blogClass': fin_class.join(','), 'blogContent': blogContent}, 1);
    res.redirect('/admin');
})


module.exports = router;
