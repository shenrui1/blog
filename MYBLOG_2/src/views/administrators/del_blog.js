import React, { Component } from 'react';
import './del_blog.css';

export default class DelBlog extends Component {
    state = {
        delblog_name: ''
    }

    handleChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.id;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="delete_blog">
                <h2>删除文章</h2>
                <form action="../routes/admin/del_blog_post" method="post" id="delBlog">
                <table>
                    <tbody><tr>
                        <td>删除文章名：</td>
                        <td>
                        <input name="blogName" id="delblog_name" type="text" value={this.state.delblog_name} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                        <input type="submit" defaultValue="确认删除" id="delete_blog" />
                        </td>
                    </tr>
                    </tbody></table>
                </form>
            </div>
        )
    }
}
