import React, { Component } from 'react';
import './blogs.css';

export default class Blogs extends Component {
    render() {
        return (
            <div className="blog">
                <h2>已发布文章</h2>
                <form>
                <table cellSpacing={0}>
                    <thead>
                    <tr><th>序号</th>
                        <th>文章名</th>
                        <th>作者</th>
                        <th>日期</th>
                        <th>类别</th>
                        {/* <th>操作</th> */}
                    </tr></thead>
                    <tbody id="allBlogs" />
                </table>
                </form>
            </div>
        )
    }
}
