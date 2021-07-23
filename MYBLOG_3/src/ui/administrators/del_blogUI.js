import React from 'react';
import '../../css/administrators/del_blog.css';

const DelBlogUI = (props) => {
    return (
        <div className="delete_blog">
            <h2>删除文章</h2>
            <form id="delBlog">
                <table>
                    <tbody><tr>
                        <td>删除文章名：</td>
                        <td>
                        <input name="blogName" id="blogName" type="text" value={props.blogName} onChange={props.handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td>
                            <button id="delete_blog" onClick={props.del}>确认删除</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}

export default DelBlogUI;