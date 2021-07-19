// import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


// import '';
// var app = Express();

// require('./model/connect');


// app.use(bodyParser.urlencoded({extended: false}));
// app.use(session({secret: 'secretKey'}))

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);