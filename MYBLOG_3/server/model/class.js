// 创建用户集合

var Mysql = require('mysql');

var connection = Mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'mydatabase'
});

var CLASS = {
    add: (post) => {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO classes SET ?';
            connection.query(sql, post, (err, result) => {
                if(err) throw err;
                resolve('添加成功！');
            });
        });
    },

    del: (post) => {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM mydatabase.classes WHERE classBlog ="' + post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve('已删除！');
            });
        });
    },
    
    searchSpeci: (post) => {
        return new Promise((resolve, reject) => {
            let sql = 'select * from mydatabase.classes WHERE className="' + post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result);
            });
        });
    }
}


module.exports = CLASS;