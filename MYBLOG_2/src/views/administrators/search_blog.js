import React, { Component } from 'react';
import './search_blog.css';

export default class SearchBlog extends Component {
    render() {
        return (
            <div className="all">
                <header className="out">
                    <h1>
                    欢迎进入博客</h1>
                    <a href="#" className="logout">退出登录</a>
                </header>
                <div className="main_tab">
                    <nav>
                    <ul className="first_level">
                        <li className="first_level_li">
                        <h4>返回</h4>
                        </li>
                    </ul>
                    </nav>
                    <div className="edit">
                    <div className="main_content">
                        <h2>修改文章</h2>
                        <form action="../routes/admin/mod_blog_post" method="post" id="modBlog">
                        <table>
                            <tbody><tr>
                                <td>原文章名称：</td>
                                <td style={{textAlign: 'left'}}>
                                <input name="o_blogName" type="text" defaultValue="<%= blogName %>" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>新文章名称：</td>
                                <td style={{textAlign: 'left'}}>
                                <input name="blogName" type="text" defaultValue="<%= blogName %>" />
                                </td>
                            </tr>
                            <tr>
                                <td>原作者：</td>
                                <td style={{textAlign: 'left'}}>
                                <input name="o_blogAuthor" type="text" defaultValue="<%= blogAuthor%>" readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>新作者：</td>
                                <td style={{textAlign: 'left'}}>
                                <input name="blogAuthor" type="text" defaultValue="<%= blogAuthor%>" />
                                </td>
                            </tr>
                            <tr>
                                <td>文章类别：</td>
                                <td className="align_left">
                                <p>
                                    <input type="checkbox" name="blogClass" id="Express" className="blog_class" defaultValue="Express" /><label htmlFor="Express">Express</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="blogClass" id="React" className="blog_class" defaultValue="React" /><label htmlFor="React">React</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="blogClass" id="Webpack" className="blog_class" defaultValue="Webpack" /><label htmlFor="Webpack">Webpack</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="blogClass" id="MySQL" className="blog_class" defaultValue="MySQL" /><label htmlFor="MySQL">MySQL</label>
                                </p>
                                <p>
                                    <input type="checkbox" name="blogClass" id="TypeScript" className="blog_class" defaultValue="TypeScript" /><label htmlFor="TypeScript">TypeScript</label>
                                </p>
                                </td>
                            </tr>
                            <tr>
                                <td>文章内容:</td>
                                <td>
                                <textarea name="blogContent" cols={150} rows={30} style={{resize: 'none'}} defaultValue={"<%= blogContent %>"} />
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                <input type="submit" defaultValue="确认修改" />
                                </td>
                            </tr>
                            </tbody></table>
                        </form>
                    </div>
                    </div>
                </div>
                <footer>
                    <h4>shenrui 博客系统</h4>
                </footer>
            </div>
        )
    }
}
