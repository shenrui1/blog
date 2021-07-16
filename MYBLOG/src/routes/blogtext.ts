var express = require('express');
let md_html_b = require('marked');

const Blog_each = require('../model/blog').Blog;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('users/blogtext', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {blogName} = req.body;
    let blog = await Blog_each(blogName, 3);
    let blog_con = md_html_b(blog.blogContent);
    res.render('users/blogtext', {title: req.session.userName, blogName: blog.blogName, blogAuthor: blog.blogAuthor, blogDate: blog.blogDate, blogClass: blog.blogClass, blogContent: blog_con});
})


module.exports = router;
