import React, { Component } from 'react';
import SearchBlogListUI from '../../ui/administrators/search_blog_listUI';
import {common} from '../../app';
import axios from 'axios';


export default class SearchBlogList extends Component {
    constructor(props) {
        super(props);
        common.on('searchaction', data => {
            this.state = {
                blogs: data.blogslist
            }
        })
    }
    
    render() {
        return (
            <SearchBlogListUI
                blogs = {this.state.blogs}
                eachBlog = {this.eachBlog}
            />
        )
    }

    eachBlog = (key) => {
        axios
        .post('http://localhost:3001/admin/search_blog_post', {blogName: this.state.blogs[key].blogName, blogClass: ''})
        .then((res) => {
            if(res.data == '请输入文章名或选择文章类别！') alert(res.data);
            else if(res.data == '未查询到相关文章！') alert(res.data);
            else {
                common.emit('modblog', {
                    blogs: res.data
                })
                this.props.history.push('/admin/mod_blog');
            }
        });
    }
}
