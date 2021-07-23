import React from 'react';
import '../../css/administrators/add_user.css';

const AddUserUI = (props) => {
    return (
        <div className="add_user">
            <h2>添加新账号</h2>
            <form id="addUser">
            <table>
                <tbody><tr>
                    <td>选择用户类型：</td>
                    <td>
                        <select name="userAdmin" id="userAdmin" value={props.userAdmin} onChange={props.handleChange}>
                            <option value={1}>管理员</option>
                            <option value={0}>普通用户</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>设置用户名：</td>
                    <td>
                    <input name="userName" type="text" value={props.userName} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>设置密码：</td>
                    <td>
                    <input name="userPassword" type="password" value={props.userPassword} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button id="submit_id" onClick={props.add}>添加</button>
                    </td>
                </tr>
                </tbody></table>
            </form>
        </div>
    )
}

export default AddUserUI;