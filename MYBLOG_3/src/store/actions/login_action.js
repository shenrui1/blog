import axios from 'axios';

export const changeUserAction = (value) => ({
    type: 'username',
    value: value
})

export const changePasswordAction = (value) => ({
    type: 'userpassword',
    value: value
})

export const loginAction = () => ({
    type: 'login'
})

export const delAction = (index) => ({
    type: 'delete',
    index
})

export const getDataAction = (data) => ({
    type: 'getdata',
    data
})

// export const componentDidMountAction = () => {
//     return (dispatch) => {
//         axios
//         .post('http://localhost:3001/login', {})
//         .then((res) => {
//             const data = res.data;
//             const action = getDataAction(data);
//             dispatch(action);
//         })
//         .catch((err) => {
//             alert('用户名或密码错误！');
//             this.props.history.push('/login');
//         })
//     }
// }