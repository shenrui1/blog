import React, { Component } from 'react';
import './add_blog.css';

export default class AddBlog extends Component {
    state = {
        blogName: '',
        Express: false,
        React: false,
        Webpack: false,
        MySQL: false,
        TypeScript: false,
        blogContent: '',
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
            <div className="add_blog">
                <h2>编辑新文章</h2>
                <form action="../routes/admin/add_blog_post" method="post" id="addBlog">
                <table>
                    <tbody><tr>
                        <td>文章名称：</td>
                        <td style={{textAlign: 'left'}}>
                        <input name="blogName" id="blogName" type="text" value={this.state.blogName} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>作者：</td>
                        <td style={{textAlign: 'left'}}>
                        <input name="blogAuthor" type="text" defaultValue="<%= title %>" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>文章类别：</td>
                        <td className="align_left">
                        <p>
                            <input type="checkbox" name="blogClass" id="Express" className="blog_class" defaultValue="Express" checked={this.state.Express} onChange={this.handleChange} /><label htmlFor="Express">Express</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="React" className="blog_class" defaultValue="React" checked={this.state.React} onChange={this.handleChange} /><label htmlFor="React">React</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="Webpack" className="blog_class" defaultValue="Webpack" checked={this.state.Webpack} onChange={this.handleChange} /><label htmlFor="Webpack">Webpack</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="MySQL" className="blog_class" defaultValue="MySQL" checked={this.state.MySQL} onChange={this.handleChange} /><label htmlFor="MySQL">MySQL</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="TypeScript" className="blog_class" defaultValue="TypeScript" checked={this.state.TypeScript} onChange={this.handleChange} /><label htmlFor="TypeScript">TypeScript</label>
                        </p>
                        </td>
                    </tr>
                    <tr>
                        <td>文章内容:</td>
                        <td>
                        <textarea name="blogContent" id="blogContent" cols={150} rows={30} style={{resize: 'none'}} value={this.state.addblog_content} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                        <input type="submit" defaultValue="确认发布" />
                        </td>
                    </tr>
                    </tbody></table>
                </form>
            </div>
        )
    }
}
