$(function () {
    var get_input = document.querySelectorAll('input');
    var get_img = document.querySelector('img');
    var get_tip_1 = document.querySelector('.tip_1');
    var flag = 1;
    get_input[0].onfocus = function () {
        if (get_input[0].value == '请输入用户名') {
            get_input[0].value = '';
        }
    };
    get_input[0].onblur = function () {
        if (get_input[0].value == '') {
            get_input[0].value = '请输入用户名';
        }
    };
    get_input[1].onfocus = function () {
        get_tip_1.innerHTML = '密码长度为3~6位之间';
        get_tip_1.className = 'tip_2';
        if (get_input[1].value == '请输入密码' && flag == 1) {
            get_input[1].value = '';
        }
        else if (get_input[1].value == '请输入密码' && flag == 0) {
            get_input[1].type = 'password';
            get_input[1].value = '';
        }
    };
    get_input[1].onblur = function () {
        if (get_input[1].value == '') {
            get_input[1].type = 'text';
            get_input[1].value = '请输入密码';
            get_tip_1.className = 'tip_1';
        }
        else if (get_input[1].value.length < 3 || get_input[1].value.length > 6) {
            get_tip_1.innerHTML = '注意：密码不合规范！';
            get_tip_1.className = 'tip_3';
        }
        else {
            get_tip_1.className = 'tip_1';
        }
    };
    get_img.onclick = function () {
        if (get_input[1].type == 'text') {
            get_input[1].type = 'password';
            get_img.src = "images/close.png";
            flag = 0;
        }
        else {
            get_input[1].type = 'text';
            get_img.src = "images/open.png";
            flag = 1;
        }
    };
    $('#loginForm').on('submit', function () {
        // 获取到表单中用户输入的内容，会返回一个数组，有几个表单控件数组中就有几个对象
        var getForm = formToDic($('#loginForm'));
        // 用trim方法去除字符串两边的空格
        if (getForm.userName.trim().length == 0) {
            alert('请输入用户名');
            return false;
        }
        if (getForm.userPassword.trim().length == 0) {
            alert('请输入密码');
            return false;
        }
        if (getForm.userPassword.trim().length < 3 || getForm.userPassword.trim().length > 6) {
            alert('注意：密码不合规范！');
            return false;
        }
    });
    // 把表单获得的数组转化为容易理解的对象
    function formToDic(form) {
        var result = {};
        var org = form.serializeArray();
        org.forEach(function (item) {
            result[item.name] = item.value;
        });
        return result;
    }
});
