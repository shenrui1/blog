import React, { Component } from 'react';
import './admin_search_blog.css';

export default class AdminSearchBlog extends Component {
    state = {
        searchblog_name: '',
        sExpress: false,
        sReact: false,
        sWebpack: false,
        sMySQL: false,
        sTypeScript: false
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
            <div className="search_blog">
                <h2>搜索文章</h2>
                <form action="../routes/admin/search_blog_post" method="post" id="searchBlog">
                <table>
                    <tbody><tr>
                        <td>按文章名搜索：</td>
                        <td>
                        <input name="blogName" id="blogName" type="text" value={this.state.blogName} onChange={this.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>按类别搜索：</td>
                        <td className="align_left">
                        <p>
                            <input type="checkbox" name="blogClass" id="sExpress" className="blog_class" defaultValue="Express" checked={this.state.sExpress} onChange={this.handleChange} /><label htmlFor="sExpress">Express</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="sReact" className="blog_class" defaultValue="React" checked={this.state.sReact} onChange={this.handleChange} /><label htmlFor="sReact">React</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="sWebpack" className="blog_class" defaultValue="Webpack" checked={this.state.sWebpack} onChange={this.handleChange} /><label htmlFor="sWebpack">Webpack</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="sMySQL" className="blog_class" defaultValue="MySQL" checked={this.state.sMySQL} onChange={this.handleChange} /><label htmlFor="sMySQL">MySQL</label>
                        </p>
                        <p>
                            <input type="checkbox" name="blogClass" id="sTypeScript" className="blog_class" defaultValue="TypeScript" checked={this.state.sTypeScript} onChange={this.handleChange} /><label htmlFor="sTypeScript">TypeScript</label>
                        </p>
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                        <input type="submit" defaultValue="搜索" />
                        </td>
                    </tr>
                    </tbody></table>
                </form>
            </div>
        )
    }
}
