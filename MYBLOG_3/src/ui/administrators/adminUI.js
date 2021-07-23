import React from 'react';
import '../../css/administrators/admin.css';
import Users from '../../logic/administrators/users';
import AddUser from '../../logic/administrators/add_user';
import DelUser from '../../logic/administrators/del_user';
import Blogs from '../../logic/administrators/blogs';
import AddBlog from '../../logic/administrators/add_blog';
import AdminSearchBlog from '../../logic/administrators/admin_search_blog';
import SearchBlogList from '../../logic/administrators/search_blog_list';
import ModBlog from '../../logic/administrators/mod_blog';
import DelBlog from '../../logic/administrators/del_blog';
import {Route, Link} from 'react-router-dom';


const AdminUI = (props) => {
    return (
        <div>
            <div className="all">
                <header className="out">
                <h1>
                    {props.curuser}，欢迎进入博客</h1>
                    <a href="#" className="logout" onClick={props.logout}>退出登录</a>
                </header>
                <div className="main_tab">
                <nav>
                    <ul className="first_level">
                    <li className="first_level_li">
                        <h4 onClick={props.allUsers}>账号管理</h4>
                        <ul className="second_level_user">
                        <li><Link to="/admin/add_user">添加新账号</Link></li>
                        <li><Link to="/admin/del_user">删除账号</Link></li>
                        </ul>
                    </li>
                    <li className="first_level_li">
                        <h4 onClick={props.allBlogs}>文章管理</h4>
                        <ul className="second_level_blog">
                        <li><Link to="/admin/add_blog">编辑新文章</Link></li>
                        <li><Link to="/admin/admin_search_blog">查询/修改文章</Link></li>
                        <li><Link to="/admin/del_blog">删除文章</Link></li>
                        </ul>
                    </li>
                    </ul>
                </nav>
                <div className="edit">
                    <div className="main_content">
                        <Route path="/admin/user" component={Users} />
                        <Route path="/admin/add_user" component={AddUser} />
                        <Route path="/admin/del_user" component={DelUser} />
                        <Route path="/admin/blogs" component={Blogs} />
                        <Route path="/admin/add_blog" component={AddBlog} />
                        <Route path="/admin/admin_search_blog" component={AdminSearchBlog} />
                        <Route path="/admin/search_blog_list" component={SearchBlogList} />
                        <Route path="/admin/mod_blog" component={ModBlog} />
                        <Route path="/admin/del_blog" component={DelBlog} />
                    </div>
                </div>
                </div>
                {/* <footer>
                <h4>shenrui 博客系统</h4>
                </footer> */}
            </div>
        </div>
    )
}


export default AdminUI;