var express = require('express');
let md_html = require('marked');
const Blog_blog = require('../model/blog');

var user = express.Router();

user.post('/', require('./user/user'));

user.get('/blogtext', require('./user/blogtext'));

user.post('/blogtext_post', require('./user/blogtext_post'));

module.exports = {
    user,
    md_html,
    Blog_blog
};