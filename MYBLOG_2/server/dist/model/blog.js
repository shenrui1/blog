// 创建文章集合
// import Mysql from 'mysql';

// var Mysql = require('mysql');


class BLOG {
    constructor(post) {
        this.post = post;
    }

    add() {
        return new Promise((resolve, _reject) => {
            let sql = 'INSERT INTO blogs SET ?';
            connection.query(sql, this.post, (err, _result) => {
                if(err) throw err;
                resolve('添加成功！');
            });
        });
    }

    del() {
        return new Promise((resolve, _reject) => {
            let sql = 'DELETE FROM mydatabase.blogs WHERE blogName ="' + this.post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve('已删除！');
            });
        });
    }

    searchSpeci() {
        return new Promise((resolve, reject) => {
            let sql = 'select * from mydatabase.blogs WHERE blogName="' + this.post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result[0]);
            });
        });
    }

    searchAll() {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM mydatabase.blogs';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result);
            });
        });
    }
}


export default BLOG;