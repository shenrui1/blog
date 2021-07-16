$(function() {    
    // 定义退出登录事件
    var getLogout = document.querySelector('.logout');
    getLogout!.addEventListener('click', function() {
        window.location.href='/login';
    });

    var getAllUser = document.querySelector('.first_level')!.children[0].children[0];
    getAllUser.addEventListener('mouseover', () => {
        $(getAllUser).css('cursor', 'pointer');
    });
    getAllUser.addEventListener('click', () => {
        window.location.href='/admin';
    });

    // 修改文章事件
    $('#modBlog').on('submit', () => {
        var getForm = formToDic($('#modBlog'));

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
    
    function formToDic(form: any) {
        let result: any = {};
        let org = form.serializeArray();
        org.forEach((item: any) => {
            result[item.name] = item.value;
        });
        return result;
    }
})

