// 创建用户集合
var mysql = require('mysql');
function Class(post, flag) {
    var connection = mysql.createConnection({
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'mydatabase'
    });
    // 添加
    if (flag == 1) {
        return new Promise(function (resolve, reject) {
            var sql = 'INSERT INTO classes SET ?';
            connection.query(sql, post, function (err, result) {
                if (err)
                    throw err;
                resolve('添加成功！');
            });
        });
    }
    // 删除（指定文章名）
    if (flag == 2) {
        return new Promise(function (resolve, reject) {
            var sql = 'DELETE FROM mydatabase.classes WHERE classBlog ="' + post + '"';
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                resolve('已删除！');
            });
        });
    }
    // 查询（指定类名）传入的post是一个类别列表中的一项
    if (flag == 3) {
        return new Promise(function (resolve, reject) {
            var sql = 'select * from mydatabase.classes WHERE className="' + post + '"';
            connection.query(sql, function (err, result) {
                if (err)
                    throw err;
                resolve(result);
            });
        });
    }
}
module.exports = {
    Class: Class
};
