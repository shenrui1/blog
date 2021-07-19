$(function () {
    $('article').html($('.hidden').text());
    // 定义返回主页事件
    var getBackHome = document.querySelector('.backhome');
    getBackHome.addEventListener('click', function () {
        window.location.href = '/user';
    });
    // 定义退出登录事件
    var getLogout = document.querySelector('.logout');
    getLogout.addEventListener('click', function () {
        window.location.href = '/login';
    });
});
