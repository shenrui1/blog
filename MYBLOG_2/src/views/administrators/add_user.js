import React, { Component } from 'react';
import './add_user.css';

export default class AddUser extends Component {
    state = {
        userAdmin: 1,
        userName: '',
        userPassword: ''
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="add_user">
                <h2>添加新账号</h2>
                <form action="../routes/admin/add_user_post" method="post" id="addUser">
                <table>
                    <tbody><tr>
                        <td>选择用户类型：</td>
                        <td>
                        <select name="userAdmin" id="userAdmin" value={this.state.userAdmin} onChange={this.handleChange} >
                            <option value={1}>管理员</option>
                            <option value={0}>普通用户</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>设置用户名：</td>
                        <td>
                        <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>设置密码：</td>
                        <td>
                        <input name="userPassword" type="password" value={this.state.userPassword} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                        <input type="submit" defaultValue="添加" id="submit_id" />
                        </td>
                    </tr>
                    </tbody></table>
                </form>
            </div>
        )
    }
}
