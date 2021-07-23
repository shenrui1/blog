import React, { Component } from 'react';
import store from '../../store/index';
import BlogsUI from '../../ui/administrators/blogsUI';
import {componentDidMountActionBlogs} from '../../store/actions/admin_action';
import {common} from '../../app';


export default class Blogs extends Component {
    constructor(props) {
        super(props);
        common.on('admin_blogs', data => {
            this.state = data;
        })
    }
    
    render() {
        return (
            <BlogsUI
                userList = {this.state.userList}
            />
        )
    }
}
