var express = require('express');
var md_html_admin = require('marked');
var User_user = require('../model/user');
var Blog_admin = require('../model/blog');
var class_table = require('../model/class');
var admin = express.Router();
admin.post('/users', require('./admin/admin'));
admin.post('/blogs', require('./admin/admin_b'));
admin.get('/add_blog', require('./admin/add_blog'));
admin.post('/add_blog_post', require('./admin/add_blog_post'));
admin.get('/add_user', require('./admin/add_user'));
admin.post('/add_user_post', require('./admin/add_user_post'));
admin.get('/del_blog', require('./admin/del_blog'));
admin.post('/del_blog_post', require('./admin/del_blog_post'));
admin.get('/del_user', require('./admin/del_user'));
admin.post('/del_user_post', require('./admin/del_user_post'));
admin.get('/mod_blog', require('./admin/mod_blog'));
admin.post('/mod_blog_post', require('./admin/mod_blog_post'));
admin.get('/search_blog', require('./admin/search_blog'));
admin.post('/search_blog_post', require('./admin/search_blog_post'));
admin.get('/admin_search_blog', require('./admin/add_blog'));
module.exports = {
    admin: admin,
    md_html_admin: md_html_admin,
    User_user: User_user,
    Blog_admin: Blog_admin,
    class_table: class_table
};
