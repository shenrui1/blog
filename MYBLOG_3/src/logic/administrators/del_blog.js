import React, { Component } from 'react';
import DelBlogUI from '../../ui/administrators/del_blogUI';
import axios from 'axios';
import {common} from '../../app';


export default class DelBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogName: ''
        }
    }
    
    render() {
        return (
            <DelBlogUI
                blogName = {this.state.blogName}
                handleChange = {this.handleChange}
                del = {this.del}
            />
        )
    }

    handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.id;
        this.setState({
            [name]: value
        })
    }

    del = () => {
        axios
        .post('http://localhost:3001/admin/del_blog_post', {blogName: this.state.blogName})
        .then((res) => {
            if(res.data !== '删除成功！') alert(res.data);
            else {
                alert(res.data);
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
        });
    }
}
