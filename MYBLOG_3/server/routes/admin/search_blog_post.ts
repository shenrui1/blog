module.exports = async (req: any, res: any) => {
    let {blogName, blogClass} = req.body;

    if(blogName.trim().length == 0 && blogClass == 0) {
        res.json('请输入文章名或选择文章类别！');
    }

    if(blogName.trim().length != 0) {  // 按文章名查询文章
        let blog = await require('../admin').Blog_admin.searchSpeci(blogName.trim());
        if(blog) {
            res.json(blog);
        }
        else res.json('未查询到相关文章！');
    }

    else {  // 按类别查询
        let fin_class = [];
        if (typeof blogClass == 'string') fin_class.push(blogClass);
        else fin_class = blogClass;
        let blog_name: any = [];
        for(let m = 0; m < fin_class.length; m++) {
            let re = await require('../admin').class_table.searchSpeci(fin_class[m]);
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
            blog.push(await require('../admin').Blog_admin.searchSpeci(blog_name[k].classBlog));
        }

        if(!blog.length) res.json('未查询到相关文章！');
        else {
            for(let i = 0; i < blog.length; i++) {
                blog[i].blogContent = blog[i].blogContent.substr(0, 100);
            }

            res.json(blog);
        }
    }    
};