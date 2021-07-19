import React, { Component } from 'react';
import './users.css';

export default class Users extends Component {
    render() {
        return (
            <div className="user">
                <h2>已注册账号</h2>
                <form>
                <table cellSpacing={0}>
                    <thead>
                    <tr><th>序号</th>
                        <th>用户名</th>
                        <th>密码</th>
                        <th>用户类型</th>
                        {/* <th>操作</th> */}
                    </tr></thead>
                    <tbody id="allUsers" />
                </table>
                </form>
            </div>
        )
    }
}
