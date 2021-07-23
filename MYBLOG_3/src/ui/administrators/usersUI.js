import React from 'react';
import '../../css/administrators/users.css';

const UsersUI = (props) => {
    return (
        <div className="user">
            <h2>已注册账号</h2>
            <table cellSpacing={0}>
                <thead><tr>
                    <th>序号</th>
                    <th>用户名</th>
                    <th>密码</th>
                    <th>用户类型</th>
                </tr></thead>
                <tbody id="allUsers">
                    {
                        props.userList.map((item, key) => {
                            const ua = ['普通用户', '管理员'];
                            return (
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.userPassword}</td>
                                    <td>{ua[item.userAdmin]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UsersUI;