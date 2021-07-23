import React from 'react';
import '../../css/users/blogtext.css';

const BlogtextUI = (props) => {
    return (
        <div className="all">
            <header className="out">
                <a href="#" className="backhome" onClick={props.back}>返回主页</a>
                <h1>
                {props.curuser}，欢迎进入博客</h1>
                <a href="#" className="logout" onClick={props.logout}>退出登录</a>
            </header>
            <main>
                <header className="blogTitle">
                <h1>
                    {props.blogName}
                </h1>
                </header>
                <div className="information">
                <p className="light">
                    {props.blogAuthor}&nbsp;&nbsp;&nbsp;{props.blogDate}
                </p>
                <p className="keys">
                    {props.blogClass}
                </p>
                </div>
                <article dangerouslySetInnerHTML={{__html: props.blogContent}} />
            </main>
            {/* <footer>
                <h4>shenrui 博客系统</h4>
            </footer> */}
        </div>
    )
}

export default BlogtextUI;