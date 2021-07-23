import React from 'react';
import ReactDOM from 'react-dom';
import APP from './app';
import './index.css'
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <APP />
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);