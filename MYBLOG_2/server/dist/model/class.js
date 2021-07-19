// 创建用户集合

// var Mysql = require('mysql');

class CLASS {
    constructor(post) {
        this.post = post;
    }

    add() {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO classes SET ?';
            connection.query(sql, this.post, (err, result) => {
                if(err) throw err;
                resolve('添加成功！');
            });
        });
    }

    del() {
        return new Promise((resolve, reject) => {
            let sql = 'DELETE FROM mydatabase.classes WHERE classBlog ="' + this.post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve('已删除！');
            });
        });
    }
    
    searchSpeci() {
        return new Promise((resolve, reject) => {
            let sql = 'select * from mydatabase.classes WHERE className="' + this.post + '"';
            connection.query(sql, (err, result) => {
                if(err) throw err;
                resolve(result);
            });
        });
    }
}


export default CLASS;