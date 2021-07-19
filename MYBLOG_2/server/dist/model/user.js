// 创建用户集合

// var Mysql = require('mysql');

class USER {
    constructor(post) {
        this.post = post;
    }

    add() {
        return new Promise((resolve, _reject) => {
            let sql = 'INSERT INTO users SET ?';
            connection.query(sql, this.post, (err, _result) => {
                if(err) throw err;
                resolve('添加成功！');
            });
        });
    }

    del() {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM mydatabase.users WHERE userName ="' + this.post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve('已删除！');
            });
        });
    }

    searchSpeci() {
        return new Promise((resolve, reject) => {
            let sql = 'select * from mydatabase.users WHERE userName="' + this.post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result[0]);
            });
        });
    }

    searchAll() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM mydatabase.users';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result);
            });
        });
    }
}


export default USER;