import React from 'react';
import '../../css/administrators/mod_blog.css';


const ModBlogUI = (props) => {
    return (
        <div className="main_content">
            <h2>修改文章</h2>
            <form id="modBlog">
            <table>
                <tbody><tr>
                    <td>原文章名称：</td>
                    <td style={{textAlign: 'left'}}>
                    <input name="o_blogName" type="text" defaultValue={props.blogName} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>新文章名称：</td>
                    <td style={{textAlign: 'left'}}>
                    <input name="blogName" type="text" id="blogName" value={props.blogName} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>原作者：</td>
                    <td style={{textAlign: 'left'}}>
                    <input name="o_blogAuthor" type="text" defaultValue={props.blogAuthor} readOnly />
                    </td>
                </tr>
                <tr>
                    <td>新作者：</td>
                    <td style={{textAlign: 'left'}}>
                    <input name="blogAuthor" type="text" id="blogAuthor" value={props.blogAuthor} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td>文章类别：</td>
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
                    <td>文章内容:</td>
                    <td>
                    <textarea name="blogContent" cols={150} rows={30} style={{resize: 'none'}} value={props.blogContent} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button onClick={props.mod}>确认修改</button>
                    </td>
                </tr>
                </tbody></table>
            </form>
        </div>
    )
}

export default ModBlogUI;