// 创建用户集合
var mysql = require('mysql');
function User(post, flag) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'mydatabase'
    });
    // 添加新用户
    if (flag == 1) {
        return new Promise(function (resolve, reject) {
            var sql = 'INSERT INTO users SET ?';
            connection.query(sql, post, function (err, result) {
                if (err)
                    throw err;
                resolve('添加成功！');
            });
        });
    }
    // 删除用户
    if (flag == 2) {
        return new Promise(function (resolve, reject) {
            var sql = 'DELETE FROM mydatabase.users WHERE userName ="' + post + '"';
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                resolve('已删除！');
            });
        });
    }
    // 查询指定用户
    if (flag == 3) {
        return new Promise(function (resolve, reject) {
            var sql = 'select * from mydatabase.users WHERE userName="' + post + '"';
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                resolve(result[0]);
            });
        });
    }
    // 查询所有用户
    if (flag == 4) {
        return new Promise(function (resolve, reject) {
            var sql = 'SELECT * FROM mydatabase.users';
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                resolve(result);
            });
        });
    }
}
module.exports = {
    User: User
};
