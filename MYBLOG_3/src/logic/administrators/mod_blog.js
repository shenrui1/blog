import React, { Component } from 'react';
import ModBlogUI from '../../ui/administrators/mod_blogUI';
import {common} from '../../app';
import axios from 'axios';


export default class ModBlog extends Component {
    constructor(props) {
        super(props);
        common.on('modblog', data => {
            this.state = {
                o_blogName: data.blogs.blogName,
                blogName: data.blogs.blogName,
                blogAuthor: data.blogs.blogAuthor,
                blogClass: data.blogs.blogClass,
                blogContent: data.blogs.blogContent,
                Express: false,
                React: false,
                Webpack: false,
                MySQL: false,
                TypeScript: false,
            }
        })
    }
    
    render() {
        return (
            <ModBlogUI
                blogName = {this.state.blogName}
                blogAuthor = {this.state.blogAuthor}
                blogClass = {this.state.blogClass}
                Express = {this.state.Express}
                React = {this.state.React}
                Webpack = {this.state.Webpack}
                MySQL = {this.state.MySQL}
                TypeScript = {this.state.TypeScript}
                blogContent = {this.state.blogContent}
                handleChange = {this.handleChange}
                mod = {this.mod}
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

    mod = () => {
        let c_list = ['Express', 'React', 'Webpack', 'MySQL', 'TypeScript'];
        let s_list = [this.state.Express, this.state.React, this.state.Webpack, this.state.MySQL, this.state.TypeScript];
        let fin_class = [];
        for(let i = 0; i < c_list.length; i++) {
            if(s_list[i]) {
                fin_class.push(c_list[i]);
            }
        }
        axios
        .post('http://localhost:3001/admin/mod_blog_post', {o_blogName: this.state.o_blogName, blogName: this.state.blogName, blogAuthor: this.state.blogAuthor, blogClass: fin_class, blogContent: this.state.blogContent})
        .then((res) => {
            if(res.data !== '修改成功！') alert(res.data);
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
