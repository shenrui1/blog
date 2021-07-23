var express = require('express');
var md_html = require('marked');
var Blog_blog = require('../model/blog');
var user = express.Router();
user.post('/', require('./user/user'));
user.get('/blogtext', require('./user/blogtext'));
user.post('/blogtext_post', require('./user/blogtext_post'));
module.exports = {
    user: user,
    md_html: md_html,
    Blog_blog: Blog_blog
};
