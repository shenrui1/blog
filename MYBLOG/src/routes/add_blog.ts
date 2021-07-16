var express = require('express');

let Blog_add = require('../model/blog').Blog;
let add_classtable = require('../model/class').Class;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('/administrators/admin', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {blogName, blogAuthor, blogClass, blogContent} = req.body;

    if(blogName.trim().length == 0 || blogContent.trim().length == 0) {
        res.status(400).render('error', {mes: '请输入文章名称或内容！', error: Error});
    }

    let blog = await Blog_add(blogName, 3);  // 查询文章是否存在
    if(blog) res.status(400).render('error', {mes: '文章名称已存在！', error: Error});
    else {
        let blogDate = new Date();

        let fin_class = [];
        if (typeof blogClass == 'string') fin_class.push(blogClass);
        else fin_class = blogClass;
        
        await Blog_add({'blogName': blogName, 'blogAuthor': blogAuthor, 'blogDate': blogDate, 'blogClass': fin_class.join(','), 'blogContent': blogContent}, 1);
        
        for(let k = 0; k < fin_class.length; k++) {
            await add_classtable({'className': fin_class[k], 'classBlog': blogName}, 1);
        }
        
        res.redirect('/admin');
    }  
})


// 将路由对象作为模块成员导出
module.exports = router;
