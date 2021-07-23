import React from 'react';
import '../../css/administrators/del_user.css';

const DelUserUI = (props) => {
    return (
        <div className="delete_user">
            <h2>删除账号</h2>
            <form id="delUser">
            <table>
                <tbody><tr>
                    <td>删除用户名：</td>
                    <td>
                    <input name="userName" id="deluser_name" type="text" value={props.userName} onChange={props.handleChange} />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td>
                        <button id="delete_id" onClick={props.del}>确认删除</button>
                    </td>
                </tr>
                </tbody></table>
            </form>
        </div>
    )
}

export default DelUserUI;