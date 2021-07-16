$(function() {    
    $('#allUsers').html($('.hidden_all').text());
    $('#allBlogs').html($('.hidden_all_blogs').text());
    
    // 定义退出登录事件
    var getLogout = document.querySelector('.logout');
    getLogout!.addEventListener('click', function() {
        window.location.href='/login';
    });

    var getAllUser = document.querySelector('.first_level')!.children[0].children[0];
    var getAllBlog = document.querySelector('.first_level')!.children[1].children[0];
    var getUser = document.querySelector('.second_level_user')!.children;
    var getadministrator = document.querySelector('.second_level_blog')!.children;
    var getMainContent = document.querySelector('.main_content')!.children;
    getAllUser.addEventListener('mouseover', () => {
        $(getAllUser).css('cursor', 'pointer');
    });
    getAllBlog.addEventListener('mouseover', () => {
        $(getAllBlog).css('cursor', 'pointer');
    });
    for(let j = 0; j < getUser.length; j++) {
        getUser[j].addEventListener('mouseover', () => {
            $(getUser[j]).css('cursor', 'pointer');
        });
    }
    for(let k = 0; k < getadministrator.length; k++) {
        getadministrator[k].addEventListener('mouseover', () => {
            $(getadministrator[k]).css('cursor', 'pointer');
        });
    }
    getAllUser.addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[0]).show();
    });
    getAllBlog.addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[1]).show();
    });
    getUser[0].addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[2]).show();
    });
    getUser[1].addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[3]).show();
    });
    getadministrator[0].addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[4]).show();
    });
    getadministrator[1].addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[5]).show();
    });
    getadministrator[2].addEventListener('click', () => {
        for(let i = 0; i < getMainContent.length; i++) {
            $(getMainContent[i]).hide();
        }
        $(getMainContent[6]).show();
    });

    // 添加用户事件
    $('#addUser').on('submit', () => {
        let getForm = formToDic($('#addUser'));
        
        if($.trim(getForm.userName).length == 0) {
            alert('请输入用户名');
            return false
        }
        if($.trim(getForm.userPassword).length == 0) {
            alert('请输入密码');
            return false
        }
        if($.trim(getForm.userPassword).length < 3 || $.trim(getForm.userPassword).length > 6) {
            alert('注意：密码不合规范！');
            return false
        }
    });

    // 删除用户事件
    $('#delUser').on('submit', () => {
        let getForm = formToDic($('#delUser'));
        
        if($.trim(getForm.userName).length == 0) {
            alert('请输入用户名');
            return false
        }
    });

    // 添加新文章事件
    $('#addBlog').on('submit', () => {
        var getForm = formToDic($('#addBlog'));

        var getName = $('input:checkbox[name="blogClass"]:checked');
        let getaaa: any[] = [];
        for (let i = 0; i < getName.length; i++) {
            getaaa.push((getName[i] as any).value);
        }
        getForm.blogClass = getaaa;
        
        if($.trim(getForm.blogName).length == 0) {
            alert('请输入文章名');
            return false
        }
        if($.trim(getForm.blogContent).length == 0) {
            alert('请输入文章内容');
            return false
        }
    });

    // 查询文章事件
    $('#searchBlog').on('submit', () => {
        let getForm = formToDic($('#searchBlog'));
        
        var getName = $('input:checkbox[name="blogClass"]:checked');
        let getbbb: any[] = [];
        for (let i = 0; i < getName.length; i++) {
            getbbb.push((getName[i] as any).value);
        }
        getForm.blogClass = getbbb;

        if($.trim(getForm.blogName).length == 0 && getForm.blogClass == 0) {
            alert('请输入文章名或选择文章类别');
            return false
        }
    });

    // 删除文章事件
    $('#delBlog').on('submit', () => {
        let getForm = formToDic($('#delBlog'));
        
        if($.trim(getForm.blogName).length == 0) {
            alert('请输入文章名');
            return false
        }
    });

    function formToDic(form: any) {
        let result: any = {};
        let org = form.serializeArray();
        org.forEach((item: any) => {
            result[item.name] = item.value;
        });
        return result;
    }
})