// 连接数据库

var Mysql = require('mysql');

// var a = require('./user');
// var b = require('./blog');
// var c = require('./class');

var connection = Mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'mydatabase'
});

connection.connect((err, result) => {
    if(err) throw err;
    console.log(result);
    console.log('数据库连接成功！');
});

// a.User({userName: 'shen', userPassword:'111'}, 3);
// const now_date = new Date();
// b.Blog({blogName: 'Express简介', blogAuthor: 'shen', blogDate: now_date, blogClass: 'Express', blogContent: 'Express 是一个属于 Node 平台的 Web 应用开发框架，它提供了一系列的强大特性，帮助你创建各种 Web 应用。我们可以使用 npm install express 命令进行下载安装。Express 框架特性：提供了方便简洁的路由定义方式，对获取 HTTP 请求参数进行了简化处理，对模板引擎支持程序高，方便渲染动态 HTML 页面，提供了中间件机制，有效控制 HTTP 请求，拥有大量第'}, 1);
// c.Class({className: 'Express', classBlog:'Express简介'}, 1);

// connection.end();