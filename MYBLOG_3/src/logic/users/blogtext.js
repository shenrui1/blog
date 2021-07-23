import React, { Component } from 'react';
import BlogtextUI from '../../ui/users/blogtextUI';
import {common} from '../../app';


export default class Blogtext extends Component {
    constructor(props) {
        super(props);
        common.on('eventaction', data => {
            this.state = data;
        })
        common.on('curuser', data => {
            this.state.curuser = data.curuser
        })
    }
    
    render() {
        return (
            <BlogtextUI
                curuser = {this.state.curuser}
                blogName = {this.state.blogName}
                blogAuthor = {this.state.blogAuthor}
                blogDate = {this.state.blogDate}
                blogClass = {this.state.blogClass}
                blogContent = {this.state.blogContent}
                back = {this.back}
                logout = {this.logout}
            />
        )
    }

    back = () => {
        this.props.history.push('/user_login');
    }

    logout = () => {
        this.props.history.push('/login');
    }
}
