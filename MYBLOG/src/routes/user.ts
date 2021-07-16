var express = require('express');

const Blog_all = require('../model/blog').Blog;

var router = express.Router();

router.get('/', async (req: any, res: any, next: any) => {
    let blog = await Blog_all('', 4);

    for(let i = 0; i < blog.length; i++) {
        blog[i].blogContent = blog[i].blogContent.substr(0, 100);
    }

    let getblog = '';
    for(let j = 0; j < blog.length; j++) {
        getblog += '<div class="each_blog">';
        getblog += '<h3><form action="/blogtext" method="post"><input type="submit" name="blogName" value="' + blog[j].blogName + '"></form></h3>';
        getblog += '<div class="information">';
        getblog += '<p class="light">' + blog[j].blogAuthor + '&nbsp;&nbsp;&nbsp;' + blog[j].blogDate + '</p>';
        getblog += '<p class="keys">' + blog[j].blogClass + '</p>';
        getblog += '</div>';
        let con_str = JSON.stringify(blog[j].blogContent);
        con_str = con_str.replace(/\ +/g,"");
        con_str = con_str.replace(/[\r\n]/g,"");
        getblog += '<div>' + con_str + '</div>';
        getblog += '</div>';
    }

    res.render('users/user', {title: req.session.userName, blogList: getblog});
});


module.exports = router;
