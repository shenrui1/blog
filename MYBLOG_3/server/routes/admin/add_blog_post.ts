module.exports = async (req: any, res: any) => {
    let {blogName, blogAuthor, blogClass, blogContent} = req.body;

    if(blogName.trim().length == 0 || blogContent.trim().length == 0) {
        res.json('请输入文章名称或内容！');
    }

    let blog = await require('../admin').Blog_admin.searchSpeci(blogName);  // 查询文章是否存在
    if(blog) res.json('文章名称已存在！');
    else {
        let blogDate = new Date();

        let fin_class = [];
        if (typeof blogClass == 'string') fin_class.push(blogClass);
        else fin_class = blogClass;
        
        await require('../admin').Blog_admin.add({'blogName': blogName, 'blogAuthor': blogAuthor, 'blogDate': blogDate, 'blogClass': fin_class.join(','), 'blogContent': blogContent});
        
        for(let k = 0; k < fin_class.length; k++) {
            await require('../admin').class_table.add({'className': fin_class[k], 'classBlog': blogName});
        }

        res.json('添加成功！');
    }  
};