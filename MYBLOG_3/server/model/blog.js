// 创建文章集合

var Mysql = require('mysql');

var connection = Mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'mydatabase'
});

var BLOG = {
    add: (post) => {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO blogs SET ?';
            connection.query(sql, post, (err, _result) => {
                if(err) throw err;
                resolve('添加成功！');
            });
        });
    },

    del: (post) => {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM mydatabase.blogs WHERE blogName ="' + post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve('已删除！');
            });
        });
    },

    searchSpeci: (post) => {
        return new Promise((resolve, reject) => {
            let sql = 'select * from mydatabase.blogs WHERE blogName="' + post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result[0]);
            });
        });
    },

    searchAll: () => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM mydatabase.blogs';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result);
            });
        });
    }
}

module.exports = BLOG;