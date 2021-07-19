import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './user.css';

export default class User extends Component {
    state = {
        bloglist: [
            {blogTitle: '第一篇', blogAuthor: 'one', blogDate: '2021-7-18', blogClass: 'express', blogContent: '此处是文章内容'},
            {blogTitle: '第er篇', blogAuthor: 'one', blogDate: '2021-7-18', blogClass: 'express', blogContent: '此处是文章内容'},
            {blogTitle: '第san篇', blogAuthor: 'one', blogDate: '2021-7-18', blogClass: 'express', blogContent: '此处是文章内容'},
            {blogTitle: '第si篇', blogAuthor: 'one', blogDate: '2021-7-18', blogClass: 'express', blogContent: '此处是文章内容'},
            {blogTitle: '第wu篇', blogAuthor: 'one', blogDate: '2021-7-18', blogClass: 'express', blogContent: '此处是文章内容'}
        ]
    }

    renderBlogList() {
        if(!this.state.bloglist.length) {
            return (<div>暂无文章</div>);
        }
        return (
            <ul>
                {this.state.bloglist.map(item => (
                    <li key={item.blogTitle} className="each_blog">
                        <h3>{item.blogTitle}</h3>
                        <div className="information"><p className="light">{item.blogAuthor}&nbsp;&nbsp;&nbsp;&nbsp;{item.blogDate}</p>&nbsp;&nbsp;&nbsp;&nbsp;<p className="keys">{item.blogClass}</p></div>
                        <div>{item.blogContent}</div>
                    </li>
                ))}
            </ul>
        )
    }

    logout = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <>
                <p className="hidden_blog" style={{display: 'none'}}>
                    &lt;%= blogList %&gt;
                </p>
                <div className="all">
                    <header className="out">
                    <h1>
                        欢迎进入博客</h1>
                        <a href="#" className="logout" onClick={this.logout}>退出登录</a>
                    </header>
                    <div className="main_blog">
                        {/* <nav>
                            <ul>
                                <li>Express</li>
                                <li>React</li>
                                <li>Webpack</li>
                                <li>MySQL</li>
                                <li>TypeScript</li>
                            </ul>
                        </nav> */}
                        <div className="blog_title">
                            {this.renderBlogList()}
                        </div>
                    </div>
                    <footer>
                    <h4>shenrui 博客系统</h4>
                    </footer>
                </div>
            </>
        )
    }
}
