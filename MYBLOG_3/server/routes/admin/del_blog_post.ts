module.exports = async (req: any, res: any) => {
    let {blogName} = req.body;

    if(blogName.trim().length == 0) {
        res.json('请输入文章名！');
    }

    let blog = await require('../admin').Blog_admin.searchSpeci(blogName);  // 查询文章是否存在
    if(blog) {
        await require('../admin').class_table.del(blogName);
        await require('../admin').Blog_admin.del(blogName);
        res.json('删除成功！');
    }
    else {
        res.json('该文章不存在！');
    }
};