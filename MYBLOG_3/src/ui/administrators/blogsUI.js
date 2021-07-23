import React from 'react';
import '../../css/administrators/blogs.css';

const BlogsUI = (props) => {
    return (
        <div className="blog">
            <h2>已发布文章</h2>
            <form>
            <table cellSpacing={0}>
                <thead><tr>
                    <th>序号</th>
                    <th>文章名</th>
                    <th>作者</th>
                    <th>日期</th>
                    <th>类别</th>
                </tr></thead>
                <tbody id="allBlogs">
                    {
                        props.userList.map((item, key) => {
                            return (
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>{item.blogName}</td>
                                    <td>{item.blogAuthor}</td>
                                    <td>{item.blogDate}</td>
                                    <td>{item.blogClass}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </form>
        </div>
    )
}

export default BlogsUI;