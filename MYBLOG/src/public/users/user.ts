$(function() {
    $('.blog_title').html($('.hidden_blog').text());

    // 定义退出登录事件
    var getLogout = document.querySelector('.logout');
    getLogout!.addEventListener('click', function() {
        window.location.href='/login';
    });

    // // 定义分类栏事件
    // let getNav = document.querySelector('nav')!;
    // let getLi = getNav.children[0].children;
    // for(let i = 0; i < getLi.length; i++) {
    //     getLi[i].addEventListener('mouseover', () => {
    //         $(getLi[i]).css('cursor', 'pointer');
    //     })
    //     getLi[i].addEventListener('click', function() {
    //         window.location.href = 'https://www.baidu.com/';
    //     })
    // }
})