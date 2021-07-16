/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/public/login.js ***!
  \*****************************/
$(function () {
    var _this = this;
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
        // 想获取哪个表单的内容，就把那个表单写在.serializeArray前面，此处$(this)就是当前表单
        var getForm = formToDic($(_this));
        // console.log(getForm);
        // 用trim方法去除字符串两边的空格
        if (getForm.userName.trim().length == 0) {
            // 若用户没有输入用户名，则阻止程序向下执行
            // return false既可以阻止表单向下执行，又可以阻止表单提交
            alert('请输入用户名');
            return false;
        }
        if (getForm.userPassword.trim().length == 0) {
            // 若用户没有输入密码，则阻止程序向下执行
            // return false既可以阻止表单向下执行，又可以阻止表单提交
            alert('请输入密码');
            return false;
        }
        if (getForm.userPassword.trim().length < 3 || getForm.userPassword.trim().length > 6) {
            alert('注意：密码不合规范！');
            return false;
        }
        // alert('登录成功！');
        // get_input[0].value = '请输入用户名';
        // get_input[1].type = 'text';
        // get_input[1].value = '请输入密码';
        // 阻止表单默认提交
        // return false;
    });
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teWJsb2cvLi9zcmMvcHVibGljL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICB2YXIgZ2V0X2lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcclxuICAgIHZhciBnZXRfaW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XHJcbiAgICB2YXIgZ2V0X3RpcF8xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpcF8xJyk7XHJcbiAgICB2YXIgZmxhZyA9IDE7XHJcbiAgICBnZXRfaW5wdXRbMF0ub25mb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoZ2V0X2lucHV0WzBdLnZhbHVlID09ICfor7fovpPlhaXnlKjmiLflkI0nKSB7XHJcbiAgICAgICAgICAgIGdldF9pbnB1dFswXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRfaW5wdXRbMF0ub25ibHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChnZXRfaW5wdXRbMF0udmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgZ2V0X2lucHV0WzBdLnZhbHVlID0gJ+ivt+i+k+WFpeeUqOaIt+WQjSc7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGdldF9pbnB1dFsxXS5vbmZvY3VzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGdldF90aXBfMS5pbm5lckhUTUwgPSAn5a+G56CB6ZW/5bqm5Li6M3425L2N5LmL6Ze0JztcclxuICAgICAgICBnZXRfdGlwXzEuY2xhc3NOYW1lID0gJ3RpcF8yJztcclxuICAgICAgICBpZiAoZ2V0X2lucHV0WzFdLnZhbHVlID09ICfor7fovpPlhaXlr4bnoIEnICYmIGZsYWcgPT0gMSkge1xyXG4gICAgICAgICAgICBnZXRfaW5wdXRbMV0udmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2V0X2lucHV0WzFdLnZhbHVlID09ICfor7fovpPlhaXlr4bnoIEnICYmIGZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICBnZXRfaW5wdXRbMV0udHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIGdldF9pbnB1dFsxXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRfaW5wdXRbMV0ub25ibHVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChnZXRfaW5wdXRbMV0udmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgZ2V0X2lucHV0WzFdLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgIGdldF9pbnB1dFsxXS52YWx1ZSA9ICfor7fovpPlhaXlr4bnoIEnO1xyXG4gICAgICAgICAgICBnZXRfdGlwXzEuY2xhc3NOYW1lID0gJ3RpcF8xJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZ2V0X2lucHV0WzFdLnZhbHVlLmxlbmd0aCA8IDMgfHwgZ2V0X2lucHV0WzFdLnZhbHVlLmxlbmd0aCA+IDYpIHtcclxuICAgICAgICAgICAgZ2V0X3RpcF8xLmlubmVySFRNTCA9ICfms6jmhI/vvJrlr4bnoIHkuI3lkIjop4TojIPvvIEnO1xyXG4gICAgICAgICAgICBnZXRfdGlwXzEuY2xhc3NOYW1lID0gJ3RpcF8zJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGdldF90aXBfMS5jbGFzc05hbWUgPSAndGlwXzEnO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBnZXRfaW1nLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKGdldF9pbnB1dFsxXS50eXBlID09ICd0ZXh0Jykge1xyXG4gICAgICAgICAgICBnZXRfaW5wdXRbMV0udHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgICAgIGdldF9pbWcuc3JjID0gXCJpbWFnZXMvY2xvc2UucG5nXCI7XHJcbiAgICAgICAgICAgIGZsYWcgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZ2V0X2lucHV0WzFdLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgIGdldF9pbWcuc3JjID0gXCJpbWFnZXMvb3Blbi5wbmdcIjtcclxuICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgICQoJyNsb2dpbkZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluWIsOihqOWNleS4reeUqOaIt+i+k+WFpeeahOWGheWuue+8jOS8mui/lOWbnuS4gOS4quaVsOe7hO+8jOacieWHoOS4quihqOWNleaOp+S7tuaVsOe7hOS4reWwseacieWHoOS4quWvueixoVxyXG4gICAgICAgIC8vIOaDs+iOt+WPluWTquS4quihqOWNleeahOWGheWuue+8jOWwseaKiumCo+S4quihqOWNleWGmeWcqC5zZXJpYWxpemVBcnJheeWJjemdou+8jOatpOWkhCQodGhpcynlsLHmmK/lvZPliY3ooajljZVcclxuICAgICAgICB2YXIgZ2V0Rm9ybSA9IGZvcm1Ub0RpYygkKF90aGlzKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ2V0Rm9ybSk7XHJcbiAgICAgICAgLy8g55SodHJpbeaWueazleWOu+mZpOWtl+espuS4suS4pOi+ueeahOepuuagvFxyXG4gICAgICAgIGlmIChnZXRGb3JtLnVzZXJOYW1lLnRyaW0oKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAvLyDoi6XnlKjmiLfmsqHmnInovpPlhaXnlKjmiLflkI3vvIzliJnpmLvmraLnqIvluo/lkJHkuIvmiafooYxcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNl5pei5Y+v5Lul6Zi75q2i6KGo5Y2V5ZCR5LiL5omn6KGM77yM5Y+I5Y+v5Lul6Zi75q2i6KGo5Y2V5o+Q5LqkXHJcbiAgICAgICAgICAgIGFsZXJ0KCfor7fovpPlhaXnlKjmiLflkI0nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0Rm9ybS51c2VyUGFzc3dvcmQudHJpbSgpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIOiLpeeUqOaIt+ayoeaciei+k+WFpeWvhuegge+8jOWImemYu+atoueoi+W6j+WQkeS4i+aJp+ihjFxyXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2Xml6Llj6/ku6XpmLvmraLooajljZXlkJHkuIvmiafooYzvvIzlj4jlj6/ku6XpmLvmraLooajljZXmj5DkuqRcclxuICAgICAgICAgICAgYWxlcnQoJ+ivt+i+k+WFpeWvhueggScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZXRGb3JtLnVzZXJQYXNzd29yZC50cmltKCkubGVuZ3RoIDwgMyB8fCBnZXRGb3JtLnVzZXJQYXNzd29yZC50cmltKCkubGVuZ3RoID4gNikge1xyXG4gICAgICAgICAgICBhbGVydCgn5rOo5oSP77ya5a+G56CB5LiN5ZCI6KeE6IyD77yBJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gYWxlcnQoJ+eZu+W9leaIkOWKn++8gScpO1xyXG4gICAgICAgIC8vIGdldF9pbnB1dFswXS52YWx1ZSA9ICfor7fovpPlhaXnlKjmiLflkI0nO1xyXG4gICAgICAgIC8vIGdldF9pbnB1dFsxXS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIC8vIGdldF9pbnB1dFsxXS52YWx1ZSA9ICfor7fovpPlhaXlr4bnoIEnO1xyXG4gICAgICAgIC8vIOmYu+atouihqOWNlem7mOiupOaPkOS6pFxyXG4gICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG59KTtcclxuLy8g5oqK6KGo5Y2V6I635b6X55qE5pWw57uE6L2s5YyW5Li65a655piT55CG6Kej55qE5a+56LGhXHJcbmZ1bmN0aW9uIGZvcm1Ub0RpYyhmb3JtKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICB2YXIgb3JnID0gZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgb3JnLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXN1bHRbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==