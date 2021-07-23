import React, { Component } from 'react';
import AdminSearchBlogUI from '../../ui/administrators/admin_search_blogUI';
import {common} from '../../app';
import axios from 'axios';


export default class AdminSearchBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogName: '',
            Express: false,
            React: false,
            Webpack: false,
            MySQL: false,
            TypeScript: false,
        }
    }
    
    render() {
        return (
            <AdminSearchBlogUI
                blogName = {this.state.blogName}
                Express = {this.state.Express}
                React = {this.state.React}
                Webpack = {this.state.Webpack}
                MySQL = {this.state.MySQL}
                TypeScript = {this.state.TypeScript}
                handleChange = {this.handleChange}
                search = {this.search}
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

    search = () => {
        let c_list = ['Express', 'React', 'Webpack', 'MySQL', 'TypeScript'];
        let s_list = [this.state.Express, this.state.React, this.state.Webpack, this.state.MySQL, this.state.TypeScript];
        let fin_class = [];
        for(let i = 0; i < c_list.length; i++) {
            if(s_list[i]) {
                fin_class.push(c_list[i]);
            }
        }

        // 按文章名查询
        if(this.state.blogName.trim().length != 0) {
            axios
            .post('http://localhost:3001/admin/search_blog_post', {blogName: this.state.blogName, blogClass: fin_class})
            .then((res) => {
                if(res.data == '未查询到相关文章！') alert(res.data);
                else {
                    common.emit('modblog', {
                        blogs: res.data
                    })
                    this.props.history.push('/admin/mod_blog');
                }
            });
        }

        // 按类别查询
        else {
            this.state.blogName = '';
            axios
            .post('http://localhost:3001/admin/search_blog_post', {blogName: this.state.blogName, blogClass: fin_class})
            .then((res) => {
                if(res.data == '未查询到相关文章！') alert(res.data);
                else {
                    common.emit('searchaction', {
                        blogslist: res.data
                    })
                    this.props.history.push('/admin/search_blog_list');
                }
            });
        }
    }
}
