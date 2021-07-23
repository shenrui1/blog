import React from 'react';
import '../../css/administrators/admin_search_blog.css';

const AdminSearchBlogUI = (props) => {
    return (
        <div className="search_blog">
            <h2>搜索文章</h2>
            <form id="searchBlog">
            <table>
                <tbody><tr>
                    <td>按文章名搜索：</td>
                    <td>
                    <input name="blogName" id="blogName" type="text" value={props.blogName} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>按类别搜索：</td>
                    <td className="align_left">
                    <p>
                        <input type="checkbox" name="blogClass" id="Express" className="blog_class" defaultValue="Express" checked={props.Express} onChange={props.handleChange} /><label htmlFor="Express">Express</label>
                    </p>
                    <p>
                        <input type="checkbox" name="blogClass" id="React" className="blog_class" defaultValue="React" checked={props.React} onChange={props.handleChange} /><label htmlFor="React">React</label>
                    </p>
                    <p>
                        <input type="checkbox" name="blogClass" id="Webpack" className="blog_class" defaultValue="Webpack" checked={props.Webpack} onChange={props.handleChange} /><label htmlFor="Webpack">Webpack</label>
                    </p>
                    <p>
                        <input type="checkbox" name="blogClass" id="MySQL" className="blog_class" defaultValue="MySQL" checked={props.MySQL} onChange={props.handleChange} /><label htmlFor="MySQL">MySQL</label>
                    </p>
                    <p>
                        <input type="checkbox" name="blogClass" id="TypeScript" className="blog_class" defaultValue="TypeScript" checked={props.TypeScript} onChange={props.handleChange} /><label htmlFor="TypeScript">TypeScript</label>
                    </p>
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button onClick={props.search}>搜索</button>
                    </td>
                </tr>
                </tbody></table>
            </form>
        </div>
    )
}

export default AdminSearchBlogUI;