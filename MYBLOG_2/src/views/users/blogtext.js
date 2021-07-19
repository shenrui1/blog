import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import './blogtext.css';

export default class BlogText extends Component {
    logout = () => {
        this.props.history.push('/login')
    }

    beforePage = () => {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div className="all">
                <header className="out">
                    <a href="#" className="backhome" onClick={this.beforePage}>返回主页</a>
                    <h1>
                    欢迎进入博客</h1>
                    <a href="#" className="logout" onClick={this.logout}>退出登录</a>
                </header>
                <main>
                    <header className="blogTitle">
                    <h1>
                        &lt;%= blogName %&gt;
                    </h1>
                    </header>
                    <div className="information">
                    <p className="light">
                        &lt;%= blogAuthor %&gt;&nbsp;&nbsp;&nbsp;
                        &lt;%= blogDate %&gt;
                    </p>
                    <p className="keys">
                        &lt;%= blogClass %&gt;
                    </p>
                    </div>
                    <article>
                    <p className="hidden" style={{display: 'none'}}>
                        &lt;%= blogContent %&gt;
                    </p>
                    </article>
                </main>
                <footer>
                    <h4>shenrui 博客系统</h4>
                </footer>
            </div>

        )
    }
}
