import React, { Component } from 'react';
import DelUserUI from '../../ui/administrators/del_userUI';
import axios from 'axios';
import {common} from '../../app';


export default class DelUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }
    
    render() {
        return (
            <DelUserUI
                handleChange = {this.handleChange}
                del = {this.del}
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

    del = () => {
        axios
        .post('http://localhost:3001/admin/del_user_post', {userName: this.state.userName})
        .then((res) => {
            if(res.data !== '删除成功！') alert(res.data);
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
