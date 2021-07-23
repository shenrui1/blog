const defaultState = {
    userName: '请输入用户名',
    userPassword: '请输入密码',
    userList: []
};

export default (state = defaultState, action) => {
    if(action.type === 'username') {
        let newName = JSON.parse(JSON.stringify(state));
        newName.userName = action.value;
        return newName;
    }
    if(action.type === 'userpassword') {
        let newPassword = JSON.parse(JSON.stringify(state));
        newPassword.userPassword = action.value;
        return newPassword;
    }
    if(action.type === 'login') {
        let newList = JSON.parse(JSON.stringify(state));
        newList.userList.push({user: newList.userName, password: newList.userPassword});
        return newList;
    }
    if(action.type === 'delete') {
        let newList = JSON.parse(JSON.stringify(state));
        newList.userList.splice(action.index, 1);
        return newList;
    }
    if(action.type === 'getdata') {
        let newData = JSON.parse(JSON.stringify(state));
        newData.userList = action.data;
        return newData;
    }

    return state;
}