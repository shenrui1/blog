module.exports = async (req: any, res: any) => {
    let {userName, userPassword, userAdmin} = req.body;

    if(userName.trim().length == 0 || userPassword.trim().length == 0) {
        res.json('请输入用户名或密码！');
    }

    let user = await require('../admin').User_user.searchSpeci(userName);  // 查询用户是否存在
    if(user) res.json('用户已存在！');
    else {
        await require('../admin').User_user.add({'userName': userName, 'userPassword': userPassword, 'userAdmin': userAdmin});
        res.json('添加成功！');
    }    
};