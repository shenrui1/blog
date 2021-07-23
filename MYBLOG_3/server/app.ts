var createError = require('http-errors');
// 使用app.use拦截所有的框架请求，然后将请求交给express框架处理
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session');

// 配置body-parser，即拦截请求，并将请求交给body-parser处理
// body-parser处理后，会在req下添加一个body属性，其中存储的就是post参数
var bodyParser = require('body-parser');

var app = express();

// 连接数据库
require('./model/connect');

// 处理post请求参数，用app.use这个中间件拦截所有请求
app.use(bodyParser.urlencoded({extended: false}));

// 配置session
app.use(session({secret: 'secretKey'}))

app.listen('3000');

// view engine setup
// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'public'));
// 当渲染后缀为.html的模板时，所使用的模板引擎是ejs
app.engine('.html', ejs.__express);
// 告诉express框架模板默认的后缀
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 处理静态资源文件，接收静态资源的存放目录
app.use(express.static(path.join(__dirname, 'public')));  

// 引入路由模块
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin').admin;
var userRouter = require('./routes/user').user;

// 判断用户是否登录
app.use('/', (req: any, res: any, next: any) => {
  if(req.url != '/' && req.url != '/login' && !req.session.userName) {
    res.redirect('/login');
  }
  else {
    next();
  }
});

// 为路由匹配请求路径
app.use('/', loginRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);

// catch 404 and forward to error handler
app.use(function(_req: any, _res: any, next: any) {
  next(createError(404));
});

// error handler
app.use(function(err: any, req: any, res: any, _next: any) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(res.locals.message);
});

module.exports = app;
