import React from 'react';
import {Route} from 'react-router-dom';
import Login from './views/login';
import User from './views/users/user';
import BlogText from './views/users/blogtext';
import Admin from './views/administrators/admin';
import SearchBlog from './views/administrators/search_blog';
import SearchClass from './views/administrators/search_class';

// const {Provider, Consumer} = React.createContext();

function App() {
    return (
        <>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/user_login' component={User}/>
            <Route path='/blogtext' component={BlogText}/>
            <Route path='/admin' component={Admin}/>
            <Route path='/search_blog' component={SearchBlog}/>
            <Route path='/search_class' component={SearchClass}/>
        </>
    );
}

export default App;
