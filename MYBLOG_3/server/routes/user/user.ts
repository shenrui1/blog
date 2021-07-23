module.exports = async (_req: any, res: any, _next: any) => {
    let blog = await require('../user').Blog_blog.searchAll();

    for(let i = 0; i < blog.length; i++) {
        blog[i].blogContent = blog[i].blogContent.substr(0, 100);
    }

    res.json(blog);
};
