module.exports = async (req: any, res: any) => {
    let {blogName} = req.body;
    let blog = await require('../user').Blog_blog.searchSpeci(blogName);
    let blog_con = require('../user').md_html(blog.blogContent);
    blog.blogContent = blog_con;
    
    res.json(blog);
};