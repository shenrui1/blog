module.exports = async (req: any, res: any) => {
    let {userName} = req.body;

    if(userName.trim().length == 0) {
        res.json('请输入需删除账号！')
    }

    let user = await require('../admin').User_user.searchSpeci(userName);  // 查询用户是否存在
    if(user) {
        await require('../admin').User_user.del(userName);
        res.json('删除成功！');
    }
    else {
        res.json('该用户不存在！');
    }
};