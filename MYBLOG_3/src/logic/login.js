import React, { Component } from 'react';
import store from '../store/index';
import LoginUI from '../ui/loginUI';
import axios from 'axios';
import {common} from '../app';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }
    
    render() {
        return (
            <LoginUI
                userName = {this.state.userName}
                userPassword = {this.state.userPassword}
                changeUser = {this.changeUser}
                changePassword = {this.changePassword}
                login = {this.login}
            />
        )
    }

    changeUser = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    changePassword = (e) => {
        this.setState({
            userPassword: e.target.value
        })
    }

    login = () => {
        if(!this.state.userName.trim().length || this.state.userName == '请输入用户名') {
            alert('请输入用户名');
            return;
        }
        else if(!this.state.userPassword.trim().length || this.state.userPassword == '请输入密码') {
            alert('请输入密码');
            return;
        }

        axios
        .post('http://localhost:3001/login', {userName: this.state.userName, userPassword: this.state.userPassword})
        .then(async (res) => {
            let data = res.data;
            if(data == '请输入用户名或密码！') alert(data);
            else if(data == '用户名或密码错误！') alert(data);
            else {
                common.emit('curuser', {
                    curuser: data.userName
                })
                if(data.userAdmin) this.props.history.push('/admin');
                else {
                    await axios
                    .post('http://localhost:3001/user')
                    .then((res) => {
                        const res_data = res.data;
                        common.emit('inuser', {
                            userList: res_data
                        });
                    });
                    this.props.history.push('/user_login');
                }
            }
        });
    }   
}
