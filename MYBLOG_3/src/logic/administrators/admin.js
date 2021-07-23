import React, { Component } from 'react';
import store from '../../store/index';
import AdminUI from '../../ui/administrators/adminUI';
import {common} from '../../app';
import axios from 'axios';


export default class Admin extends Component {
    constructor(props) {
        super(props);
        common.on('curuser', data => {
            this.state = data;
        })
    }
    
    render() {
        return (
            <AdminUI
                curuser = {this.state.curuser}
                allUsers = {this.allUsers}
                allBlogs = {this.allBlogs}
                logout = {this.logout}
            />
        )
    }

    allUsers = () => {
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

    allBlogs = () => {
        axios
        .post('http://localhost:3001/admin/blogs')
        .then((res) => {
            let data = res.data;
            common.emit('admin_blogs', {
                userList: data
            })
            this.props.history.push('/admin/blogs');
        });
    }

    logout = () => {
        this.props.history.push('/login');
    }
}
