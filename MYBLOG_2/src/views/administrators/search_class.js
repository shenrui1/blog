import React, { Component } from 'react';
import './search_class.css';

export default class SearchClass extends Component {
    logout = () => {
        this.props.history.push('/login')
    }

    beforePage = () => {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <p className="hidden_blog" style={{display: 'none'}}>
                    &lt;%= blogList %&gt;
                </p>
                <div className="all">
                    <header className="out">
                    <h1>
                        欢迎进入博客</h1>
                        <a href="#" className="logout" onClick={this.logout}>退出登录</a>
                    </header>
                    <div className="main_tab">
                    <nav>
                        <ul className="first_level">
                        <li className="first_level_li">
                            <h4 onClick={this.beforePage}>返回</h4>
                        </li>
                        </ul>
                    </nav>
                    <div className="edit">
                        <div className="main_content" />
                    </div>
                    </div>
                    <footer>
                    <h4>shenrui 博客系统</h4>
                    </footer>
                </div>
            </div>

        )
    }
}
