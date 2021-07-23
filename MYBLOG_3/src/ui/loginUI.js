import React from 'react';
import { Button, Input, List} from 'antd';
import 'antd/dist/antd.css';
import '../css/login.css';

const LoginUI = (props) => {
    return (
        <div className='out_border'>
            <h1 className="head">博&nbsp;客&nbsp;登&nbsp;录</h1>
            <div className='login'>
                <Input 
                    placeholder={props.userName}
                    style={{width:'60%', height:'45px', margin:'10px'}}
                    onChange={props.changeUser}
                />
                <br />
                <Input 
                    type='password'
                    placeholder={props.userPassword}
                    style={{width:'60%', height:'45px', margin:'10px'}}
                    onChange={props.changePassword}
                />
                <br />
                <Button 
                    type='primary'
                    style={{width:'30%', height:'40px', margin:'10px'}}
                    onClick={props.login}
                >登录</Button>
            </div>
        </div>
    )
}

export default LoginUI;