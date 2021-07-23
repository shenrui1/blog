module.exports = async (req: any, res: any) => {
    let {o_blogName, blogName, blogAuthor, blogClass, blogContent} = req.body;

    if(blogName.trim().length == 0 || blogClass.length == 0 || blogContent.length == 0) {
        res.json('文章信息不全！');
    }

    await require('../admin').Blog_admin.del(o_blogName);  // 删除文章

    // 添加文章
    let blogDate = new Date();
    let fin_class = [];
    if (typeof blogClass == 'string') fin_class.push(blogClass);
    else fin_class = blogClass;
    await require('../admin').Blog_admin.add({'blogName': blogName, 'blogAuthor': blogAuthor, 'blogDate': blogDate, 'blogClass': fin_class.join(','), 'blogContent': blogContent});
    res.json('修改成功！');
};