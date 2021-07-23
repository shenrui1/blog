import React, { Component } from 'react';
import AddBlogUI from '../../ui/administrators/add_blogUI';
import axios from 'axios';
import {common} from '../../app';


export default class AddBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogName: '',
            Express: false,
            React: false,
            Webpack: false,
            MySQL: false,
            TypeScript: false,
            blogContent: ''
        }
        common.on('curuser', data => {
            this.state.blogAuthor = data.curuser
        })
    }
    
    render() {
        return (
            <AddBlogUI
                blogName = {this.state.blogName}
                blogAuthor = {this.state.blogAuthor}
                Express = {this.state.Express}
                React = {this.state.React}
                Webpack = {this.state.Webpack}
                MySQL = {this.state.MySQL}
                TypeScript = {this.state.TypeScript}
                blogContent = {this.state.blogContent}
                handleChange = {this.handleChange}
                add = {this.add}
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

    add = () => {
        let c_list = ['Express', 'React', 'Webpack', 'MySQL', 'TypeScript'];
        let s_list = [this.state.Express, this.state.React, this.state.Webpack, this.state.MySQL, this.state.TypeScript];
        let fin_class = [];
        for(let i = 0; i < c_list.length; i++) {
            if(s_list[i]) {
                fin_class.push(c_list[i]);
            }
        }

        if(!this.state.blogName.trim().length) alert('请输入文章名称！');
        else if(!fin_class.length) alert('请选择文章类别！');
        else if(!this.state.blogContent.trim().length) alert('请输入文章内容！');
        else {
            axios
            .post('http://localhost:3001/admin/add_blog_post', {blogName: this.state.blogName, blogAuthor: this.state.blogAuthor, blogClass: fin_class, blogContent: this.state.blogContent})
            .then((res) => {
                if(res.data !== '添加成功！') alert(res.data);
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
}
