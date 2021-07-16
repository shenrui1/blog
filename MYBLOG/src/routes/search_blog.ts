var express = require('express');

const Blog_search = require('../model/blog').Blog;
let sear_classtable = require('../model/class').Class;

var router = express.Router();

router.get('/', (req: any, res: any, next: any) => {
    res.render('administrators/search_blog', {title: req.session.userName});
});

router.post('/', async (req: any, res: any) => {
    let {blogName, blogClass} = req.body;

    if(blogName.trim().length == 0 && blogClass == 0) {
        res.status(400).render('error', {mes: '请输入文章名或选择文章类别！', error: Error});
    }

    if(blogName.trim().length != 0) {  // 按文章名查询文章
        let blog = await Blog_search(blogName.trim(), 3);
        if(blog) {
            res.render('administrators/search_blog', {title: req.session.userName, blogName: blog.blogName, blogAuthor: blog.blogAuthor, blogDate: blog.blogDate, blogClass: blog.blogClass, blogContent: blog.blogContent});
        }
        else res.status(400).render('error', {mes: '未查询到相关文章！', error: Error});
    }

    else {
        let fin_class = [];
        if (typeof blogClass == 'string') fin_class.push(blogClass);
        else fin_class = blogClass;
        if(fin_class.length != 0) {  // 按类别查询文章
            let blog_name: any = [];
            for(let m = 0; m < fin_class.length; m++) {
                let re = await sear_classtable(fin_class[m], 3);
                let flag = 0;
                for(let j = 0; j < re.length; j++) {
                    for(let n = 0; n < blog_name.length; n++) {
                        if(blog_name[n].classBlog == re[j].classBlog) flag = 1;
                    }
                    if(!flag) blog_name.push(re[j]);
                }
            }
            
            let blog = [];
            for(let k = 0; k < blog_name.length; k++) {
                blog.push(await Blog_search(blog_name[k].classBlog, 3));
            }

            if(!blog.length) res.status(400).render('error', {mes: '未查询到相关文章！', error: Error});
            else {
                for(let i = 0; i < blog.length; i++) {
                    blog[i].blogContent = blog[i].blogContent.substr(0, 100);
                }
        
                let getblog = '';
                for(let j = 0; j < blog.length; j++) {
                    getblog += '<div class="each_blog">';
                    getblog += '<form action="/search_blog" method="post"><input type="submit" name="blogName" value="' + blog[j].blogName + '" style="background-color: white; font-weight: 700; font-size: 30px;"></form>';
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
                res.render('administrators/search_class', {title: req.session.userName, blogList: getblog});
            }
        }
    }

    
})


module.exports = router;
