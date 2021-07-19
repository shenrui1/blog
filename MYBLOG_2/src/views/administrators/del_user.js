import React, { Component } from 'react';
import './del_user.css';

export default class DelUser extends Component {
    state = {
        deluser_name: ''
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="delete_user">
                <h2>删除账号</h2>
                <form action="../routes/admin/del_user_post" method="post" id="delUser">
                <table>
                    <tbody><tr>
                        <td>删除用户名：</td>
                        <td>
                        <input name="userName" id="deluser_name" type="text" value={this.state.deluser_name} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                        <input type="submit" defaultValue="确认删除" id="delete_id" />
                        </td>
                    </tr>
                    </tbody></table>
                </form>
            </div>
        )
    }
}
