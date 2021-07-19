import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link} from 'react-router-dom';
import AddUser from './add_user';
import DelUser from './del_user';
import AddBlog from './add_blog';
import AdminSearchBlog from './admin_search_blog';
import DelBlog from './del_blog';
import Users from './users';
import Blogs from './blogs';
import './admin.css';

export default class Admin extends Component {
    logout = () => {
        this.props.history.push('/login')
    }

    render() {
        return (
            <Router>
            <div>
                <p className="hidden_all" style={{display: 'none'}}>
                    &lt;%= renderUsers %&gt;
                </p>
                <p className="hidden_all_blogs" style={{display: 'none'}}>
                    &lt;%= renderBlogs %&gt;
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
                            <h4><Link to="/user">账号管理</Link></h4>
                            <ul className="second_level_user">
                            <li><Link to="/add_user">添加新账号</Link></li>
                            <li><Link to="/del_user">删除账号</Link></li>
                            </ul>
                        </li>
                        <li className="first_level_li">
                            <h4><Link to="/blogs">文章管理</Link></h4>
                            <ul className="second_level_blog">
                            <li><Link to="/add_blog">编辑新文章</Link></li>
                            <li><Link to="/admin_search_blog">查询/修改文章</Link></li>
                            <li><Link to="/del_blog">删除文章</Link></li>
                            </ul>
                        </li>
                        </ul>
                    </nav>
                    <div className="edit">
                        <div className="main_content">
                            <Route path="/user" component={Users} />
                            <Route path="/add_user" component={AddUser} />
                            <Route path="/del_user" component={DelUser} />
                            <Route path="/blogs" component={Blogs} />
                            <Route path="/add_blog" component={AddBlog} />
                            <Route path="/admin_search_blog" component={AdminSearchBlog} />
                            <Route path="/del_blog" component={DelBlog} />
                        </div>
                    </div>
                    </div>
                    <footer>
                    <h4>shenrui 博客系统</h4>
                    </footer>
                </div>
            </div>
            </Router>
        )
    }
}
