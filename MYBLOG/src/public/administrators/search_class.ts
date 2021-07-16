$(function() {
    $('.main_content').html($('.hidden_blog').text());

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

})