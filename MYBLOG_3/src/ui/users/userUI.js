import React from 'react';
import '../../css/users/user.css';

const UserUI = (props) => {
    return (
        <>
            <div className="all">
                <header className="out">
                <h1>
                    {props.curuser}，欢迎进入博客</h1>
                    <a href="#" className="logout" onClick={props.logout}>退出登录</a>
                </header>
                <div className="main_blog">
                    <div className="blog_title">
                        {
                            props.userList.map((item, key) => {
                                return (
                                    <div key={key} className='each_blog'>
                                        <h3 onClick={props.eachBlog.bind(this, key)}>{item.blogName}</h3>
                                        <div className='information'>
                                            <p className='light'>
                                                {item.blogAuthor}&nbsp;&nbsp;&nbsp;{item.blogDate}
                                            </p>
                                            <p className='key'>{item.blogClass}</p>
                                        </div>
                                        <div>{JSON.stringify(item.blogContent)}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* <footer>
                    <h4>shenrui 博客系统</h4>
                </footer> */}
            </div>
        </>
    )
}

export default UserUI;