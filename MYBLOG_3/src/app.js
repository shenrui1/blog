import React from 'react';
import {Route} from 'react-router-dom';
import eventProxy from './event';
import Login from './logic/login';
import User from './logic/users/user';
import BlogText from './logic/users/blogtext';
import Admin from './logic/administrators/admin';


export var common = eventProxy;

export default function App() {
    return (
        <>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/user_login' component={User}/>
            <Route path='/blogtext' component={BlogText}/>
            <Route path='/admin' component={Admin}/>
        </>
    );
}
