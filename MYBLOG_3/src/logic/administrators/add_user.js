import React, { Component } from 'react';
import AddUserUI from '../../ui/administrators/add_userUI';
import axios from 'axios';
import {common} from '../../app';


export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userAdmin: 0,
            userName: '',
            userPassword: ''
        }
    }
    
    render() {
        return (
            <AddUserUI
                handleChange = {this.handleChange}
                add = {this.add}
            />
        )
    }

    handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    add = () => {
        if(!this.state.userName.trim().length) alert('请输入用户名！');
        else if(!this.state.userPassword.trim().length) alert('请输入密码！');
        else {
            axios
            .post('http://localhost:3001/admin/add_user_post', {userName: this.state.userName, userPassword: this.state.userPassword, userAdmin: this.state.userAdmin})
            .then((res) => {
                if(res.data !== '添加成功！') alert(res.data);
                else {
                    alert(res.data);
                    axios
                    .post('http://localhost:3001/admin/users')
                    .then((res) => {
                        let data = res.data;
                        common.emit('admin_users', {
                            userList: data
                        })
                        this.props.history.push('/admin/user');
                    });
                }
            });
        }
    }
}
