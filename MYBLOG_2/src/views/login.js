import React, { Component } from 'react';
import './login.css';
// import store from '../store';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userPassword: ""
        }
        // this.state = store.getState();
        // store.subscibe(this.storeChange);
    }

    userCheck = () => {
        axios.get('db.json')
            .then(res => {
                for(let i = 0; i < res.data.user.length; i++) {
                    if(res.data.user[i].userName == this.state.userName && res.data.user[i].userPassword == this.state.userPassword) {
                        if(res.data.user[i].userAdmin == 0) {
                            return this.props.history.push('/user_login');
                        }
                        else {
                            return this.props.history.push('/admin');
                        }
                    }
                }
                alert('用户未注册！');
                return this.props.history.push('/login');
            })
            .catch(err => {
                return alert('无数据！');
            })
    }

    handleChange = e => {
        // const action = {
        //     type: 'userName',
        //     value: e.target.value
        // }
        // store.dispatch(action);

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    // storeChange = () => {
    //     this.setState(store.getState());
    // }

    onName = () => {
        if (this.state.userName == '请输入用户名') {
            this.setState({
                userName: ''
            })
        }
    }

    onPassword = () => {
        if (this.state.userPassword == '请输入密码') {
            this.setState({
                userPassword: ''
            })
        }
    }

    outName = () => {
        if (this.state.userName == '') {
            this.setState({
                userName: '请输入用户名'
            })
        }
    }

    outPassword = () => {
        if (this.state.userPassword == '') {
            this.setState({
                userPassword: '请输入密码'
            })
        }
    }

    // 获取用户输入的用户名和密码
    getNamePassword = () => {
        const {userName, userPassword} = this.state;
        if(userName.trim().length === 0) alert('请输入用户名！');
        else if(userPassword.trim().length === 0) alert('请输入密码！');
        else this.userCheck();
    }

    render() {
        return (
            <div>
                <div className="out_border">
                    <div className="login border_height">
                        <h3>博客登录</h3>
                    </div>
                        <div className="username border_height">
                            <input name="userName" type="text" onFocus={this.onName} onBlur={this.outName} value={this.state.userName} onChange={this.handleChange} />
                        </div>
                        <div className="pwd border_height">
                            <input name="userPassword" type="text" onFocus={this.onPassword} onBlur={this.outPassword} value={this.state.userPassword} onChange={this.handleChange} />
                            <img src="images/open.png" alt="明文显示密码"/>
                        </div>
                        <div>
                            <button onClick={this.getNamePassword} className="login_click border_height">登录</button>
                        </div>
                </div>
                <div className="tip">
                    <p className="tip_1" />
                </div>
            </div>
        )
    }
}