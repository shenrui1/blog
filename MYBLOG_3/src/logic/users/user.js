import React, { Component } from 'react';
import UserUI from '../../ui/users/userUI';
import {common} from '../../app';
import axios from 'axios';


export default class User extends Component {
    constructor(props) {
        super(props);
        common.on('inuser', data => {
            this.state = data;
        })
        common.on('curuser', data => {
            this.state.curuser = data.curuser
        })
    }
    
    render() {
        return (
            <UserUI
                curuser = {this.state.curuser}
                userList = {this.state.userList}
                eachBlog = {this.eachBlog}
                logout = {this.logout}
            />
        )
    }

    eachBlog = (key) => {
        axios
        .post('http://localhost:3001/user/blogtext_post', {blogName: this.state.userList[key].blogName})
        .then((res) => {
            let data = res.data;
            common.emit('eventaction', {
                blogName: data.blogName,
                blogAuthor: data.blogAuthor,
                blogDate: data.blogDate,
                blogClass: data.blogClass,
                blogContent: data.blogContent
            })
            this.props.history.push('/blogtext');
        });
    }

    logout = () => {
        this.props.history.push('/login');
    }
}
